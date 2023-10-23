import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface ErrProps {
  code: number | undefined
}

export const Err: NextPage<ErrProps> = ({code}) => {
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

  const errorMessages: Record<number, string> = {
    400: 'Bad Request: The request could not be understood or was missing required parameters.',
    401: 'Unauthorized: Authentication failed or user does not have permissions for the requested operation.',
    403: 'Forbidden: The server understood the request, but it refuses to fulfill it.',
    404: 'Not Found: The requested resource could not be found on the server.',
    500: 'Internal Server Error: A generic error message, given when no more specific message is suitable.'
  }

  const errorText = code ? errorMessages[code] || 'An error occurred.' : 'An error occurred.';

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
        {code}
      </h1>
      
      <p
        style={{
          margin: '0 0 1rem 0',
          textAlign: 'center'
        }}
      >
        {errorText}
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