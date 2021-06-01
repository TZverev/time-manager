import React from 'react';

const Loading = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center loading'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading