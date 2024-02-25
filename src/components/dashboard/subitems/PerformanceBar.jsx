import React from 'react'

const PerformanceBar = ({ name, job, avatar, primary, warning, info, success, danger }) => {
    return (
        <div className="row ">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                <div className="avatar">
                    <div className="d-flex flex-row gap-1">
                        <div className="image">
                            <img src={avatar} className="border-dark rounded-circle" alt='icon' />
                        </div>
                        <div className="info d-flex flex-column text-start">
                            <span className='h6'>{name}</span>
                            <span>{job}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-10 pt-3">
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${primary}%` }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${warning}%` }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${info}%` }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${success}%` }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${danger}%` }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}
export default PerformanceBar;