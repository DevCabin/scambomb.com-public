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

// Hardcoded 5 trivia questions with correct answers
const QUESTIONS = [
  {
    id: 1,
    text: "According to the FBI's 2025 IC3 report, Americans lost how much to cyber-enabled fraud?",
    options: ["$8.4 billion", "$12.7 billion", "$20.9 billion", "$31.2 billion"],
    correctAnswer: "$20.9 billion",
    reveal: "That's up 26% from the previous year — over $57 million lost every single day.",
  },
  {
    id: 2,
    text: "How many seconds of your voice does an AI scammer need to create a convincing clone?",
    options: ["10 minutes", "2 minutes", "30 seconds", "Just 3 seconds"],
    correctAnswer: "Just 3 seconds",
    reveal: "Scammers harvest 3-30 seconds from social media, voicemail, or TikTok — and AI does the rest.",
  },
  {
    id: 3,
    text: "What percentage of money lost to scams is ever recovered by victims?",
    options: ["22%", "12%", "6%", "4%"],
    correctAnswer: "4%",
    reveal: "Once the money is gone, it's almost always gone for good. Prevention is everything.",
  },
  {
    id: 4,
    text: "Which age group reports the HIGHEST median financial losses to scams?",
    options: ["18-29 (Gen Z)", "30-49 (Millennials/Gen X)", "50-64 (Baby Boomers)", "65+ (Seniors)"],
    correctAnswer: "30-49 (Millennials/Gen X)",
    reveal: "Counterintuitive but true — this group loses more because they have more money in motion and higher digital exposure.",
  },
  {
    id: 5,
    text: "At $20.9 billion per year, that's roughly how much scam money is lost EVERY DAY in the U.S.?",
    options: ["$15 million", "$32 million", "$57 million", "$89 million"],
    correctAnswer: "$57 million",
    reveal: "More than $57 million stolen from Americans every single day — largely thanks to AI-powered scams.",
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

    if (error) {
      console.error("Error submitting vote:", error)
    }

    setHasVoted(true)
    setCompletedQuestions([...completedQuestions, question.id])
    setIsSubmitting(false)
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
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-8"
      style={{ background: "linear-gradient(135deg, #081a2f 0%, #0f2e4d 55%, #123b5d 100%)" }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">ScamBomb Live Poll</h1>
        <p className="text-white/70">Help us understand the scam landscape</p>
      </div>

      {/* Question Counter */}
      <div className="w-full max-w-md mb-6 text-center">
        <span className="text-sm text-white/60">Question {currentQuestion + 1} of {QUESTIONS.length}</span>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
        <h2 className="text-xl font-semibold mb-6 leading-relaxed">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isCorrect = option === question.correctAnswer
            const isSelected = selectedOption === option

            return (
              <button
                key={option}
                onClick={() => !hasVoted && setSelectedOption(option)}
                disabled={hasVoted}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  isSelected && !hasVoted
                    ? "bg-yellow-400 text-slate-900 font-semibold"
                    : hasVoted && showResults && isCorrect
                    ? "bg-green-500/20 border-2 border-green-400 text-white cursor-default"
                    : hasVoted
                    ? "bg-white/5 text-white/50 cursor-not-allowed"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {hasVoted && showResults ? (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {isCorrect && (
                        <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {option}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-white/20 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${isCorrect ? "bg-green-400" : "bg-yellow-400"}`}
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
            )
          })}
        </div>

        {/* Correct Answer Reveal */}
        {hasVoted && showResults && question.reveal && (
          <div className="mt-4 p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
            <p className="text-green-300 text-sm leading-relaxed">{question.reveal}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col items-center gap-3">
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
            <>
              <p className="text-green-400 flex items-center gap-2 font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Answer recorded!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResults(true)}
                  className="px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  See Results
                </button>
                {currentQuestion < QUESTIONS.length - 1 && (
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-3 rounded-xl font-bold bg-white text-slate-900 hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Next Question →
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResults(false)}
                  className="px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Back to Question
                </button>
                {currentQuestion < QUESTIONS.length - 1 ? (
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-3 rounded-xl font-bold bg-white text-slate-900 hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Next Question →
                  </button>
                ) : (
                  <span className="px-6 py-3 text-green-400 font-semibold">🎉 All complete!</span>
                )}
              </div>
            </>
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