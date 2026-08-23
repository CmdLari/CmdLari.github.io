const links = [
    {
        id: "home",
        label: "Home",
        url: "/src/assets/gui/menu_about.png"
    },
    {
        id: "games",
        label: "Games",
        url: "/src/assets/gui/menu_games.png"
    },
    {
        id: "galleries",
        label: "Galleries",
        url: "/src/assets/gui/menu_gallery.png"
    },
    {
        id: "about",
        label: "About",
        url: "/src/assets/gui/menu_lari.png"
    },
];

function MainNav({ section, setSection }) {
    return (
        <nav className="main-nav">
            {links.map((link) => (
                <a
                    key={link.id}
                    className={`main-nav__link ${
                        section === link.id
                            ? "main-nav__link--active"
                            : ""
                    }`}
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        setSection(link.id);
                    }}
                >
                    <img src={link.url} alt="" />
                    {link.label}
                </a>
            ))}
        </nav>
    );
}

export default MainNav;