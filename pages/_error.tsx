import React from 'react'
import { NextPageContext } from 'next'
import { Err } from '../components/error/Err'

const Error = ({ statusCode }: { statusCode: number }) => {
  return <Err code={statusCode} />
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error