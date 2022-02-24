import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import Menu from '../Menu'

const NotFoundPage = () => {
  return (
    <div>
        <Menu/>
        <Layout>
            <h1 style={{display: 'block', margin: '0 auto', maxWidth: '600px'}}> There is no this kinda page bruh. <span style={{display: 'block'}}> You'd better go <Link to='/' style={{ color: '#027aff'}}>Home.</Link> </span></h1>
        </Layout>
    </div>
  )
}

export default NotFoundPage