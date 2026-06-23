import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Vote() {
  const { code } = useParams()
  const [event, setEvent] = useState(null)
  const [allQuestions, setAllQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [votedQuestionIds, setVotedQuestionIds] = useState(new Set())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load event and all questions on mount
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

        // Load ALL questions for this event
        const { data: questionsData } = await supabase
          .from('questions')
          .select('*')
          .eq('event_id', eventData.id)
          .order('sort_order', { ascending: true })

        if (questionsData) {
          setAllQuestions(questionsData)
        }

        setLoading(false)
      } catch (err) {
        setError('Failed to load event')
        setLoading(false)
      }
    }

    loadEvent()
  }, [code])

  const handleVote = async (optionIndex) => {
    const question = allQuestions[currentIndex]
    if (!question || votedQuestionIds.has(question.id)) return

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

      setVotedQuestionIds(prev => {
        const next = new Set(prev)
        next.add(question.id)
        return next
      })
    } catch (err) {
      console.error('Failed to submit vote:', err)
    }
  }

  const goToNext = () => {
    if (currentIndex < allQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  // Current question and progress
  const question = allQuestions[currentIndex]
  const questionNumber = currentIndex + 1
  const totalQuestions = allQuestions.length
  const isLastQuestion = currentIndex === totalQuestions - 1
  const hasVotedCurrent = question && votedQuestionIds.has(question.id)
  const isComplete = totalQuestions > 0 && votedQuestionIds.size === totalQuestions

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
        {totalQuestions > 0 && (
          <div className="vote-progress">
            Question {questionNumber} of {totalQuestions}
          </div>
        )}
      </header>

      {isComplete ? (
        <div className="vote-confirmation">
          <div className="vote-checkmark">✓</div>
          <h3>All Done!</h3>
          <p style={{ color: '#3DDC84', fontSize: '1.2em', marginBottom: '20px' }}>
            You answered all {totalQuestions} questions
          </p>
          <Link to={`/poll/event/${code}/results`} className="vote-option-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
            See Results →
          </Link>
        </div>
      ) : !question ? (
        <div className="vote-waiting">
          <h2>No questions available</h2>
        </div>
      ) : hasVotedCurrent ? (
        <div className="vote-confirmation">
          <div className="vote-checkmark">✓</div>
          <h3>Answer Submitted!</h3>
          <p style={{ color: '#3DDC84', fontSize: '1.2em', marginBottom: '20px' }}>
            {questionNumber} of {totalQuestions} complete
          </p>
          {isLastQuestion ? (
            <Link to={`/poll/event/${code}/results`} className="vote-option-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              See Results →
            </Link>
          ) : (
            <button className="vote-option-btn" onClick={goToNext} style={{ textAlign: 'center' }}>
              Next Question →
            </button>
          )}
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