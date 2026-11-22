import './TokyoPage.css';

function AboutmePage() {
    return (
        <main className="site-layout__content">
            <section className="about-page">
                <h1>Larissa Pychlau</h1>
                <h2>I’m a game developer and designer focused on emotional, story-driven experiences.</h2>

                <p>
                    With a background in graphic design (Gewerbliche Ausbildung, awarded with distinction) and ongoing studies in applied computer science, I combine visual storytelling with technical implementation to create cohesive, interactive works.
                    <br></br>
                    I work across programming, game design, and visual development, and also offer services in illustration and photography. My goal is to create experiences where visuals, gameplay, and narrative work together seamlessly.
                    <br></br>
                    Games have been a core part of my life since discovering titles like Dungeon Keeper, The Settlers II, and Jagged Alliance. Today, I bring that passion into my own projects, creating worlds and stories for others to experience.
                </p>
                <div className="about-contact">
                <a
                    href="mailto:larissapychlau@gmail.com"
                    className="about-contact-button"
                >
                    <span className="about-contact-icon">✉</span>
                    <span>EMAIL ME</span>
                </a>

                <a
                    href="tel:+4917680767678"
                    className="about-contact-button"
                >
                    <span className="about-contact-icon">✆</span>
                    <span>CALL ME</span>
                </a>
                </div>
                <div className="about-image">
                    <img
                        src={`${import.meta.env.BASE_URL}images/about/about.jpg`}
                        alt="Preview of the interactive Tokyo Photo Map"
                    />
                </div>
            </section>          
        </main>
    );
}

export default AboutmePage;
