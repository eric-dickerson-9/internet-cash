import React, { useState, useContext } from 'react';
import Carousel from "react-simply-carousel";
import Card from './Card';
import { MyContext } from '../../../context/MyContext';

export default function PeopleCardSlide() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { myCreators } = useContext(MyContext);
    return (
        <div className='w-100 card-wrap d-flex justify-content-center'>
            <Carousel className="d-flex flex-row"
                responsiveProps={[
                    { minWidth: 1367, maxWidth: 1920, itemsToShow: 9 },
                    { minWidth: 993, maxWidth: 1366, itemsToShow: 6 },
                    { minWidth: 768, maxWidth: 992, itemsToShow: 3 },
                    { minWidth: 564, maxWidth: 767, itemsToShow: 2 }]}
                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "space-between",
                        userSelect: "none"
                    }
                }}
                preventScrollOnSwipe
                swipeTreshold={60}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        background: "yellow"
                    }
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children:
                        <svg width="13" height="27" viewBox="0 0 13 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 25L5.96668 20.9812C9.13003 17.7763 10.7117 16.1738 10.9552 14.2207C11.0149 13.7421 11.0149 13.2579 10.9552 12.7793C10.7117 10.8262 9.13003 9.22373 5.96668 6.01881L2 2" stroke="#252733" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    ,
                    style: {
                        width: 90,
                        height: '100%',
                        minWidth: 10,
                        border: "none",
                        alignSelf: "center",
                        position: 'absolute',
                        right: '0%',
                        opacity: '60%',
                        background: 'linear-gradient(to right, white, white)'
                    }
                }}
                backwardBtnProps={{
                    children:
                        <svg width="13" height="27" viewBox="0 0 13 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 25L7.03332 20.9812C3.86997 17.7763 2.28829 16.1738 2.04475 14.2207C1.98508 13.7421 1.98508 13.2579 2.04475 12.7793C2.28829 10.8262 3.86997 9.22373 7.03332 6.01881L11 2" stroke="#252733" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    ,
                    style: {
                        width: 80,
                        height: '100%',
                        minWidth: 10,
                        border: "none",
                        alignSelf: "center",
                        position: 'absolute',
                        left: '0%',
                        zIndex: '1',
                        opacity: '60%',
                        background: 'linear-gradient(to left, white, white)'
                    }
                }}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                        style: {
                            height: 14,
                            width: 14,
                            borderRadius: "50%",
                            border: 0
                        }
                    },
                    activeItemBtnProps: {
                        style: {
                            height: 16,
                            width: 16,
                            borderRadius: "4px",
                            border: 0,
                            background: "#00C851",
                            rotate: '45deg'
                        }
                    }
                }}
                // itemsToShow={6}
                speed={400}
                centerMode
            >
                {myCreators.map((item, index) => (
                    <Card key={index} name={item.name} email={item.email} creative={item.creative} rating={item.rating} image={item.avatar} />
                ))}
            </Carousel>
        </div >
    );
}
