"use client"
import React, { useState, useEffect } from "react"
import {
  FlipCard,
  Card,
  CardFront,
  CardBack,
  Container,
} from "../effectsStyling/flipEffects"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const FlipClock = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-01-25") - +new Date()
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const getNextHours = () => {
    let nextHours = time.hours - 1
    if (nextHours < 0) {
      nextHours = 23
    }
    return nextHours
  }

  const getNextMinutes = () => {
    let nextMinutes = time.minutes - 1
    if (nextMinutes < 0) {
      nextMinutes = 59
    }
    return nextMinutes
  }

  const getNextSeconds = () => {
    let nextSeconds = time.seconds - 1
    if (nextSeconds < 0) {
      nextSeconds = 59
    }
    return nextSeconds
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft())
    }, 600)

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  }, [time])

  return (
    <Container>
      {/* <div key={time.days} className='flip-card'>Days: {time.days}</div>
      <div key={time.hours} className='flip-card'>Hours: {time.hours}</div>
      <div key={time.minutes} className='flip-card'>Minutes: {time.minutes}</div>
      <div key={time.seconds} className='flip-card'>Seconds: {time.seconds}</div> */}
      <FlipCard>
        <Card>
          <CardFront>08</CardFront>
          <CardBack>07</CardBack>
        </Card>
        <p>Days</p>
      </FlipCard>
      <FlipCard>
        <Card>
          <CardFront>23</CardFront>
          <CardBack>22</CardBack>
        </Card>
        <p>Hours</p>
      </FlipCard>
      <FlipCard>
        <Card>
          <CardFront>55</CardFront>
          <CardBack>54</CardBack>
        </Card>
        <p>Minutes</p>
      </FlipCard>
      <FlipCard>
        <Card key={time.seconds}>
          <CardFront>{time.seconds}</CardFront>
          <CardBack>{time.seconds}</CardBack>
        </Card>
        <p>Seconds</p>
      </FlipCard>
    </Container>
  )
}

export default FlipClock
