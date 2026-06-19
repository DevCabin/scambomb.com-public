'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

// Simple poll implementation directly in Next.js
// This avoids the Vite build issues entirely

type PollState = {
  step: 'code' | 'vote' | 'results' | 'control'
  eventCode: string
  question: {
    id: string
    prompt: string
    options: string[]
    revealed: boolean
  } | null
  selectedOption: number | null
  hasVoted: boolean
  votes: number[]
  totalVotes: number
}

export default function PollPage() {
  const searchParams = useSearchParams()
  const [state, setState] = useState<PollState>({
    step: 'code',
    eventCode: '',
    question: null,
    selectedOption: null,
    hasVoted: false,
    votes: [],
    totalVotes: 0
  })

  // Check URL params on load
  useEffect(() => {
    const code = searchParams.get('code')
    const view = searchParams.get('view') // 'vote', 'results', 'control'
    
    if (code) {
      setState(prev => ({ ...prev, eventCode: code }))
      
      // Load mock question for demo
      // In production, this would fetch from Supabase
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          step: view as PollState['step'] || 'vote',
          question: {
            id: 'demo-1',
            prompt: 'What percentage of adults 50+ are using AI tools?',
            options: ['25%', '55%', '75%', '90%'],
            revealed: view === 'results'
          },
          votes: [5, 12, 8, 3],
          totalVotes: 28
        }))
      }, 500)
    }
  }, [searchParams])

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (state.eventCode) {
      window.location.href = `/poll?code=${state.eventCode}&view=vote`
    }
  }

  const handleVote = (optionIndex: number) => {
    if (state.hasVoted) return
    
    setState(prev => ({
      ...prev,
      selectedOption: optionIndex,
      hasVoted: true,
      votes: prev.votes.map((v, i) => i === optionIndex ? v + 1 : v),
      totalVotes: prev.totalVotes + 1
    }))
  }

  const revealResults = () => {
    setState(prev => ({
      ...prev,
      question: prev.question ? { ...prev.question, revealed: true } : null
    }))
  }

  const setActiveQuestion = () => {
    // Mock function - would update Supabase in production
    console.log('Setting active question')
  }

  // Styles
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#0B1426',
    color: '#F0F2F5',
    fontFamily: 'Montserrat, sans-serif',
    padding: '20px'
  }

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px 0',
    borderBottom: '2px solid #FFD700',
    marginBottom: '30px'
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#FFD700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    margin: 0
  }

  const buttonStyle: React.CSSProperties = {
    background: '#1A1D21',
    border: '3px solid #2D3138',
    borderRadius: '12px',
    padding: '24px 20px',
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#F0F2F5',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'inherit',
    marginBottom: '15px',
    transition: 'all 0.2s ease'
  }

  const activeButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    borderColor: '#FFD700',
    background: '#23272A'
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px',
    fontSize: '1.2rem',
    borderRadius: '12px',
    border: '3px solid #2D3138',
    background: '#1A1D21',
    color: '#F0F2F5',
    fontFamily: 'inherit',
    marginBottom: '20px',
    boxSizing: 'border-box'
  }

  const submitButtonStyle: React.CSSProperties = {
    background: '#FFD700',
    color: '#0B1426',
    border: 'none',
    borderRadius: '12px',
    padding: '20px',
    fontSize: '1.2rem',
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
    fontFamily: 'inherit',
    textTransform: 'uppercase'
  }

  // Code Entry Step
  if (state.step === 'code') {
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '100px' }}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Live Poll</h1>
          </div>
          <form onSubmit={handleCodeSubmit}>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#9BA3AF' }}>
              Enter your event code
            </p>
            <input
              type="text"
              placeholder="e.g., WORKSHOP-JUNE"
              value={state.eventCode}
              onChange={(e) => setState(prev => ({ ...prev, eventCode: e.target.value }))}
              style={inputStyle}
            />
            <button type="submit" style={submitButtonStyle}>
              Join Poll
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Voting Step
  if (state.step === 'vote' && state.question && !state.hasVoted) {
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Live Poll</h1>
          </div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '30px', lineHeight: 1.4 }}>
            {state.question.prompt}
          </h2>
          <div>
            {state.question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleVote(index)}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFD700'
                  e.currentTarget.style.background = '#23272A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D3138'
                  e.currentTarget.style.background = '#1A1D21'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Vote Confirmation
  if (state.step === 'vote' && state.hasVoted) {
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', paddingTop: '100px' }}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Live Poll</h1>
          </div>
          <h2 style={{ color: '#3DDC84', fontSize: '1.8rem', marginBottom: '20px' }}>
            Thank You!
          </h2>
          <p style={{ color: '#9BA3AF', fontSize: '1.2rem' }}>
            Your answer has been submitted.
          </p>
        </div>
      </div>
    )
  }

  // Results Step
  if (state.step === 'results' && state.question) {
    const maxVotes = Math.max(...state.votes, 1)
    
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Live Results</h1>
          </div>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '50px' }}>
            {state.question.prompt}
          </h2>
          
          {!state.question.revealed ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <p style={{ fontSize: '1.5rem', color: '#9BA3AF' }}>
                <span style={{ color: '#FFD700', fontWeight: 700, fontSize: '2.5rem' }}>
                  {state.totalVotes}
                </span>
                <br />
                people have answered
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {state.question.options.map((option, index) => {
                const count = state.votes[index] || 0
                const percentage = state.totalVotes > 0 
                  ? Math.round((count / state.totalVotes) * 100) 
                  : 0
                
                return (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ minWidth: '150px', fontSize: '1.3rem', fontWeight: 600, textAlign: 'right' }}>
                      {option}
                    </div>
                    <div style={{ flex: 1, height: '60px', background: '#1A1D21', borderRadius: '8px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          width: `${percentage}%`,
                          background: 'linear-gradient(90deg, #FFD700, #FBBF24)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: '15px',
                          transition: 'width 0.5s ease'
                        }}
                      >
                        {percentage > 10 && (
                          <span style={{ color: '#0B1426', fontWeight: 700, fontSize: '1.2rem' }}>
                            {percentage}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div style={{ minWidth: '100px', fontSize: '1.1rem', color: '#9BA3AF' }}>
                      <strong style={{ color: '#FFD700', fontSize: '1.4rem' }}>{count}</strong> votes
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Control Step
  if (state.step === 'control') {
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>Presenter Control</h1>
            <p style={{ color: '#9BA3AF', marginTop: '10px' }}>
              Event: {state.eventCode}
            </p>
          </div>

          {state.question && (
            <div style={{ 
              background: '#1A1D21', 
              border: '2px solid #FFD700', 
              borderRadius: '12px', 
              padding: '25px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{state.question.prompt}</h3>
                <span style={{ 
                  background: '#FFD700', 
                  color: '#0B1426', 
                  padding: '5px 12px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  Active
                </span>
              </div>
              <p style={{ color: '#9BA3AF', marginBottom: '20px' }}>
                {state.question.options.join(' • ')}
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button 
                  onClick={setActiveQuestion}
                  disabled={true}
                  style={{
                    ...submitButtonStyle,
                    opacity: 0.5,
                    flex: 1
                  }}
                >
                  Currently Active
                </button>
                <button 
                  onClick={revealResults}
                  disabled={state.question.revealed}
                  style={{
                    background: state.question.revealed ? '#2D3138' : '#3DDC84',
                    color: state.question.revealed ? '#9BA3AF' : '#0B1426',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '20px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: state.question.revealed ? 'not-allowed' : 'pointer',
                    flex: 1,
                    fontFamily: 'inherit',
                    textTransform: 'uppercase'
                  }}
                >
                  {state.question.revealed ? 'Results Revealed' : 'Reveal Results'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Loading state
  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', paddingTop: '100px' }}>
        <p style={{ color: '#9BA3AF', fontSize: '1.2rem' }}>Loading...</p>
      </div>
    </div>
  )
}