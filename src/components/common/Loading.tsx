import React from 'react'
import { BlinkBlur } from 'react-loading-indicators'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <BlinkBlur color="#A70B22" size="medium" text="" textColor="" />
        </div>
    )
}

export default Loading