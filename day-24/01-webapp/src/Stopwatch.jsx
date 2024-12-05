import React, { useRef, useState } from 'react'

// 19 minutes
const Stopwatch = () => {
  const startTime = useRef(null)
  const [now, setNow] = useState(null)

  // How many seconds have elapsed since the timer has started
  let secondsElapsed = 0

  function startStopwatch() {
    // Date.now(): time in milliseconds
    // When was start button clicked, point in time
    startTime.current = Date.now()

    // Every 10 milliseconds we will be updating the value of now
    setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function stopStopwatch() {}

  // Divide / 1000 to get the value in seconds
  // because now and startTime.current are both in milliseconds
  // secondsElapsed = now - startTime.current / 1000

  return (
    <>
      <section>
        <h1>{secondsElapsed.toFixed(3)}</h1>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
      </section>
    </>
  )
}

export default Stopwatch
