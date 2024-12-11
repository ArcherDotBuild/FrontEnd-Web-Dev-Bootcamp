import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  // console.log('Stopwatch rerendered')
  const startTime = useRef(null)
  const intervalRef = useRef(null)
  const [now, setNow] = useState(null)
  const [laps, setLaps] = useState([])

  // How many seconds have elapsed since the timer has started
  let secondsElapsed = 0

  function startStopwatch() {
    // Date.now(): time in milliseconds
    // When was start button clicked, point in time
    // Keep track of the value
    startTime.current = Date.now()

    // Every 10 milliseconds we will be updating the value of now
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function stopStopwatch() {
    clearInterval(intervalRef.current)
  }

  function trackLap() {
    setLaps([...laps, secondsElapsed])
  }

  // Divide / 1000 to get the value in seconds
  // because (now) and (startTime.current) are both in milliseconds
  secondsElapsed = (now - startTime.current) / 1000

  return (
    <>
      <section>
        <h1>{secondsElapsed.toFixed(3)}</h1>
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
        <button onClick={trackLap}>Lap</button>
      </section>
      <h2>Laps</h2>
      {/* Conditional rendering */}
      {/* Check if (lap) array has any items */}
      {laps?.length ? (
        <article>
          {laps.map((lap) => (
            <p key={lap}>{lap}</p>
          ))}
        </article>
      ) : null}
    </>
  )
}

export default Stopwatch
