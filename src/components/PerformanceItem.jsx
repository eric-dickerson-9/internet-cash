import React from 'react'

const PerformanceItem = ({ value, info, image }) => {
    return (
        <div className="creator-performance d-flex align-items-center p-2">
            <div className="row mt-4">
                <div className="col-md-8 d-flex flex-column justify-content-start">
                    <span className="score h1">{value}</span><br /><br />
                    <span className="info h6">{info}</span>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <img src={image} className='mask' />
                </div>
            </div>
        </div>
    )
}
export default PerformanceItem;