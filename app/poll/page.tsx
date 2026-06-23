"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
// NOTE: Hardcoded for production build (env vars not available during static generation)
// For local dev, these can also be set in .env.local
const supabase = createClient(
  "https://tajftdwlkoljbkzxcrun.supabase.co",
  "sb_publishable_OzMWmXlwQNtGcG6bwxfPdA_o8RoX9py"
)

// Hardcoded 5 questions for the poll
const QUESTIONS = [
  {
    id: 1,
    text: "Have you or someone you know been targeted by a scam in the last 12 months?",
    options: ["Yes, me personally", "Yes, a family member", "Yes, a friend", "No, thankfully"],
  },
  {
    id: 2,
    text: "Which type of scam worries you the MOST right now?",
    options: ["AI voice cloning / deepfake scams", "Phishing texts & emails", "Investment/crypto scams", "Romance scams", "Impersonation of family members"],
  },
  {
    id: 3,
    text: "How confident are you that you could spot a scam text or email?",
    options: ["Very confident", "Somewhat confident", "Not very confident", "I'd probably fall for it"],
  },
  {
    id: 4,
    text: "What's the #1 thing you wish older adults knew about scams?",
    options: ["Never give info to unexpected callers", "Verify before acting on urgent requests", "Government agencies don't demand payment by gift cards", "AI can fake any voice or video now"],
  },
  {
    id: 5,
    text: "Would you use a free tool that checks suspicious texts/emails for scam signs?",
    options: ["Absolutely, daily", "Yes, occasionally", "Maybe, if it was really easy", "No, I don't need it"],
  },
]

export default function PollPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [results, setResults] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([])

  const question = QUESTIONS[currentQuestion]

  // Load results when showing results
  useEffect(() => {
    if (showResults) {
      fetchResults()
    }
  }, [showResults, currentQuestion])

  // Fetch results from Supabase
  const fetchResults = async () => {
    const { data, error } = await supabase
      .from("responses")
      .select("answer")
      .eq("question_id", question.id)

    if (error) {
      console.error("Error fetching results:", error)
      return
    }

    const counts: Record<string, number> = {}
    data.forEach((row) => {
      counts[row.answer] = (counts[row.answer] || 0) + 1
    })

    setResults(counts)
  }

  // Submit vote to Supabase
  const submitVote = async () => {
    if (!selectedOption) return

    setIsSubmitting(true)

    const { error } = await supabase.from("responses").insert({
      question_id: question.id,
      answer: selectedOption,
      event_code: "TRIVIA",
    })

    setIsSubmitting(false)

    if (error) {
      console.error("Error submitting vote:", error)
      // Still show as voted even if error (don't block user)
    }

    setHasVoted(true)
    setCompletedQuestions([...completedQuestions, question.id])
  }

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setHasVoted(false)
      setShowResults(false)
    }
  }

  // Calculate total votes for current question
  const totalVotes = Object.values(results).reduce((a, b) => a + b, 0)

  // Calculate percentage for a given option
  const getPercentage = (option: string) => {
    if (totalVotes === 0) return 0
    return Math.round(((results[option] || 0) / totalVotes) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">ScamBomb Live Poll</h1>
        <p className="text-white/70">Help us understand the scam landscape</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div className="flex justify-between text-sm text-white/60 mb-2">
          <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
          <span>{Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
        <h2 className="text-xl font-semibold mb-6 leading-relaxed">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => !hasVoted && setSelectedOption(option)}
              disabled={hasVoted}
              className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                selectedOption === option
                  ? "bg-yellow-400 text-slate-900 font-semibold"
                  : hasVoted
                  ? "bg-white/5 text-white/50 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {hasVoted && showResults ? (
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-white/20 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${getPercentage(option)}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold min-w-[3rem] text-right">
                      {getPercentage(option)}%
                    </span>
                  </div>
                </div>
              ) : (
                option
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center">
          {!hasVoted ? (
            <button
              onClick={submitVote}
              disabled={!selectedOption || isSubmitting}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedOption && !isSubmitting
                  ? "bg-yellow-400 text-slate-900 hover:bg-yellow-300"
                  : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Answer"}
            </button>
          ) : !showResults ? (
            <div className="text-center">
              <p className="text-green-400 mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Submitted! {completedQuestions.length} of {QUESTIONS.length} complete
              </p>
              <button
                onClick={() => setShowResults(true)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              >
                Show Results
              </button>
            </div>
          ) : currentQuestion < QUESTIONS.length - 1 ? (
            <button
              onClick={nextQuestion}
              className="px-8 py-3 rounded-xl font-semibold bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition-all"
            >
              Next Question →
            </button>
          ) : (
            <div className="text-center">
              <p className="text-green-400 mb-4">🎉 All questions complete!</p>
              <button
                onClick={() => setShowResults(false)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              >
                Back to Results
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-white/40 text-sm">
        ScamBomb Live Poll • Anonymous responses
      </p>
    </div>
  )
}