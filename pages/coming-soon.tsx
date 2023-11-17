import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ComingSoon = () => {
    const router = useRouter()
    const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        router.push('/')
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [countdown, router])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '300px'
      }}
    >
      <h1
        style={{
          fontSize: '5rem',
          margin: '0 0 2rem 0',
          textAlign: 'center'
        }}
      >
        Coming Soon
      </h1>
      
      <p
        style={{
          margin: '0 0 1rem 0',
          textAlign: 'center'
        }}
      >
        This page is not yet available.
      </p>
      <p
        style={{
          margin: '0 0 0 0',
          textAlign: 'center'
        }}
      >
        You will be redirected to the home page in <span style={{fontWeight: 'bold'}}><u>{countdown}</u></span> seconds.
      </p>
    </div>
  )
}

export default ComingSoon