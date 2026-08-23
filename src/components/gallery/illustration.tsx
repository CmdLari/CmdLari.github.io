import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/gallery/illustration/Illustration01.jpg",
    "/src/assets/images/gallery/illustration/Illustration02.jpg",
    "/src/assets/images/gallery/illustration/Illustration03.jpg",
    "/src/assets/images/gallery/illustration/Illustration04.jpg",
    "/src/assets/images/gallery/illustration/Illustration05.jpg",
    "/src/assets/images/gallery/illustration/Illustration06.jpg",
    "/src/assets/images/gallery/illustration/Illustration07.jpg",
    "/src/assets/images/gallery/illustration/Illustration08.jpg",
    "/src/assets/images/gallery/illustration/Illustration09.jpg",
    "/src/assets/images/gallery/illustration/Illustration10.jpg",
    "/src/assets/images/gallery/illustration/Illustration11.jpg",
    "/src/assets/images/gallery/illustration/Illustration12.jpg",
];            

function Illustration() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <p>
                <strong>PRICES:</strong>
                <br></br>
                <strong>VECTOR / PICTOGRAM</strong> (S) ab / from 60€ || (M) ab / from 120€ || (L) ab / from 250€
                <br></br>
                <strong>ILLUSTRATION / CHARACTER DESIGN</strong> ab / from 100€ || (B/W) ab / from 150€ || (Coloured) ab / from 300€
                <br></br>
                <strong>SCRIBBLE</strong> (S) ab / from 30€ ||(M) ab / from 60€ || (L) ab / from 100€
                <br></br>
                <br></br>
                <strong>REFERENCES:</strong>
                <br></br>
                dm || you || GEERS || Fuchs trifft Hund || Wiferion || Jung Fruchtsäfte || Zsuzsannas || Superfood Sauces || Bartsch || Enno Lenze || Wefugees || QueerGeist e.V
                <br></br>
                <br></br>
                <strong>CONTACT:</strong>
                <br></br>
                larissapychlau@gmail.com || +49 176 80 76 76 78
                <br></br>
                <br></br>
                <h4>In accordance with Section 19 (1) of the German Turnover Tax Act (UStG), no turnover tax is declared.</h4>
            </p>
        </main>
    );
}

export default Illustration;