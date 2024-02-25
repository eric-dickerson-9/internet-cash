const Card = ({ name, email, creative, rating, image }) => {
    // Calculate the number of filled stars based on the rating
    const filledStars = Math.floor(rating);

    // Array to represent the number of stars
    const starsArray = Array.from({ length: 5 }, (_, index) => index);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const badge_colors = ['#19B03F', '#F35A5A', '#FFD75C'];
    const badge_color = badge_colors[getRndInteger(0, 2)];
    return (
        <div className="creative-card m-2 mx-2 mx-sm-3">
            <div className="position-relative">
                <div className="position-absolute top-0 end-0">
                    <div className="p-3">
                        <i className="bi bi-three-dots-vertical text-secondary"></i>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-1 mt-5">
                <div className="news w-5">
                    <div className="position-relative ">
                        <div >
                            <img src={image} className="photo" />
                        </div>
                        <span className='card-badge'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="7.85" fill={badge_color} stroke="white" strokeWidth="4.3" />
                            </svg>
                        </span>
                    </div>
                </div>
                <h4 className='font-manrop'>{name}</h4>
                <span className="email-id">{email}</span>
                <div className="creatives d-flex flex-row my-2">
                    <div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.725 5.85L3.675 6.9L7.05 10.275L14.55 2.775L13.5 1.725L7.05 8.175L4.725 5.85ZM13.5 7.5C13.5 10.8 10.8 13.5 7.5 13.5C4.2 13.5 1.5 10.8 1.5 7.5C1.5 4.2 4.2 1.5 7.5 1.5C8.1 1.5 8.625 1.575 9.15 1.725L10.35 0.525C9.45 0.225 8.475 0 7.5 0C3.375 0 0 3.375 0 7.5C0 11.625 3.375 15 7.5 15C11.625 15 15 11.625 15 7.5H13.5Z" fill="#929399" />
                        </svg>
                    </div>
                    <span className='font-mantserrat'>{creative}Creatives</span>
                </div>
            </div>
            <div className={`rating-color-${rating > 4 ? 'green' : 'yellow'} text-center flex-wrap w-100 p-2 rounded-bottom-3 align-self-end`}>
                <div className="d-flex flex-row justify-content-center align-items-end gap-1 ">
                    <div className="rating">{rating}</div>
                    <ul className="mb-0 list-unstyled d-flex flex-row gap-1">
                        {starsArray.map((index) => (
                            <li key={index}>
                                <i className={`bi bi-star${index < filledStars ? '-fill' : ''} text-${rating > 4 ? 'success' : 'warning'}`}></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;