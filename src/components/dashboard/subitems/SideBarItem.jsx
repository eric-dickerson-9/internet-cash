import React from 'react';

const SideBarItem = ({ title, image_url }) => {
    return (
        <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
            <div className="d-flex flex-row p-2 ps-4">
                <div className='align-middle'>
                    <img src={image_url} alt="" />
                </div>
                <div className='ps-4'>
                    <span className="ms-1 d-none d-sm-inline">{title}</span>
                </div>
            </div>
        </a>
    );
};

export default SideBarItem;