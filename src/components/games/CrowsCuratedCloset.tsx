import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/games/crowscuratedcloset/CCC_screenshot_1.png",
    "/src/assets/images/games/crowscuratedcloset/CCC_screenshot_2.png",
    "/src/assets/images/games/crowscuratedcloset/CCC_screenshot_3.png",
    "/src/assets/images/games/crowscuratedcloset/CCC_screenshot_4.png",
    "/src/assets/images/games/crowscuratedcloset/CCC_screenshot_5.png",
    "/src/assets/images/games/crowscuratedcloset/CCC_screenshot_6.png",
];                

function CrowsCuratedCloset() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <img src="\src\assets\images\games\crowscuratedcloset\CCC_LibraryHeader.png"></img>
                <h1>Crow's Curated Closet</h1>
                <h2>build your boutique - style your space - herd your cats</h2>
                <h3>In Crow’s Curated Closet, you step into the role of the owner of a small gothic boutique, tasked with growing it into a thriving fashion empire. Starting with limited space, bare floors, and a handful of items, you’ll gradually build, expand, and refine your shop into a carefully curated experience that keeps customers coming back.</h3>
                <ul>
                    <li>Genre: Shop Simulator, Pixel Game, Dress-Up, Cozy</li>
                    <li>Role: Programming, Art, Game Design, UX Design, Writing</li>
                    <li>Built with: Pygame, Python</li>
                </ul>
            </section>

            <section className="content-section--alt">
                <iframe src="https://store.steampowered.com/widget/4565100/" frameborder="0" width="646" height="190"></iframe>
                <a href="https://www.dropbox.com/scl/fo/0h0fdo0t0q5yj1m8gcxgh/AC-v6TwZF6sptaYm4nLmf78?rlkey=sw1drwm854gqo1w72l4lq8v3f&st=djrfrbkf&dl=0" target="_blank">PressKit</a>
            </section>
            <section className="content-section">
                <p>
                    At its core, this game is about creative freedom. Design and decorate your boutique exactly the way you want - from soft, cozy arrangements to bold gothic aesthetics. Place furniture, organize shelves, and shape your layout to create an inviting and efficient shopping space. As your store grows, you’ll unlock new styles, items, and decorative options, allowing your boutique to evolve alongside your strategy. Cater to different customer preferences, refine your product selection, and optimise your setup to maximise profit. To keep up with demand, you’ll build a growing team of cats who take over tasks around the shop. While they handle the day-to-day work, you can focus on expansion, design, and turning your boutique into a profitable, ever-expanding business.
                </p>
            </section>     
            <section className="content-section--alt">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OGtfGnmYaBw?si=XIvpjo7-NpGf44EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            <section className="content-section"></section>       
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <section className="content-section"></section>
        </main>
    );
}

export default CrowsCuratedCloset;