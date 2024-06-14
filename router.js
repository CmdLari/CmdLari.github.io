document.addEventListener("DOMContentLoaded", function () {
    const routes = {
        AboutMe: document.getElementById("AboutMe"),
        BanishingYou: document.getElementById("BanishingYou")        
    };

    function hideAllSections() {
        Object.values(routes).forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(route) {
        hideAllSections();
        if (routes[route]) {
            routes[route].style.display = 'block';
        } else {
            routes.home.style.display = 'block';
        }
    }

    function handleHashChange() {
        const hash = window.location.hash.replace('#', '');
        showSection(hash);
    }

    window.addEventListener('hashchange', handleHashChange);

    // Initial load
    if (!window.location.hash) {
        window.location.hash = '#AboutMe';
    } else {
        handleHashChange();
    }
});
