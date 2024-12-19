import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 15 }}>
            <img src="https://i.postimg.cc/SK5Q1bH1/error-404.png" alt='error' style={{ width: '90%', marginBottom: 15 }} />
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
    )
}

export default Error