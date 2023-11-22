import React from 'react';

const SideBarItem = ({ title, children }) => {
    return (
        <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
            <div className="d-flex flex-row p-2 ps-4">
                <div className='align-middle'>
                    {children}
                </div>
                <div className='ps-4'>
                    <span className="ms-1 d-none d-sm-inline">{title}</span>
                </div>
            </div>
        </a>
    );
};

export default SideBarItem;