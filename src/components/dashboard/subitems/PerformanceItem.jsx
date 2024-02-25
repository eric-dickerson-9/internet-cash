import React from 'react'

const PerformanceItem = ({ value, info, image }) => {
    return (
        <div className="creator-performance d-flex align-items-center p-2 col-md-12 col-sm-2 px-sm-3">
            <div className="row mt-md-4 p-2 font-manrop">
                <div className="col-xs-12 col-sm-2 col-md-3 col-lg-4 d-flex flex-column justify-content-end">
                    <span className="score fw-bold" style={{ fontSize: '2vw' }}>{value}</span><br />
                    <span className="info" style={{ fontSize: '1vw' }}>{info}</span>
                </div>
                <div className="col-xs-3 col-sm-8 col-md-9 col-lg-8 d-flex justify-content-end">
                    <img src={image} style={{ width: '8vw' }} alt='photo-icon' />
                </div>
            </div>
        </div>
    )
}
export default PerformanceItem;