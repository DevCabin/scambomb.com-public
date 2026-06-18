import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Vote() {
  const { code } = useParams()
  const [event, setEvent] = useState(null)
  const [question, setQuestion] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load event and subscribe to active question changes
  useEffect(() => {
    async function loadEvent() {
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

        // Load active question if set
        if (eventData.active_question_id) {
          const { data: questionData } = await supabase
            .from('questions')
            .select('*')
            .eq('id', eventData.active_question_id)
            .single()

          setQuestion(questionData)
        }

        setLoading(false)

        // Subscribe to event changes (active_question_id updates)
        const eventSubscription = supabase
          .channel(`event-${eventData.id}`)
          .on(
            'postgres_changes',
            {
              event: 'UPDATE',
              schema: 'public',
              table: 'events',
              filter: `id=eq.${eventData.id}`,
            },
            async (payload) => {
              const updatedEvent = payload.new
              setEvent(updatedEvent)

              if (updatedEvent.active_question_id) {
                const { data: questionData } = await supabase
                  .from('questions')
                  .select('*')
                  .eq('id', updatedEvent.active_question_id)
                  .single()

                setQuestion(questionData)
                setHasVoted(false) // Reset vote state for new question
              } else {
                setQuestion(null)
              }
            }
          )
          .subscribe()

        return () => {
          supabase.removeChannel(eventSubscription)
        }
      } catch (err) {
        setError('Failed to load event')
        setLoading(false)
      }
    }

    loadEvent()
  }, [code])

  const handleVote = async (optionIndex) => {
    if (!question || hasVoted) return

    try {
      const { error: insertError } = await supabase
        .from('responses')
        .insert({
          question_id: question.id,
          option_index: optionIndex,
        })

      if (insertError) {
        console.error('Vote error:', insertError)
        return
      }

      setHasVoted(true)
    } catch (err) {
      console.error('Failed to submit vote:', err)
    }
  }

  if (loading) {
    return (
      <div className="vote-page">
        <div className="vote-waiting">
          <h2>Loading...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="vote-page">
        <div className="vote-error">
          <h2>Event Not Found</h2>
          <p>Please check your QR code or link and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="vote-page">
      <header className="vote-header">
        <h1>Live Poll</h1>
      </header>

      {!question ? (
        <div className="vote-waiting">
          <h2>Waiting for the next question...</h2>
        </div>
      ) : hasVoted ? (
        <div className="vote-confirmation">
          <h3>Thank You!</h3>
          <p>Your answer has been submitted.</p>
        </div>
      ) : (
        <div className="vote-question">
          <h2>{question.prompt}</h2>
          <div className="vote-options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className="vote-option-btn"
                onClick={() => handleVote(index)}
                disabled={hasVoted}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}