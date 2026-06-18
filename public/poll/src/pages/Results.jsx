import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Results() {
  const { code } = useParams()
  const [event, setEvent] = useState(null)
  const [question, setQuestion] = useState(null)
  const [responses, setResponses] = useState([])
  const [loading, setLoading] = useState(true)

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

          // Load responses for this question
          const { data: responsesData } = await supabase
            .from('responses')
            .select('*')
            .eq('question_id', questionData.id)

          setResponses(responsesData || [])
        }

        setLoading(false)

        // Subscribe to event changes (active question)
        const eventSubscription = supabase
          .channel(`event-results-${eventData.id}`)
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

                // Load responses for new question
                const { data: responsesData } = await supabase
                  .from('responses')
                  .select('*')
                  .eq('question_id', questionData.id)

                setResponses(responsesData || [])
              } else {
                setQuestion(null)
                setResponses([])
              }
            }
          )
          .subscribe()

        // Subscribe to responses for the active question
        let responsesSubscription = null

        if (eventData.active_question_id) {
          responsesSubscription = supabase
            .channel(`responses-${eventData.active_question_id}`)
            .on(
              'postgres_changes',
              {
                event: 'INSERT',
                schema: 'public',
                table: 'responses',
                filter: `question_id=eq.${eventData.active_question_id}`,
              },
              (payload) => {
                setResponses((prev) => [...prev, payload.new])
              }
            )
            .subscribe()
        }

        return () => {
          supabase.removeChannel(eventSubscription)
          if (responsesSubscription) {
            supabase.removeChannel(responsesSubscription)
          }
        }
      } catch (err) {
        console.error('Error loading results:', err)
        setLoading(false)
      }
    }

    loadEvent()
  }, [code])

  // Subscribe to responses when question changes
  useEffect(() => {
    if (!question) return

    const responsesSubscription = supabase
      .channel(`responses-${question.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'responses',
          filter: `question_id=eq.${question.id}`,
        },
        (payload) => {
          setResponses((prev) => [...prev, payload.new])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(responsesSubscription)
    }
  }, [question])

  const calculateResults = () => {
    if (!question) return []

    const counts = new Array(question.options.length).fill(0)
    responses.forEach((response) => {
      if (response.option_index >= 0 && response.option_index < counts.length) {
        counts[response.option_index]++
      }
    })

    const total = responses.length
    return question.options.map((option, index) => ({
      option,
      count: counts[index],
      percentage: total > 0 ? Math.round((counts[index] / total) * 100) : 0,
    }))
  }

  if (loading) {
    return (
      <div className="results-page">
        <div className="results-counter">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!question) {
    return (
      <div className="results-page">
        <div className="results-counter">
          <p>Waiting for question...</p>
        </div>
      </div>
    )
  }

  const results = calculateResults()
  const totalVotes = responses.length
  const isRevealed = question.revealed

  return (
    <div className="results-page">
      <div className="results-question">
        <h2>{question.prompt}</h2>
      </div>

      {!isRevealed ? (
        <div className="results-counter">
          <p>
            <span>{totalVotes}</span> people have answered
          </p>
        </div>
      ) : (
        <div className="results-chart">
          {results.map((result, index) => (
            <div key={index} className="result-bar">
              <div className="result-label">{result.option}</div>
              <div className="result-bar-container">
                <div
                  className="result-bar-fill"
                  style={{ width: `${result.percentage}%` }}
                >
                  {result.percentage > 15 && (
                    <span className="result-bar-value">{result.percentage}%</span>
                  )}
                </div>
              </div>
              <div className="result-stats">
                <strong>{result.count}</strong> votes
              </div>
            </div>
          ))}
        </div>
      )}

      {isRevealed && totalVotes === 0 && (
        <div className="results-counter">
          <p>No votes yet</p>
        </div>
      )}
    </div>
  )
}