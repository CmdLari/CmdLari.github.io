function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="\src\assets\gui\lapys_logo.png"/>
            </div>

            <div className="header__bar">
                <span>making games and other things</span>

                <div className="header__socials">
                    <span><a href="https://discord.gg/9US7Z7AzUq" target="_blank"><img src="\src\assets\gui\socials\discord.png"/></a></span>
                    <span><a href="https://store.steampowered.com/developer/lapysG" target="_blank"><img src="\src\assets\gui\socials\steam.png"/></a></span>
                    <span><a href="https://www.tiktok.com/@lapysgames" target="_blank"><img src="\src\assets\gui\socials\tiktok.png"/></a></span>
                </div>
            </div>
        </header>
    );
}

export default Header;