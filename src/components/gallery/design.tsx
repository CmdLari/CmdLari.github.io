import Gallery from "../Gallery";

const screenshots = [
    "/src/assets/images/gallery/design/Design01.jpg",
    "/src/assets/images/gallery/design/Design02.jpg",
    "/src/assets/images/gallery/design/Design03.jpg",
    "/src/assets/images/gallery/design/Design04.jpg",
    "/src/assets/images/gallery/design/Design05.jpg",
    "/src/assets/images/gallery/design/Design06.jpg",
    "/src/assets/images/gallery/design/Design07.jpg",
    "/src/assets/images/gallery/design/Design08.jpg",
    "/src/assets/images/gallery/design/Design09.jpg",
    "/src/assets/images/gallery/design/Design10.jpg",
    "/src/assets/images/gallery/design/Design11.jpg",
    "/src/assets/images/gallery/design/Design12.jpg",
];            

function Design() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <Gallery images={screenshots} />
            </section>
            <p>
                <strong>PRICES:</strong>
                <br></br>
                75€ / hour || 500€ / day || 1800€ / Week
                <br></br>
                <br></br>
                <strong>PACKAGES:</strong>
                <br></br>
                LOGO: from 800€ || BUSINESS CARDS: from 400€ || FLYER: from 300€ || EDITORIAL: from 300€ / Page | 1000€ / 10 Pages
                <br></br>
                <br></br>
                <strong>REFERENCES:</strong>
                <br></br>
                dm || you GmbH || GEERS || Fuchs trifft Hund || Jung Fruchtsäfte || Zsuzsannas || Superfood Sauces || Bartsch || Enno Lenze || Wefugees || Dr. Simin Amelsberg || MEDI&gt;&gt;RUN || Hanayu
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

export default Design;