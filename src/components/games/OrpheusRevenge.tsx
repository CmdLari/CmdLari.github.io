import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/games/orpheusrevenge/OrpheusRevenge_screenshot_1.png",
    "/src/assets/images/games/orpheusrevenge/OrpheusRevenge_screenshot_2.png",
    "/src/assets/images/games/orpheusrevenge/OrpheusRevenge_screenshot_3.jpg",
    "/src/assets/images/games/orpheusrevenge/OrpheusRevenge_screenshot_4.png",
    "/src/assets/images/games/orpheusrevenge/OrpheusRevenge_screenshot_5.png",
    "/src/assets/images/games/orpheusrevenge/OrpheusRevenge_screenshot_6.png",
];            

function OrpheusRevenge() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <img src="\src\assets\images\games\orpheusrevenge\library_header.png"></img>
                <h1>Orpheus' Revenge</h1>
                <h2>he came back for love. he stayed for vengeance.</h2>
                <h3>death isn’t the end - and you’re armed with grief, wrath, and hopefully good aim.</h3>
                <ul>
                    <li>Genre: Arcade, Clicker, Pixel Graphics</li>
                    <li>Role: Programming, Art, Game Design, UX Design, Writing</li>
                    <li>Built with: Pygame, Python</li>
                </ul>
            </section>

            <section className="content-section--alt">
                <iframe src="https://store.steampowered.com/widget/3344190/" frameborder="0" width="646" height="190"></iframe>
                <a href="https://www.dropbox.com/scl/fo/7sxe4ispzxoeacem4iyaj/AGkxBgvM39XVEp5KfBTx1Og?rlkey=sftz86tzx94hjol3fuo7xf9xx&st=2cjv0unv&dl=0" target="_blank">PressKit</a>
            </section>
            <section className="content-section">
                <p>
                In this fast-paced, 80s-infused pixel shooter, you descend once more into the underworld to challenge its lords, beasts, and demons. Fight your way through vibrant hellscapes, accompanied by retro synths, biting dialogue, and enemies that hit harder than your grief. Click to shoot. Hope to survive.
                </p>
                <h3>Quotes</h3>
                <p>
                “an excellent game based on 80's shooters, set in Greek mythology, very fun, I highly recommend it”
                <br></br>
                <strong>via Steam, 2025 - JUN - 28th</strong>
                <br></br>
                <br></br>
                “Looks cool ^^”
                <br></br>
                <strong>via Steam, 2024 - DEC - 14th</strong>
                </p>
            </section>     
            <section className="content-section--alt">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2HY5Vuz8J_U?si=E2ZUudYxb_goH_nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            <section className="content-section"></section>       
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <section className="content-section"></section>
        </main>
    );
}

export default OrpheusRevenge;