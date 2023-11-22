
const Card = ({ name, email, creative, rating, image }) => {
    return (
        <div className="creative-card">
            <div class="position-relative">
                <div class="position-absolute top-0 end-0">
                    <div className="p-3">
                        <i class="bi bi-three-dots-vertical text-secondary"></i>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-1 mt-4">
                <div className="news w-5">
                    <div className="position-relative ">
                        <div >
                            <img src={image} className="photo" />
                        </div>
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-2 rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>
                <h4>{name}</h4>
                <h6 className="email-id">{email}</h6>
                <div className="creatives d-flex flex-row my-2">
                    <div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.725 5.85L3.675 6.9L7.05 10.275L14.55 2.775L13.5 1.725L7.05 8.175L4.725 5.85ZM13.5 7.5C13.5 10.8 10.8 13.5 7.5 13.5C4.2 13.5 1.5 10.8 1.5 7.5C1.5 4.2 4.2 1.5 7.5 1.5C8.1 1.5 8.625 1.575 9.15 1.725L10.35 0.525C9.45 0.225 8.475 0 7.5 0C3.375 0 0 3.375 0 7.5C0 11.625 3.375 15 7.5 15C11.625 15 15 11.625 15 7.5H13.5Z" fill="#929399" />
                        </svg>
                    </div>
                    <span>{creative}Creatives</span>
                </div>
            </div>
            <div className="bottom text-center flex-wrap w-100 p-2 rounded-bottom-3">
                <div className="d-flex flex-row justify-content-center gap-1">
                    <div className="rating">{rating}</div>
                    <ul className="mb-0 list-unstyled d-flex flex-row gap-1">
                        <li>
                            <i className="bi bi-star-fill text-success"></i>
                        </li>
                        <li>
                            <i className="bi bi-star-fill text-success"></i>
                        </li>
                        <li>
                            <i className="bi bi-star-fill text-success"></i>
                        </li>
                        <li>
                            <i className="bi bi-star-fill text-success"></i>
                        </li>
                        <li>
                            <i className="bi bi-star text-success"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;