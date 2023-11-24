import React from 'react'

const BarColorItem = ({ color, social }) => {
    return (
        <div className="d-flex flex-row align-items-center">
            <span className={`bg-${color} color-mark`}></span><span className="align-middle ps-2">{social}</span>
        </div>
    )
}
export default BarColorItem; 