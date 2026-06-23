import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Control() {
  const { code } = useParams()
  const [event, setEvent] = useState(null)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        // Get event by code
        const { data: eventData, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('code', code)
          .single()

        if (eventError || !eventData) {
          setError('Event not found')
          setLoading(false)
          return
        }

        setEvent(eventData)

        // Get all questions for this event
        const { data: questionsData, error: questionsError } = await supabase
          .from('questions')
          .select('*')
          .eq('event_id', eventData.id)
          .order('sort_order', { ascending: true })

        if (questionsError) {
          console.error('Error loading questions:', questionsError)
        } else {
          setQuestions(questionsData || [])
        }

        setLoading(false)

        // Subscribe to question changes (reveal status updates)
        const questionsSubscription = supabase
          .channel(`questions-control-${eventData.id}`)
          .on(
            'postgres_changes',
            {
              event: 'UPDATE',
              schema: 'public',
              table: 'questions',
              filter: `event_id=eq.${eventData.id}`,
            },
            (payload) => {
              setQuestions((prev) =>
                prev.map((q) => (q.id === payload.new.id ? payload.new : q))
              )
            }
          )
          .subscribe()

        return () => {
          supabase.removeChannel(questionsSubscription)
        }
      } catch (err) {
        console.error('Error loading control data:', err)
        setError('Failed to load event')
        setLoading(false)
      }
    }

    loadData()
  }, [code])

  const setActiveQuestion = async (questionId) => {
    if (!event) return

    try {
      // Update event with active question and reset revealed status
      const { error: updateError } = await supabase
        .from('events')
        .update({ active_question_id: questionId })
        .eq('id', event.id)

      if (updateError) {
        console.error('Error setting active question:', updateError)
        return
      }

      // Reset revealed status on the question
      const { error: questionError } = await supabase
        .from('questions')
        .update({ revealed: false })
        .eq('id', questionId)

      if (questionError) {
        console.error('Error resetting revealed status:', questionError)
      }

      setEvent({ ...event, active_question_id: questionId })
    } catch (err) {
      console.error('Error:', err)
    }
  }

  const revealResults = async (questionId) => {
    try {
      const { error } = await supabase
        .from('questions')
        .update({ revealed: true })
        .eq('id', questionId)

      if (error) {
        console.error('Error revealing results:', error)
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  const revealAnswer = async (questionId) => {
    try {
      const { error } = await supabase
        .from('questions')
        .update({ answer_revealed: true })
        .eq('id', questionId)

      if (error) {
        console.error('Error revealing answer:', error)
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  if (loading) {
    return (
      <div className="control-page">
        <div className="control-loading">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="control-page">
        <div className="control-error">
          <h2>Event Not Found</h2>
          <p>Please check the event code and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="control-page">
      <header className="control-header">
        <h1>Presenter Control</h1>
        <p>Event: {code}</p>
      </header>

      <div className="control-questions">
        {questions.map((question) => {
          const isActive = event.active_question_id === question.id

          return (
            <div
              key={question.id}
              className={`control-question ${isActive ? 'active' : ''}`}
            >
              <div className="control-question-header">
                <h3>{question.prompt}</h3>
                {isActive && <span className="control-badge">Active</span>}
              </div>
              <div className="control-question-options">
                {question.options.join(' • ')}
              </div>
              <div className="control-actions">
                <button
                  className="control-btn control-btn-primary"
                  onClick={() => setActiveQuestion(question.id)}
                  disabled={isActive}
                >
                  {isActive ? 'Currently Active' : 'Set Active'}
                </button>
                <button
                  className="control-btn control-btn-secondary"
                  onClick={() => revealResults(question.id)}
                  disabled={!isActive || question.revealed}
                >
                  {question.revealed ? 'Results Revealed' : 'Reveal Results'}
                </button>
                <button
                  className="control-btn control-btn-success"
                  onClick={() => revealAnswer(question.id)}
                  disabled={!isActive || !question.revealed || question.answer_revealed}
                  style={{
                    background: question.answer_revealed ? '#2D3138' : '#3DDC84',
                    color: question.answer_revealed ? '#9BA3AF' : '#0B1426',
                    border: 'none'
                  }}
                >
                  {question.answer_revealed ? 'Answer Revealed' : 'Reveal Answer'}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {questions.length === 0 && (
        <div className="control-loading">
          <p>No questions found for this event.</p>
        </div>
      )}
    </div>
  )
}