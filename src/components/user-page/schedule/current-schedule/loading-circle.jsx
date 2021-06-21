import React from 'react';
import './load-circle.scss';
import useLoading from '@/hooks/user-page/schedule/loading.hook.js';

const LoadingCircle = ({ children, data }) => {

    const { percent } = useLoading(data)

    const filler = (deg) => {

        if (deg > 180) {
            return 180
        }
        return deg
    }
    const mask = (deg) => {
        if (deg > 180) {
            return 0
        }
        return 1
    }
    return (
        <>
            <div className='circle-wrapper-lc m-3'>
                <div className='left-half-lc circle-size-lc'
                    style={{
                        transform: `rotate(${3.6 * percent}deg)`,
                        backgroundColor: `${data.color}`
                    }} />
                <div className='left-half-lc circle-size-lc'
                    style={{
                        transform: `rotate(${filler(3.6 * percent)}deg)`,
                        backgroundColor: `${data.color}`
                    }} />
                <div className='mask-lc'
                    style={{ opacity: mask(3.6 * percent) }} />
                <div className='circle-center-lc'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default LoadingCircle;