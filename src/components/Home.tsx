function Home() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <h1>Lapys</h1>
                <h2>cute, cursed & handmade</h2>
                <h3>I develop games with a focus on art-driven design.</h3>

                <p>
                    Lapys Studio brings together game development, illustration,
                    design, and photography.
                    Hire me for creative work - or follow along as I build games.
                </p>

                <a href="https://store.steampowered.com/developer/lapysG" target="_blank">My Games on Steam</a>
            </section>

            <section className="content-section--alt">
                <h2>Featured: Out of Water</h2>
                <img src="src\assets\images\games\outofwater\OOW_Ensemble_LibraryHeader.png"/>
                <p>
                    A narrative-driven visual novel about emotions, survival, and something lurking beneath the surface.
                </p>

                <a href="https://store.steampowered.com/app/3911100/Out_Of_Water_Demo/" target="_blank">Play the demo</a>
            </section>
            <section className="content-section">
                <h2>What I create</h2>

                <p>
                    I build games where systems, story, and visuals are designed together - not separately.
                    Every mechanic, interface, and character serves the same emotional experience.

                </p>
                <ul>
                    <li>Writing & Narrative Development</li>
                    <li>Game Design & Coding</li>
                    <li>Visual Design & UI</li>
                    <li>Illustration & Character Design</li>
                    <li>Photography (Art & Commercial)</li>
                </ul>
                <a href="https://discord.gg/9US7Z7AzUq" target="_blank">Join my Discord</a>
            </section>            
        </main>
    );
}

export default Home;