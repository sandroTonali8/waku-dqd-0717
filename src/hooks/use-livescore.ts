import { create } from 'zustand'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

type State = {
  score: number[]
}

type Action = {
  updateScore: (score: State['score']) => void
}

const useScore = create<State & Action>((set) => ({
  score: [],
  updateScore: (score) => set({ score: score })
}))

export function useLiveScore() {
  const score = useScore((state) => state.score)
  const setScore = useScore((state) => state.updateScore)

  useEffect(() => {
    const socket = io('/match-platform')
    socket.on('score', (data) => setScore(data))
    return () => { socket.disconnect() }
  }, [])

  return score
}