import "./Videos.css";
import VideoList from "./VideoList/VideoList";

export default function Videos() {
    return (
        <section className="videos-work">
            <div className="container">
                <div className="videos-work-header-content">
                    <div className="videos-work-header">
                        <h1>Наши видео</h1>
                    </div>

                    <div className="arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            className="icon"
                        >
                            <path
                                d="M16 26.6665L16 5.33317"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                </div>

                <VideoList />
            </div>
        </section>
    )
}