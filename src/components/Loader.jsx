import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div style={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircleLoader color='aquamarine' size={100}/>
        </div>
    )
}

export default Loader
