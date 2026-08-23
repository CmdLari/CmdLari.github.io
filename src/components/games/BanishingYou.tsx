import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/games/banishingyou/BanishingYou_Screenshot1.png",
    "/src/assets/images/games/banishingyou/BanishingYou_Screenshot2.png",
    "/src/assets/images/games/banishingyou/BanishingYou_Screenshot3.png",
    "/src/assets/images/games/banishingyou/BanishingYou_Screenshot4.png",
    "/src/assets/images/games/banishingyou/BanishingYou_Screenshot5.png",
    "/src/assets/images/games/banishingyou/BanishingYou_Screenshot6.png",
];            

function BanishingYou() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <img src="\src\assets\images\games\banishingyou\BanishingYou_LibraryHeader.png"></img>
                <h1>Banishing You</h1>
                <h2>when your dreams manifest, don’t trust them!</h2>
                <h3>A visual novel filled with strange, alluring characters and a lurking, dark danger.</h3>
                <ul>
                    <li>Genre: Visual Novel, Dark Fantasy, Romance</li>
                    <li>Role: Programming, Art, Game Design, UX Design, Writing</li>
                    <li>Built with: Renpy, Python</li>
                </ul>
            </section>

            <section className="content-section--alt">
                <iframe src="https://store.steampowered.com/widget/2926910/" frameborder="0" width="646" height="190"></iframe>
                <a href="https://www.dropbox.com/scl/fo/dcc77zmmj54nyazz95x17/AAlBniMIBrCbNB2e661IEWA?rlkey=8qibwdaqa8k67vyto4q3zdxgl&st=api3kdty&dl=0" target="_blank">PressKit</a>
            </section>
            <section className="content-section">
                <p>
                    You wake up in a mysterious forest with no idea how you got there - just a surreal invitation to a masquerade ball and a bad feeling. Navigating manipulative meetings and potential romance, you’ll find yourself in a realm where fears take form and emotions have teeth. Every choice deepens a bond - or drives the world toward its undoing.
                </p>
                <h3>Quotes</h3>
                <p>
                “Beautiful, Mesmerizing Art and Gorgeous Characters [...] I’m in tears, what a beautiful and brief journey in one playthrough”
                <br></br>
                <strong>via Steam, 2024 - AUG - 18th</strong>
                <br></br>
                <br></br>
                “This was certainly an interesting read. In a uniquely strange way.”
                <br></br>
                <strong>via Steam, 2024 - AUG - 17th</strong>
                <br></br>
                <br></br>
                “Wow, what a gem of a visual novel! [...] what I got instead is a surprisingly deep and unpredictable story set in a truly enchanting world filled with equally enchanting inhabitants.”
                <br></br>
                <strong>via Steam, 2024 - NOV - 08th</strong>
                <br></br>
                <br></br>
                “A truly magical, almost ethereal visual novel about finding your own strength along with some romance [...].”
                <br></br>
                <strong>via Steam, 2025 - MAY - 29th</strong>
                </p>
            </section>     
            <section className="content-section--alt">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IH2odr8Cch8?si=ahrhpqIxuD1r-xoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            <section className="content-section"></section>       
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <section className="content-section"></section>
        </main>
    );
}

export default BanishingYou;