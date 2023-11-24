import Card from './Card'
import PerformanceBar from './PerformanceBar';
import PerformanceItem from './PerformanceItem';
import BarColorItem from './BarColorItem';
import Map from './Map';
import MultiSelectCheckbox from './MultiSelectCheckbox';
import {
    FacebookShape,
    TwitterShape,
    InstagramShape,
    SnapchatShape,
    YoutubeShape
} from './Socials';

const Content = () => {
    const countryData = [
        { cx: 670, cy: 90, type: <FacebookShape /> },
        { cx: 570, cy: 200, type: <InstagramShape /> },
        { cx: 980, cy: 420, type: <YoutubeShape /> },
        { cx: 270, cy: 350, type: <TwitterShape /> },
        { cx: 100, cy: 50, type: <SnapchatShape /> },
    ];
    return (
        <div className="col py-3 px-5 d-flex flex-column">
            <div className="header">
                <div className="row">
                    <div className="col-sm-2 col-md-4 col-xl-6">
                        <div className="d-flex justify-content-start">
                            <div className="d-flex flex-row gap-3 align-middle">
                                <h3>Dashboard</h3>
                                <div className="arrow align-middle pt-2">
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 14L4.20371 11.9032C5.96113 10.2311 6.83984 9.39503 6.97514 8.376C7.00829 8.12633 7.00829 7.87368 6.97514 7.624C6.83984 6.60497 5.96113 5.7689 4.20371 4.09677L2 2" stroke="#252733" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="fw-bold">My Creators</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-xl-6">
                        <div className="d-flex justify-content-end">
                            <div className="d-flex flex-row gap-3 align-middle ">
                                <div className="alarm">
                                    <svg width="120" height="47" viewBox="0 0 120 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.2641 30.9777C26.2641 32.8976 26.2737 34.808 26.2544 36.7279C26.2544 37.0795 26.3413 37.2221 26.718 37.1936C27.056 37.1651 27.394 37.1746 27.732 37.1936C28.495 37.2411 29.0454 37.7829 29.0744 38.4957C29.1034 39.2275 28.6302 39.8073 27.8769 39.9214C27.6741 39.9499 27.4616 39.9499 27.2491 39.9499C25.2018 39.9499 23.164 39.9594 21.1166 39.9404C20.7786 39.9404 20.6531 40.0164 20.6241 40.3776C20.402 43.2669 17.949 45.4719 15.0131 45.4719C12.1062 45.4624 9.67253 43.2574 9.45041 40.3871C9.42143 40.0354 9.3152 39.9404 8.96753 39.9404C6.84289 39.9499 4.71824 39.9499 2.5936 39.9404C1.60853 39.9499 0.990454 39.3891 1.00011 38.5527C1.00977 37.8114 1.55059 37.2411 2.33284 37.1936C2.69983 37.1746 3.07647 37.1746 3.44345 37.1841C3.71386 37.1936 3.8201 37.0986 3.81044 36.8229C3.79112 36.3952 3.81044 35.9675 3.81044 35.5398C3.81044 32.3083 3.75249 29.0768 3.82975 25.8453C3.99393 18.9071 10.4355 13.9078 17.3309 15.2859C21.9086 16.2079 25.5977 20.0096 26.1192 24.5717C26.3317 26.4061 26.2255 28.269 26.2641 30.1223C26.2737 30.4075 26.2641 30.6926 26.2641 30.9777ZM6.63042 37.1461C12.2704 37.1461 17.8428 37.1461 23.4441 37.1461C23.4538 36.9655 23.4634 36.8324 23.4634 36.6899C23.4634 33.2018 23.4634 29.7231 23.4634 26.235C23.4634 25.7978 23.4151 25.3511 23.3572 24.9139C22.6812 19.8861 17.2633 16.5975 12.4056 18.2513C8.84198 19.4679 6.64008 22.4903 6.61111 26.235C6.59179 29.7231 6.61111 33.2018 6.61111 36.6899C6.61111 36.8229 6.62076 36.9655 6.63042 37.1461ZM12.2704 39.9879C12.2221 41.4801 13.6128 42.7822 15.1193 42.7062C16.6356 42.6396 17.9297 41.3185 17.7655 39.9879C15.9499 39.9879 14.1246 39.9879 12.2704 39.9879Z" fill="#252733" stroke="#F4F6FA" strokeWidth="0.5" />
                                        <circle cx="35.2" cy="8.785" r="6.785" fill="#19B03F" stroke="#F5F7FB" strokeWidth="4" />
                                        <circle cx="111.144" cy="9.785" r="6.785" fill="#19B03F" stroke="#F5F7FB" strokeWidth="4" />
                                        <path d="M79.1672 46.5765L79.1654 46.5768C78.9697 46.6102 78.7597 46.6384 78.5599 46.6069C78.3523 46.5741 78.1597 46.4778 78 46.2755C77.6636 45.8619 77.7908 45.4242 77.9511 45.0481L77.9512 45.048C78.1877 44.4948 78.4218 43.9392 78.656 43.3834C79.0286 42.4993 79.4014 41.6146 79.7841 40.7386L79.7842 40.7385C79.8576 40.5706 79.883 40.4451 79.8723 40.3312C79.8616 40.2177 79.8135 40.0977 79.7065 39.9442C77.6214 37.0915 76.6823 33.8725 76.8044 30.3317L76.8044 30.3315C77.0392 23.6648 81.876 17.7375 88.2601 16.2859L88.2602 16.2858C96.1456 14.4985 103.729 19.1807 105.842 27.1217C107.834 34.5945 103.656 42.6631 96.4922 45.2008C94.7833 45.8151 93.2685 46.0844 91.3632 46.0749C90.0159 46.0844 88.5121 45.8438 87.0381 45.3544M79.1672 46.5765L87.0841 45.2116M79.1672 46.5765C81.557 46.1392 83.9468 45.7113 86.3459 45.293M79.1672 46.5765L86.3214 45.145M87.0381 45.3544C87.0377 45.3542 87.0373 45.3541 87.0369 45.3539L87.0841 45.2116M87.0381 45.3544C87.0384 45.3545 87.0388 45.3546 87.0391 45.3547L87.0841 45.2116M87.0381 45.3544C86.8156 45.2845 86.561 45.2594 86.3459 45.293M87.0841 45.2116C86.8423 45.1355 86.5632 45.107 86.3214 45.145M86.3459 45.293C86.3463 45.2929 86.3467 45.2929 86.3471 45.2928L86.3214 45.145M86.3459 45.293C86.3455 45.2931 86.3451 45.2931 86.3447 45.2932L86.3214 45.145M81.6425 40.8176C81.3088 41.5386 81.0061 42.2786 80.7041 43.0169C80.6356 43.1843 80.5671 43.3517 80.4983 43.5187C80.3782 43.8052 80.265 44.0917 80.1468 44.3964C80.1743 44.3969 80.1991 44.3978 80.2209 44.3985C80.2327 44.3988 80.2435 44.3992 80.2535 44.3995C80.2743 44.4 80.2914 44.4002 80.3064 44.3999M81.6425 40.8176L81.7781 40.8817C81.7782 40.8815 81.7783 40.8814 81.7783 40.8812M81.6425 40.8176C81.9029 40.266 81.8378 39.8285 81.4564 39.3435L81.6425 40.8176ZM81.7783 40.8812C81.4464 41.5986 81.1453 42.3345 80.8434 43.0725C80.7748 43.2402 80.7061 43.408 80.637 43.5758L80.6367 43.5767C80.524 43.8455 80.4173 44.1147 80.3064 44.3999M81.7783 40.8812C81.9172 40.587 81.9749 40.3106 81.9389 40.0361C81.9029 39.7623 81.7758 39.5069 81.5744 39.2508L81.5737 39.25C79.5871 36.758 78.649 33.882 78.7042 30.6818L78.7042 30.6816C78.8054 24.3148 83.5616 18.862 89.7286 17.9787C96.816 16.9636 103.189 21.7926 104.303 29.0376L104.303 29.0377C105.379 36.0255 100.538 42.833 93.7012 43.9699M81.7783 40.8812L93.7012 43.9699M80.3064 44.3999C80.3211 44.3996 80.3338 44.3989 80.3458 44.3975M80.3064 44.3999C80.2872 44.4492 80.2679 44.499 80.2485 44.5494C80.2931 44.5506 80.3306 44.5506 80.3681 44.5458M80.3458 44.3975L93.7258 44.1179C91.6421 44.4602 89.5864 44.3366 87.5865 43.6328C86.9818 43.4236 86.4144 43.4521 85.8098 43.5662M80.3458 44.3975C80.3469 44.3973 80.348 44.3972 80.3491 44.3971L80.3681 44.5458M80.3458 44.3975C80.3444 44.3977 80.3431 44.3979 80.3418 44.3982L80.3681 44.5458M80.3681 44.5458L80.3682 44.5458C82.182 44.2225 83.9959 43.8991 85.8098 43.5662M85.8098 43.5662L85.7819 43.4188C85.782 43.4188 85.782 43.4188 85.782 43.4188C86.3994 43.3023 86.9962 43.2698 87.6355 43.4911L87.6362 43.4913C89.6097 44.1858 91.6396 44.3086 93.7012 43.9699M85.8098 43.5662L93.7012 43.9699" fill="#252733" stroke="black" strokeWidth="0.3" />
                                        <path d="M96.4701 32.0965C96.9538 32.0965 97.2886 32.4294 97.2979 32.8764C97.3072 33.3234 96.991 33.6658 96.5166 33.7133C96.3957 33.7228 96.2654 33.7228 96.1445 33.7228H96.1445H92.526H86.9541C86.9224 33.7228 86.8907 33.7232 86.8591 33.7236C86.7329 33.7251 86.608 33.7266 86.489 33.7038C86.0704 33.6182 85.81 33.2758 85.8286 32.8574C85.8565 32.4389 86.1448 32.125 86.582 32.106C86.9165 32.0918 87.2509 32.0935 87.5893 32.0953C87.7026 32.0959 87.8164 32.0965 87.9308 32.0965H91.5493C92.0947 32.0965 92.6411 32.0955 93.1878 32.0944C94.2824 32.0923 95.3783 32.0902 96.4701 32.0965ZM96.4701 32.0965L96.4709 31.9465C96.4708 31.9465 96.4707 31.9465 96.4705 31.9465C96.4704 31.9465 96.4702 31.9465 96.4701 31.9465V32.0965Z" fill="#252733" stroke="black" strokeWidth="0.3" />
                                        <path d="M86.7118 27.8759C86.4085 27.876 86.1466 27.9658 85.9588 28.1376C85.7696 28.3106 85.6693 28.5546 85.6693 28.8343C85.6693 29.1115 85.7735 29.3528 85.9643 29.5247C86.1534 29.6952 86.4162 29.7875 86.719 29.7927L86.7195 29.7927L90.8052 28.0259L90.8062 27.8759C90.8061 27.8759 90.8059 27.8759 90.8057 27.8759C89.438 27.8664 88.0795 27.8664 86.7118 27.8759ZM86.7118 27.8759C86.712 27.8759 86.7121 27.8759 86.7123 27.8759V28.0259L86.7113 27.8759C86.7115 27.8759 86.7116 27.8759 86.7118 27.8759Z" fill="#252733" stroke="black" strokeWidth="0.3" />
                                    </svg>
                                </div>
                                <div className="avatar">
                                    <div className="d-flex flex-row gap-2">
                                        <div className="image ">
                                            <img src="./images/avatar_h.svg" className="border border-1 border-dark rounded-circle p-1" />
                                        </div>
                                        <div className="info d-flex flex-column text-start">
                                            <h5>Alexander Mark</h5>
                                            <span>Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-9 p-3 rounded-3 greeting" >
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex flex-column text-start">
                                    <span>GOOD MORNING</span>
                                    <h2>Alexander Mark</h2>
                                </div>
                            </div>
                            <div className="col-8 d-flex align-content-end flex-wrap">
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-content-end flex-wrap">
                        <button className="btn btn-success w-100">+Explore New Creators</button>
                    </div>
                </div>
            </div><br />
            <div className="creators">
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <div className="text-start">
                                <h3 className="fw-bold">My Creators</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end align-middle">
                            <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 11L20.9812 7.03332C17.7763 3.86997 16.1738 2.28829 14.2207 2.04475C13.7421 1.98508 13.2579 1.98508 12.7793 2.04475C10.8262 2.28829 9.22373 3.86997 6.01881 7.03332L2 11" stroke="#252733" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="line"></div><br />
                <div className="cards d-flex flex-row gap-3">
                    <Card name='Henry Paul' email="henry.p@mail.com" creative="123" rating={4.5} image="./images/avatars/avatar1.png" />
                    <Card name='William James' email="william.j@mail.com" creative="220" rating={4.8} image="./images/avatars/avatar2.png" />
                    <Card name='Evan Jefferson' email="evan.j@mail.com" creative="105" rating={4.2} image="./images/avatars/avatar3.png" />
                    <Card name='Micle Thomson' email="Micle Thomson" creative="117" rating={4.5} image="./images/avatars/avatar4.png" />
                    <Card name='Kiara Jesson' email="kiara.j@mail.com" creative="97" rating={3.8} image="./images/avatars/avatar5.png" />
                    <Card name='Henry Paul' email="henry.p@mail.com" creative="123" rating={3.5} image="./images/avatars/avatar2.png" />
                </div>

            </div>
            <br />
            <div className="creators">
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <div className="text-start">
                                <h3 className="fw-bold">My Creator's Performance</h3>
                                <span>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end align-middle">
                            <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 11L20.9812 7.03332C17.7763 3.86997 16.1738 2.28829 14.2207 2.04475C13.7421 1.98508 13.2579 1.98508 12.7793 2.04475C10.8262 2.28829 9.22373 3.86997 6.01881 7.03332L2 11" stroke="#252733" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="line"></div><br />
                <div className="row d-flex flex-row px-0">
                    <div className="col-2">
                        <div className="d-flex flex-column  gap-3">
                            <PerformanceItem value={31} info="Creators" image="./images/mask1.png" />
                            <PerformanceItem value={235} info="Total Creatives" image="./images/mask2.png" />
                            <PerformanceItem value={107} info="High output Creatives" image="./images/mask3.png" />
                            <PerformanceItem value={128} info="Low output Creatives" image="./images/mask4.png" />
                            <PerformanceItem value="$6.03" info="Avg.cost per creative" image="./images/mask5.png" />
                        </div>
                    </div>
                    <div className="col-10 performance-bar p-4">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column gap-4 w-100">
                                <PerformanceBar name="Henry Paul" job="Model" image="./images/avatars/henry.svg" primary={10} warning={35} info={25} success={15} danger={15} />
                                <PerformanceBar name="Noah Harris" job="Photographer" image="./images/avatars/henry.svg" primary={30} warning={5} info={25} success={15} danger={25} />
                                <PerformanceBar name="Jack Paul" job="Influencer" image="./images/avatars/henry.svg" primary={25} warning={20} info={15} success={25} danger={25} />
                                <PerformanceBar name="Lucas Buron" job="Model" image="./images/avatars/henry.svg" primary={20} warning={20} info={30} success={15} danger={15} />
                                <PerformanceBar name="Oliver Wilson" job="Photographer" image="./images/avatars/henry.svg" primary={15} warning={20} info={10} success={35} danger={20} />
                                <PerformanceBar name="Levi Lewis" job="Influencer" image="./images/avatars/henry.svg" primary={10} warning={40} info={20} success={10} danger={25} />
                                <PerformanceBar name="Jacksie Owe" job="Influencer" image="./images/avatars/henry.svg" primary={5} warning={45} info={25} success={20} danger={5} />
                                <PerformanceBar name="Ethan Jane" job="Model" image="./images/avatars/henry.svg" primary={25} warning={15} info={30} success={5} danger={25} />
                                <PerformanceBar name="Ezra Baker" job="Ezra Baker" image="./images/avatars/henry.svg" primary={20} warning={15} info={15} success={45} danger={5} />
                                <PerformanceBar name="Allen Foster" job="Allen Foster" image="./images/avatars/henry.svg" primary={10} warning={15} info={25} success={25} danger={25} />
                                <PerformanceBar name="Angel Webb" job="Influencer" image="./images/avatars/henry.svg" primary={20} warning={5} info={45} success={20} danger={10} />
                            </div>
                            <div className="scrollbar scrollbar-success">
                                <div className="force-overflow"></div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="d-flex flex-row justify-content-end align-items-start gap-4">
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
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <div className="text-start">
                                <span className="fw-bold h3">Creators Performance By Region</span><br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end align-middle">
                            <svg width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 11L20.9812 7.03332C17.7763 3.86997 16.1738 2.28829 14.2207 2.04475C13.7421 1.98508 13.2579 1.98508 12.7793 2.04475C10.8262 2.28829 9.22373 3.86997 6.01881 7.03332L2 11" stroke="#252733" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="line"></div><br />
                <div className="map p-3">
                    <div className="d-flex flex-column">
                        <div className="row d-flex flex-row justify-content-end align-items-center h5">
                            Select creators
                            <div className="col-md-2">
                                <MultiSelectCheckbox />
                            </div>
                        </div>
                    </div>
                    <div className="world-map ">
                        <Map countryData={countryData} />
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="d-flex justify-content-start">
                                    <svg width="203" height="48" viewBox="0 0 203 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
                            <div className="col-md-6 col-sm-12">
                                <div className="d-flex flex-row justify-content-end gap-4">
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
export default Content;
