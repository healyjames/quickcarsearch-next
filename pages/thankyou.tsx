import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ComingSoon = () => {
    const router = useRouter()
    const [countdown, setCountdown] = useState(15)

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
        maxWidth: '500px'
      }}
    >
      <h1
        style={{
          fontSize: '5rem',
          margin: '0 0 2rem 0'
        }}
      >
        Thank You!!
      </h1>
      
      <p
        style={{
          margin: '0 0 1rem 0'
        }}
      >
        Thank you so much for donating to quickcarsearch.io. Knowing someone out there believes in this project enough to donate their hard earned money means the world to me. Thank you again for the show of support. Please keep an eye on the site as plenty of new features are being worked on.
      </p>
      <p
        style={{
          margin: '0 0 0 0'
        }}
      >
        You will be redirected to the home page in <span style={{fontWeight: 'bold'}}><u>{countdown}</u></span> seconds.
      </p>
      <a
        style={{
          margin: '1rem 0 0 0'
        }}
        href="/"
      >
        Go home
      </a>
    </div>
  )
}

export default ComingSoon