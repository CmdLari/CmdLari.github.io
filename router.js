document.addEventListener("DOMContentLoaded", function () {
    const routes = {
        AboutMe: document.getElementById("AboutMe"),
        Photography: document.getElementById("Photography"),
        DevLog: document.getElementById("DevLog"),
        BanishingYou: document.getElementById("BanishingYou"),
        Impressum: document.getElementById("Impressum"),
        Design: document.getElementById("Design"),
        Illustration: document.getElementById("Illustration")                   
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

    if (!window.location.hash) {
        window.location.hash = '#AboutMe';
    } else {
        handleHashChange();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.querySelectorAll('.blog');
    const blogList = document.getElementById('blog-list');
    const clicked = 0;

    blogPosts.forEach(post => post.style.display = 'none');

    blogPosts.forEach(post => {

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${post.id}`;
        
        link.textContent = post.id;
        
        link.addEventListener('click', function (e) {
            e.preventDefault();
            blogPosts.forEach(p => p.style.display = 'none');
            document.getElementById(post.id).style.display = 'block';
            clicked = 1;
        });
        
        listItem.appendChild(link);        
        blogList.appendChild(listItem);
    });
    
    if (clicked==0) {
        const latestPost = blogPosts[0];
        latestPost.style.display = 'block';
    } else {
        const currentPost = document.getElementById(window.location.hash.substring(1));
        if (currentPost) {
            currentPost.style.display = 'block';
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const oowblogPosts = document.querySelectorAll('.oowblog');
    const oowblogList = document.getElementById('oowblog-list');
    const clicked = 0;

    oowblogPosts.forEach(post => post.style.display = 'none');

    oowblogPosts.forEach(post => {

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${post.id}`;
        
        link.textContent = post.id;
        
        link.addEventListener('click', function (e) {
            e.preventDefault();
            oowblogPosts.forEach(p => p.style.display = 'none');
            document.getElementById(post.id).style.display = 'block';
            clicked = 1;
        });
        
        listItem.appendChild(link);        
        oowblogList.appendChild(listItem);
    });
    
    if (clicked==0) {
        const latestPost = oowblogPosts[0];
        latestPost.style.display = 'block';
    } else {
        const currentPost = document.getElementById(window.location.hash.substring(1));
        if (currentPost) {
            currentPost.style.display = 'block';
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const workButton = document.getElementById("work-button");
    const travelButton = document.getElementById("travel-button");
    const workContent = document.getElementById("work-content");
    const travelContent = document.getElementById("travel-content");

    workButton.addEventListener("click", function () {
        workContent.classList.remove("hide");
        travelContent.classList.add("hide");
    });

    travelButton.addEventListener("click", function () {
        travelContent.classList.remove("hide");
        workContent.classList.add("hide");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const byButton = document.getElementById("by-button");
    const oowButton = document.getElementById("oow-button");
    const byContent = document.getElementById("by-content");
    const oowContent = document.getElementById("oow-content");

    byButton.addEventListener("click", function () {
        byContent.classList.remove("hide");
        oowContent.classList.add("hide");
    });

    oowButton.addEventListener("click", function () {
        oowContent.classList.remove("hide");
        byContent.classList.add("hide");
    });
});
