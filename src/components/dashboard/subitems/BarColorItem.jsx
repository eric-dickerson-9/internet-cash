import React from 'react'

const BarColorItem = ({ color, social }) => {
    return (
        <>
            <div className="progress rounded-end-0" style={{ width: '2%' }}>
                <div className={`progress-bar bg-${color}`} role="progressbar" style={{ width: `100%` }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="">{social}</div>
        </>

    )
}
export default BarColorItem; 