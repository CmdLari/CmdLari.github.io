const games = [
    {
        id: "out-of-water",
        label: "Out of Water",
        url: "/src/assets/gui/game_icons/oow_icon.png"
    },
    {
        id: "banishing-you",
        label: "Banishing You",
        url: "/src/assets/gui/game_icons/by_icon.png"
    },
    {
        id: "crows-curated-closet",
        label: "Crow's Curated Closet",
        url: "/src/assets/gui/game_icons/ccc_icon.png"
    },
    {
        id: "tenfold-tales",
        label: "Tenfold Tales",
        url: "/src/assets/gui/game_icons/tt_icon.png"
    },
    {
        id: "orpheus-revenge",
        label: "Orpheus' Revenge",
        url: "/src/assets/gui/game_icons/or_icon.png"
    },
];

const galleries = [
    {
        id: "illustration",
        label: "Illustration",
        url: "/src/assets/gui/gallery_icons/illustration.png"
    },
    {
        id: "design",
        label: "Design",
        url: "/src/assets/gui/gallery_icons/design.png"
    },
    {
        id: "photography",
        label: "Photography",
        url: "/src/assets/gui/gallery_icons/photography.png"
    }
];

const about = [
    {
        id: "about",
        label: "About",
        url: "/src/assets/gui/about.png"
    },
    {
        id: "contact",
        label: "Contact",
        url: "/src/assets/gui/contact.png"
    }
];

function SideNav({ type, selected, setSelected }) {
    const navItems = {
        games,
        galleries,
        about
    };

    const links = navItems[type] || [];

    return (
        <nav className="side-nav">
            {links.map((link) => (
                <a
                    key={link.id}
                    className={`side-nav__link ${
                        selected === link.id
                            ? "side-nav__link--active"
                            : ""
                    }`}
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();

                        if (setSelected) {
                            setSelected(link.id);
                        }
                    }}
                >
                    {link.url && <img src={link.url} alt="" />}
                    {link.label}
                </a>
            ))}
        </nav>
    );
}

export default SideNav;