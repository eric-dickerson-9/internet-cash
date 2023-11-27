import { useState } from 'react';
import SideBarItem from './dashboard/subitems/SideBarItem';

const Sidebar = () => {
    const [isCollapsed, setIscollapsed] = useState(true)

    return (
        <div className="col-auto px-0 bg-dark" style={{ maxWidth: '290px' }}>
            <div className="d-flex flex-column align-items-start ps-4 pe-0 pt-2 text-white min-vh-100 me-0">
                <div className="d-flex flex-row col-md-4 col-sm-2">
                    <div className="logo1">
                        <img src='./images/Logo2.png' alt='' />
                    </div>
                    <div className="logo2 d-md-block ms-1 d-none d-sm-inline">
                        <img src='./images/Logo1.png' alt='' />
                    </div>
                </div><br />
                <ul className="nav nav-pills flex-column align-items-start text-start">
                    <li className={isCollapsed ? 'navbar-item' : ''}>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle pt-0" onClick={() => setIscollapsed(!isCollapsed)} >
                            <div className={`d-flex flex-row p-2 ps-4 ${isCollapsed ? 'active-item' : ''}`}>
                                <div className='align-middle'>
                                    <img src='./images/icons/dashboard.png' alt='nav-icon' />
                                </div>
                                <div className='ps-4'>
                                    <span className="ms-1 d-none d-sm-inline align-middle ">Dashboard</span>
                                </div>
                                {isCollapsed &&
                                    <div className="align-middle ps-4">
                                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0454 5L9.29012 3.23703C7.89036 1.8311 7.19047 1.12813 6.33743 1.01989C6.12842 0.99337 5.91693 0.99337 5.70792 1.01989C4.85488 1.12813 4.155 1.8311 2.75523 3.23703L1 5" stroke="#56F09F" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>}
                            </div>
                        </a>
                        <ul className="collapse show nav flex-column ms-1 ps-5" id="submenu1">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0 p-1 ps-3"> <span className="d-none d-sm-inline">Performance</span></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link px-0 p-1">
                                    {
                                        isCollapsed ? <span className="d-none d-sm-inline active-link">
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#56F09F" />
                                            </svg>
                                            &nbsp;&nbsp;My Creators
                                        </span> : <span className="ps-3">My Creators</span>
                                    }
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 p-1 ps-3"> <span className="d-none d-sm-inline">Billing</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 p-1 ps-3"> <span className="d-none d-sm-inline">Reports</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 p-1 ps-3"> <span className="d-none d-sm-inline">My influencers</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <SideBarItem title="Profile" image_url="./images/icons/profile.png" />
                    </li>
                    <li>
                        <SideBarItem title="Products" image_url="./images/icons/products.png" />
                    </li>
                    <li>
                        <SideBarItem title="Creative" image_url="./images/icons/creative.png" />
                    </li>
                    <li>
                        <SideBarItem title="Business Card" image_url="./images/icons/business-card.png" />
                    </li>
                    <li>
                        <SideBarItem title="Asset Library" image_url="./images/icons/asset-library.png" />
                    </li>
                    <li>
                        <SideBarItem title="Domain" image_url="./images/icons/domain.png" />
                    </li>
                    <li>
                        <SideBarItem title="Creative request" image_url="./images/icons/creative-request.png" />
                    </li>
                    <li>
                        <SideBarItem title="Commissions" image_url="./images/icons/commissions.png" />
                    </li>
                    <li>
                        <SideBarItem title="Payments" image_url="./images/icons/payments.png" />
                    </li>
                    <li>
                        <SideBarItem title="Referrals" image_url="./images/icons/referrals.png" />
                    </li>
                    <li>
                        <SideBarItem title="Transaction" image_url="./images/icons/transaction.png" />
                    </li>
                    <li>
                        <SideBarItem title="Manager" image_url="./images/icons/manager.png" />
                    </li>
                    <li>
                        <SideBarItem title="Settlement" image_url="./images/icons/settlement.png" />
                    </li>
                    <li>
                        <SideBarItem title="Close Account" image_url="./images/icons/close-account.png" />
                    </li>
                </ul>
                <hr />
                <div className="col-sm-6 col-md-9 col-lg-10">
                    <button className="logout-btn text-white" type="submit">Log out</button>
                </div>
            </div>
        </div >
    )
}
export default Sidebar;