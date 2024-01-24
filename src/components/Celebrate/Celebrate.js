import React, { useEffect } from 'react'
import JSConfetti from 'js-confetti'

const Celebrate = ({ callback }) => {
  //   const handleClick = () => {
  //     const jsConfetti = new JSConfetti()

  //     jsConfetti.addConfetti({
  //       emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  //     })
  //   }

  useEffect(() => {
    setTimeout(() => {
      callback({ value: false })
    }, 1000)
  }, [])

  useEffect(() => {
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti().then(() => {
      jsConfetti.clearCanvas()
    })
    return () => {
      jsConfetti.clearCanvas()
    }
  }, [])
  return null
}

export { Celebrate }
