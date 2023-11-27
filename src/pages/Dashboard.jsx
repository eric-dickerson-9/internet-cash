import { useState, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import PerformanceBar from '../components/dashboard/subitems/PerformanceBar';
import PerformanceItem from '../components/dashboard/subitems/PerformanceItem';
import BarColorItem from '../components/dashboard/subitems/BarColorItem';
import Map from '../components/dashboard/subitems/Map';
import MultiSelectCheckbox from '../components/dashboard/subitems/MultiSelectCheckbox';
import {
    FacebookShape,
    TwitterShape,
    InstagramShape,
    SnapchatShape,
    YoutubeShape
} from '../components/dashboard/subitems/Socials';
import PeopleCardSlide from '../components/dashboard/subitems/PeopleCardSlide';
import ArrowDown from '../components/dashboard/subitems/ArrowDown';
import ArrowUp from '../components/dashboard/subitems/ArrowUp';

const Dashboard = () => {
    const { creators } = useContext(MyContext);
    const allData = [
        {
            name: 'Henry Paul',
            data: [
                { cx: 510, cy: 130, type: <FacebookShape width={600} height={200} /> },
                { cx: 570, cy: 200, type: <InstagramShape width={160} height={161} /> },
                { cx: 980, cy: 420, type: <YoutubeShape width={150} height={151} /> },
                { cx: 270, cy: 350, type: <TwitterShape width={150} height={151} /> },
                { cx: 100, cy: 50, type: <SnapchatShape width={190} height={191} /> },
            ]
        },
        {
            name: 'Oliver Wilson',
            data: [
                { cx: 710, cy: 130, type: <FacebookShape width={300} height={100} /> },
                { cx: 500, cy: 200, type: <InstagramShape width={160} height={100} /> },
                { cx: 980, cy: 420, type: <YoutubeShape width={150} height={151} /> },
                { cx: 270, cy: 350, type: <TwitterShape width={150} height={151} /> },
                { cx: 100, cy: 150, type: <SnapchatShape width={190} height={80} /> },
            ]
        },
        {
            name: 'Noah Harris',
            data: [
                { cx: 510, cy: 230, type: <FacebookShape width={300} height={200} /> },
                { cx: 100, cy: 250, type: <InstagramShape width={160} height={150} /> },
                { cx: 980, cy: 420, type: <YoutubeShape width={150} height={151} /> },
                { cx: 270, cy: 350, type: <TwitterShape width={300} height={51} /> },
                { cx: 100, cy: 150, type: <SnapchatShape width={190} height={80} /> },
            ]
        },
    ]

    const [isPerformanceCollapsed, setPerformanceIscollapsed] = useState(true);
    const [isMapCollapsed, setisMapCollapsed] = useState(true);
    const [isCardCollapsed, setIsCardcollapsed] = useState(true);
    const [creatorData, setCreatorData] = useState([
        { cx: 510, cy: 130, type: <FacebookShape width={600} height={200} /> },
        { cx: 570, cy: 200, type: <InstagramShape width={160} height={161} /> },
        { cx: 980, cy: 420, type: <YoutubeShape width={150} height={151} /> },
        { cx: 270, cy: 350, type: <TwitterShape width={150} height={151} /> },
        { cx: 100, cy: 50, type: <SnapchatShape width={190} height={191} /> },
    ]);
    const onSelectCreator = (selectedOptions) => {
        const selectedUserData = allData.find(({ name }) => name === selectedOptions.label)
        if (selectedUserData) {
            setCreatorData(selectedUserData.data);
        }
        else {
            setCreatorData([]);
        }
    }
    return (
        <div className="col py-3 px-5 d-flex flex-column">
            <div className="header">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6">
                        <div className="d-flex justify-content-start font-manrop">
                            <div className="d-flex flex-row gap-3 align-middle align-items-center">
                                <span className="h3 dash-text">Dashboard</span>
                                <div className="arrow">
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 14L4.20371 11.9032C5.96113 10.2311 6.83984 9.39503 6.97514 8.376C7.00829 8.12633 7.00829 7.87368 6.97514 7.624C6.83984 6.60497 5.96113 5.7689 4.20371 4.09677L2 2" stroke="#252733" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span className="fw-bold h3">My Creators</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6">
                        <div className="d-flex justify-content-end">
                            <div className="d-flex flex-row gap-3 align-middle ">
                                <div className="bell">
                                    <div className="position-relative ">
                                        <div className='p-3'>
                                            <img src="./images/icons/bell.png" className="" alt='hearder-icon' />
                                        </div>
                                        <span className='position-absolute top-0 end-0'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="7.85" fill="#19B03F" stroke="white" strokeWidth="4.3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="news">
                                    <div className="position-relative ">
                                        <div className='p-3'>
                                            <img src="./images/icons/news.png" className="" alt='news' />
                                        </div>
                                        <span className='position-absolute top-0 end-0'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="7.85" fill="#19B03F" stroke="white" strokeWidth="4.3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="d-flex flex-row gap-2">
                                        <div className="image ">
                                            <img src="./images/avatar_h.svg" className="border border-1 border-dark rounded-circle p-1" />
                                        </div>
                                        <div className="info d-flex flex-column text-start">
                                            <h5 className='font-manrop'>Alexander Mark</h5>
                                            <span>Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-sm-12 col-md-10 p-4 rounded-4 greeting mb-xs-3 mb-sm-3 mb-lg-0" >
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex flex-column text-start">
                                    <span className='font-montserrat'>GOOD MORNING</span>
                                    <h2 className='font-manrop'>Alexander Mark</h2>
                                </div>
                            </div>
                            <div className="col-8 d-flex align-content-end flex-wrap font-montserrat">
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-2 d-flex align-content-end flex-wrap">
                        <button className="logout-btn font-montserrat">+Explore New Creators</button>
                    </div>
                </div>
            </div><br />
            <div className="creators">
                <div className="row mb-3 align-items-end">
                    <div className="col-10">
                        <div className="d-flex justify-content-start">
                            <div className="text-start">
                                <h3 className="fw-bold font-manrop">My Creators</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2" onClick={() => setIsCardcollapsed(!isCardCollapsed)} data-bs-toggle="collapse" data-bs-target="#collapseCard">
                        {isCardCollapsed ? <ArrowDown /> : <ArrowUp />}
                    </div>
                </div>
                <div className="line"></div><br />
                <div className="cards collapse show" id='collapseCard'>
                    <PeopleCardSlide />
                </div>
            </div>
            <br />
            <div className="creators">
                <div className="row mb-3 align-items-end">
                    <div className="col-10">
                        <div className="d-flex justify-content-start">
                            <div className="text-start">
                                <h3 className="fw-bold font-manrop">My Creator's Performance</h3>
                                <span>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2" onClick={() => setPerformanceIscollapsed(!isPerformanceCollapsed)} data-bs-toggle="collapse" data-bs-target="#collapsePerfomance">
                        {isPerformanceCollapsed ? <ArrowUp /> : <ArrowDown />}
                    </div>
                </div>
                <div className="line"></div><br />
                <div className="row collapse show" id='collapsePerfomance'>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                        <div className="d-flex flex-md-column flex-sm-row gap-3">
                            <PerformanceItem value={31} info="Creators" image="./images/mask1.png" />
                            <PerformanceItem value={235} info="Total Creatives" image="./images/mask2.png" />
                            <PerformanceItem value={107} info="High output Creatives" image="./images/mask3.png" />
                            <PerformanceItem value={128} info="Low output Creatives" image="./images/mask4.png" />
                            <PerformanceItem value="$6.03" info="Avg.cost per creative" image="./images/mask5.png" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 performance-bar p-4">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column gap-5 w-100">
                                {
                                    creators.map((item, index) =>
                                        <PerformanceBar key={index} name={item.name} job={item.role} avatar={item.avatar} primary={item.socialChannels[0].percent} warning={item.socialChannels[1].percent} info={item.socialChannels[2].percent} success={item.socialChannels[3].percent} danger={item.socialChannels[4].percent} />
                                    )
                                }
                            </div>
                            <div className="scrollbar scrollbar-success">
                                <div className="force-overflow"></div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-sm-12 col-md-12 d-flex flex-row justify-content-end align-items-center gap-sm-2 gap-md-3">
                        <span className="h5">Social media</span>
                        <BarColorItem color="primary" social="Facebook" />
                        <BarColorItem color="warning" social="Snapchat" />
                        <BarColorItem color="info" social="Twitter" />
                        <BarColorItem color="success" social="Instagram" />
                        <BarColorItem color="danger" social="Youtube" />
                    </div>
                </div>
            </div>

            <br /><br />
            <div className="byregion">
                <div className="row mb-3 align-items-end">
                    <div className="col-10">
                        <div className="d-flex justify-content-start">
                            <div className="text-start">
                                <span className="fw-bold h3 font-manrop">Creators Performance By Region</span><br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2" onClick={() => setisMapCollapsed(!isMapCollapsed)} data-bs-toggle="collapse" data-bs-target="#collapseMap">
                        {isMapCollapsed ? <ArrowUp /> : <ArrowDown />}
                    </div>
                </div>
                <div className="line"></div><br />
                <div className="collapse show map p-3" id='collapseMap'>
                    <div className="d-flex flex-column">
                        <div className="row d-flex flex-row justify-content-end align-items-center h5">
                            Select creators
                            <div className="col-sm-4 col-md-2">
                                <MultiSelectCheckbox onSelect={onSelectCreator} />
                            </div>
                        </div>
                    </div>
                    <div className="world-map">
                        <Map creatorData={creatorData} />
                        <div className="row">
                            <div className="col-sm-2 col-md-4 col-sm-12">
                                <div className="d-flex justify-content-start">
                                    <svg className="col-sm-3 col-md-5" viewBox="0 0 203 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect y="0.212891" width="203" height="47" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_121_1177" transform="matrix(0.00232019 0 0 0.0100212 0 -0.0160932)" />
                                            </pattern>
                                            <image id="image0_121_1177" width="431" height="103" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-8 col-sm-12">
                                <div className="d-flex flex-row justify-content-end align-items-center gap-sm-2 gap-md-3">
                                    <span className="h5">Social media</span>
                                    <BarColorItem color="primary" social="Facebook" />
                                    <BarColorItem color="warning" social="Snapchat" />
                                    <BarColorItem color="info" social="Twitter" />
                                    <BarColorItem color="success" social="Instagram" />
                                    <BarColorItem color="danger" social="Youtube" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
