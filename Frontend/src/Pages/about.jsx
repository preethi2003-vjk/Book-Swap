import "../Styles/about.css";
import { Link } from "react-router";

function About() {
    return (
        <>
            <div className="about-page">

                {/* Back Button */}
                <div className="back-btn">
                    <Link to="/">
                        <button>⟵ Back</button>
                    </Link>
                </div>

                <h1 className="about-title">About BookDonate+</h1>

                {/* ABOUT SECTION */}
                <div className="about-section">
                    <img 
                        src="https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-animated-book-flipping-pages-png-image_15957717.png"
                        alt="About BookDonate"
                    />
                    <div className="about-text">
                        <h2>What is BookDonate+?</h2>
                        <p>
                            BookDonate+ is a community-driven platform created to help people 
                            donate their old books and receive exciting new reads. Our system 
                            connects donors, students, readers, and communities who believe in 
                            the power of sharing knowledge.
                        </p>
                    </div>
                </div>

                {/* MISSION SECTION */}
                <div className="about-section">
                    <img 
                        src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-book-bin-vector-png-image_6883289.png"
                        alt="Mission"
                    />
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to reduce book waste, promote literacy, and make 
                            reading accessible to everyone. We encourage sharing, recycling, 
                            and building a more connected reading community.
                        </p>
                    </div>
                </div>

                {/* GOAL SECTION */}
                <div className="about-section">
                    <img 
                        src="https://png.pngtree.com/png-clipart/20240810/original/pngtree-clipart-of-a-cartoon-book-png-image_15741617.png"
                        alt="Our Goal"
                    />
                    <div className="about-text">
                        <h2>Our Goal</h2>
                        <p>
                            Our goal is to create a sustainable environment where unused books 
                            find new homes. We aim to inspire thousands of users to donate, 
                            exchange, and grow through reading together.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default About;
