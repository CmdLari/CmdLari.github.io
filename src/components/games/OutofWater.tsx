import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/games/outofwater/Screenshot01.jpg",
    "/src/assets/images/games/outofwater/Screenshot02.jpg",
    "/src/assets/images/games/outofwater/Screenshot03.jpg",
    "/src/assets/images/games/outofwater/Screenshot04.jpg",
    "/src/assets/images/games/outofwater/Screenshot05.jpg",
    "/src/assets/images/games/outofwater/Screenshot06.jpg",
    "/src/assets/images/games/outofwater/Screenshot07.jpg",
    "/src/assets/images/games/outofwater/Screenshot08.jpg",
    "/src/assets/images/games/outofwater/Screenshot09.jpg",
    // "/src/assets/images/games/outofwater/Screenshot10.jpg",
];

function OutofWater() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <img src="\src\assets\images\games\outofwater\OOW_Ensemble_LibraryHeader.png"></img>
                <h1>Out of Water</h1>
                <h2>when autumn days begin to darken.</h2>
                <h3>Out of Water is a mythic visual novel about love, survival, and choice - set in Watarholt, a northern Germanic village in the year 1 CE.</h3>
                <ul>
                    <li>Genre: Visual Novel, Dark Fantasy, Romance</li>
                    <li>Role: Programming, Art, Game Design, UX Design, Writing</li>
                    <li>Built with: Renpy, Python</li>
                </ul>
            </section>

            <section className="content-section--alt">
                <iframe src="https://store.steampowered.com/widget/3907840/" frameborder="0" width="646" height="190"></iframe>
                <a href="https:///www.dropbox.com/scl/fo/tk8rkkhq6734erywgbx92/ABL4mhFFBk0xnu4AEM9i1t0?rlkey=yt3kquyfsomvotozvajncbk3t&st=jeu27nz8&dl=0" target="_blank">PressKit</a>
            </section>
            <section className="content-section">
                <p>
                    The harvest is done. The lake runs still. But something in Watarholt is wrong. Watarholt is a quiet settlement of twelve longhouses, nestled among heaths, rivers, and birch forests. As summer fades you - like everyone in Watarholt - prepare for shorter days and colder nights: bringing in the harvest, gathering around fires, telling stories, and singing songs. But the nights grow colder still when villagers begin to vanish... or wash up dead. The woods turn hostile. The waters, deadly. As tension rises, you’ll form bonds, face ancient horrors, and uncover something wicked beneath the surface.
                </p>
                <h3>Quotes</h3>
                <p>
                “[...] the game, it's stunning. The backgrounds are truly immersive, while at the same time the art style for both BGs and sprites is consistent and -- most importantly -- totally appropriate for the mood. There's almost a cinematic quality to this heightened and very focused atmophere.”
                <br></br>
                <strong>via Steam, 2025 - AUG - 18th</strong>
                <br></br>
                <br></br>
                “Love the hand-drawn look, the soundtrack fits perfectly!”
                <br></br>
                <strong>via Steam, 2025 - AUG - 19th</strong>
                </p>
            </section>     
            <section className="content-section--alt">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PBgELQZ8XxU?si=pCCJId-0EavXwSDu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            <section className="content-section"></section>       
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <section className="content-section"></section>
        </main>
    );
}

export default OutofWater;