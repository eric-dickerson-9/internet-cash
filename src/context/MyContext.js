// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const initialState = [
        {
            avatar: './images/icons/performance/henry.png',
            name: 'Henry Paul',
            role: 'Model',
            socialChannels: [{
                social: 'Facebook',
                percent: 10
            },
            {
                social: 'Snapchat',
                percent: 35
            },
            {
                social: 'Twitter',
                percent: 25
            },
            {
                social: 'Instagram',
                percent: 15
            },
            {
                social: 'Youtube',
                percent: 15
            }],
            creatives: 123,
            rating: 4.5,
            email: 'henry.p@mail.com',
        }, {
            avatar: './images/icons/performance/noah.png',
            name: 'Noah Harris',
            role: 'Photographer',
            socialChannels: [{
                social: 'Facebook',
                percent: 30
            },
            {
                social: 'Snapchat',
                percent: 5
            },
            {
                social: 'Twitter',
                percent: 25
            },
            {
                social: 'Instagram',
                percent: 15
            },
            {
                social: 'Youtube',
                percent: 25
            }]
        }, {
            avatar: './images/icons/performance/jack.png',
            name: 'Jack Paul',
            role: 'Influencer',
            socialChannels: [{
                social: 'Facebook',
                percent: 25
            },
            {
                social: 'Snapchat',
                percent: 20
            },
            {
                social: 'Twitter',
                percent: 15
            },
            {
                social: 'Instagram',
                percent: 25
            },
            {
                social: 'Youtube',
                percent: 25
            }]
        }, {
            avatar: './images/icons/performance/lucas.png',
            name: 'Lucas Buron',
            role: 'Model',
            socialChannels: [{
                social: 'Facebook',
                percent: 20
            },
            {
                social: 'Snapchat',
                percent: 20
            },
            {
                social: 'Twitter',
                percent: 30
            },
            {
                social: 'Instagram',
                percent: 15
            },
            {
                social: 'Youtube',
                percent: 15
            }]
        }, {
            avatar: './images/icons/performance/oliver.png',
            name: 'Oliver Wilson',
            role: 'Photographer',
            socialChannels: [
                {
                    social: 'Facebook',
                    percent: 15
                },
                {
                    social: 'Snapchat',
                    percent: 20
                },
                {
                    social: 'Twitter',
                    percent: 10
                },
                {
                    social: 'Instagram',
                    percent: 30
                },
                {
                    social: 'Youtube',
                    percent: 25
                }
            ]
        }, {
            avatar: './images/icons/performance/levi.png',
            name: 'Levi Lewis',
            role: 'Influencer',
            socialChannels: [
                {
                    social: 'Facebook',
                    percent: 10
                },
                {
                    social: 'Snapchat',
                    percent: 40
                },
                {
                    social: 'Twitter',
                    percent: 20
                },
                {
                    social: 'Instagram',
                    percent: 10
                },
                {
                    social: 'Youtube',
                    percent: 25
                }
            ]
        }, {
            avatar: './images/icons/performance/jacksie.png',
            name: 'Jacksie Owe',
            role: 'Influencer',
            socialChannels: [
                {
                    social: 'Facebook',
                    percent: 5
                },
                {
                    social: 'Snapchat',
                    percent: 45
                },
                {
                    social: 'Twitter',
                    percent: 25
                },
                {
                    social: 'Instagram',
                    percent: 20
                },
                {
                    social: 'Youtube',
                    percent: 5
                }
            ]
        }, {
            avatar: './images/icons/performance/ethan.png',
            name: 'Ethan Jane',
            role: 'Model',
            socialChannels: [{
                social: 'Facebook',
                percent: 25
            },
            {
                social: 'Snapchat',
                percent: 15
            },
            {
                social: 'Twitter',
                percent: 30
            },
            {
                social: 'Instagram',
                percent: 5
            },
            {
                social: 'Youtube',
                percent: 25
            }
            ]

        }, {
            avatar: './images/icons/performance/ezra.png',
            name: 'Ezra Jane',
            role: 'Photographer',
            socialChannels: [{
                social: 'Facebook',
                percent: 20
            },
            {
                social: 'Snapchat',
                percent: 15
            },
            {
                social: 'Twitter',
                percent: 15
            },
            {
                social: 'Instagram',
                percent: 45
            },
            {
                social: 'Youtube',
                percent: 5
            }
            ]
        }, {
            avatar: './images/icons/performance/allen.png',
            name: 'Allen Foster',
            role: 'Photographer',
            socialChannels: [{
                social: 'Facebook',
                percent: 10
            },
            {
                social: 'Snapchat',
                percent: 15
            },
            {
                social: 'Twitter',
                percent: 25
            },
            {
                social: 'Instagram',
                percent: 25
            },
            {
                social: 'Youtube',
                percent: 25
            }]
        }, {
            avatar: './images/icons/performance/angel.png',
            name: 'Angel Webb',
            role: 'Influencer',
            socialChannels: [{
                social: 'Facebook',
                percent: 20
            },
            {
                social: 'Snapchat',
                percent: 5
            },
            {
                social: 'Twitter',
                percent: 45
            },
            {
                social: 'Instagram',
                percent: 20
            },
            {
                social: 'Youtube',
                percent: 10
            }]
        }
    ]
    const initialMyCreators = [

        {
            avatar: './images/avatars/henry.png',
            name: 'Henry Paul',
            creatives: 123,
            rating: 4.5,
            email: 'henry.p@mail.com',
        }, {
            avatar: './images/avatars/william.png',
            name: 'William James',
            creatives: 220,
            rating: 4.8,
            email: 'william.j@mail.com',
        }, {
            avatar: './images/avatars/evan.png',
            name: 'Evan Jefferson',
            creatives: 105,
            rating: 4.2,
            email: 'evan.j@mail.com',
        }, {
            avatar: './images/avatars/micle.png',
            name: 'Micle Thomson',
            creatives: 117,
            rating: 3.8,
            email: 'micle.t@mail.com',
        }, {
            avatar: './images/avatars/kiara.png',
            name: 'Kiara Jesson',
            creatives: 97,
            rating: 3.5,
            email: 'kiara.j@mail.com',
        }, {
            avatar: './images/avatars/henry.png',
            name: 'Hamidur Sheikh',
            creatives: 89,
            rating: 4.3,
            email: 'hami.s@mail.com',
        }
    ]
    const [creators, setCreators] = useState(initialState);
    const [myCreators, setMyCreators] = useState(initialMyCreators);


    return (
        <MyContext.Provider value={{ creators, myCreators }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
