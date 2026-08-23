import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/games/tenfoldtales/TenfoldTales_screenshot1.png",
    "/src/assets/images/games/tenfoldtales/TenfoldTales_screenshot2.png",
    "/src/assets/images/games/tenfoldtales/TenfoldTales_screenshot3.png",
    "/src/assets/images/games/tenfoldtales/TenfoldTales_screenshot4.png",
    "/src/assets/images/games/tenfoldtales/TenfoldTales_screenshot5.png",
    "/src/assets/images/games/tenfoldtales/TenfoldTales_screenshot6.png",
];            

function TenfoldTales() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <img src="\src\assets\images\games\tenfoldtales\TenfoldTales_LibraryHeader.png"></img>
                <h1>Tenfold Tales</h1>
                <h2>a hundred tiles. a dozen choices. one little bunny’s fate.</h2>
                <h3>Make some tea, dim the lights, and get lost in a patchwork world where every tile hides a tale.</h3>
                <ul>
                    <li>Genre: Cozy, Choose Your Own Adventure, Pixel Graphics</li>
                    <li>Role: Programming, Art, Game Design, UX Design, Writing</li>
                    <li>Built with: Pygame, Python</li>
                </ul>
            </section>

            <section className="content-section--alt">
                <iframe src="https://store.steampowered.com/widget/3640130/" frameborder="0" width="646" height="190"></iframe>
                <a href="https://www.dropbox.com/scl/fo/oiie247b41or3sd02ueh4/AMUXQJwZ-JIt5pOBwHHmsso?rlkey=ucsu1e0mxi82z2txq5in2787v&st=mllo041f&dl=0" target="_blank">PressKit</a>
            </section>
            <section className="content-section">
                <p>
                Guide Lapin, a curious bunny girl, across a magical patchwork world - one mysterious tile at a time. Explore a 100-tile board filled with whimsical encounters, tough decisions, and stats-driven exploration. Each run reshuffles the map and its story. Will you thrive on luck, logic, or sheer bunny stubbornness? Will you thrive on luck, logic, or sheer bunny stubbornness? Each game is a self-contained journey, full of colour, stats-based gambles, and little stories. Play again and again to uncover new tiles, write new stories, and let your bunny girl explore more.
                </p>
            </section>     
            <section className="content-section--alt">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q-s14W1wtic?si=kXMsR8WuAotqo5gN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            <section className="content-section"></section>       
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <section className="content-section"></section>
        </main>
    );
}

export default TenfoldTales;