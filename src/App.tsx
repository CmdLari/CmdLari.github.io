import { useEffect, useState } from "react";

import Header from "./components/Header";
import MainNav from "./components/MainNav";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import OutofWater from "./components/games/OutofWater";
import BanishingYou from "./components/games/BanishingYou";
import CrowsCuratedCloset from "./components/games/CrowsCuratedCloset";
import TenfoldTales from "./components/games/TenfoldTales";
import OrpheusRevenge from "./components/games/OrpheusRevenge";

import Photography from "./components/gallery/Photography";
import Design from "./components/gallery/design";
import Illustration from "./components/gallery/illustration";

import FallingStars from "./components/FallingStars";

import "./styles/design.css";

function App() {
    /* =========================================
       NAVIGATION STATE
       ========================================= */

    const [section, setSection] = useState("home");

    const [game, setGame] = useState("out-of-water");

    const [gallery, setGallery] = useState("photography");

    const [about, setAbout] = useState("about");


    /* =========================================
       CURSOR EFFECT
       ========================================= */

    useEffect(() => {
        const createStar = (event: MouseEvent) => {
            // Only spawn a star 20% of the time
            if (Math.random() > 0.20) return;

            const star = document.createElement("span");

            const stars = ["✿", "●", "◆"];

            star.className = "cursor-star";

            star.textContent =
                stars[Math.floor(Math.random() * stars.length)];

            const offsetX = (Math.random() + 0.5) * 20;
            const offsetY = (Math.random() + 1.4) * 20;

            star.style.left = `${event.clientX + offsetX}px`;
            star.style.top = `${event.clientY + offsetY}px`;

            star.style.fontSize = `${30 + Math.random() * 8}px`;

            document.body.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 1000);
        };

        window.addEventListener("mousemove", createStar);

        return () => {
            window.removeEventListener("mousemove", createStar);
        };
    }, []);


    /* =========================================
       CONTENT
       ========================================= */

    const renderContent = () => {
        /* HOME */

        if (section === "home") {
            return <Home />;
        }


        /* GAMES */

        if (section === "games") {
            switch (game) {
                case "out-of-water":
                    return <OutofWater />;

                case "banishing-you":
                    return <BanishingYou />;
                
                case "crows-curated-closet":
                    return <CrowsCuratedCloset />;
                
                case "tenfold-tales":
                    return <TenfoldTales />;
                
                case "orpheus-revenge":
                    return <OrpheusRevenge />;

                default:
                    return <OutofWater />;
            }
        }


        /* GALLERIES */

        if (section === "galleries") {
            switch (gallery) {
                case "photography":
                    return <Photography />;
                case "illustration":
                    return <Illustration />;
                
                case "design":
                    return <Design />;

                default:
                    return <Photography />;
            }
        }


        /* ABOUT */

        if (section === "about") {
            switch (about) {
                case "about":
                    return <About />;

                case "contact":
                    return <Contact />;

                default:
                    return <About />;
            }
        }


        /* FALLBACK */

        return <Home />;
    };


    /* =========================================
       PAGE
       ========================================= */

    return (
        <>
        <FallingStars />

        <div className="site">
            <Header />

            <div className="site-layout">

                {/* LEFT NAVIGATION */}

                <aside className="site-layout__left">
                    <MainNav
                        section={section}
                        setSection={setSection}
                    />
                </aside>


                {/* CONTENT */}

                <main className="site-layout__content">
                    {renderContent()}
                </main>


                {/* RIGHT NAVIGATION */}

                {section !== "home" && (
                    <aside className="site-layout__right">

                        {/* GAMES */}
                        {section === "games" && (
                            <SideNav
                                type="games"
                                selected={game}
                                setSelected={setGame}
                            />
                        )}

                        {/* GALLERIES */}
                        {section === "galleries" && (
                            <SideNav
                                type="galleries"
                                selected={gallery}
                                setSelected={setGallery}
                            />
                        )}

                        {/* ABOUT */}
                        {section === "about" && (
                            <SideNav
                                type="about"
                                selected={about}
                                setSelected={setAbout}
                            />
                        )}

                    </aside>
                )}

            </div>
            <Footer />
        </div>
    </>
    );
}

export default App;