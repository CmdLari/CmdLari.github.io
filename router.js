document.addEventListener("DOMContentLoaded", function () {
    // Main Sub Pages
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

    // Hide all blog sections by default
    document.querySelectorAll('#by-content, #oow-content, #orpheus-content').forEach(content => {
        content.classList.add('hide');
    });
});


// Load Blogs for Banishing You
document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.querySelectorAll('.blog');
    const blogList = document.getElementById('blog-list');
    let clicked = 0;

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
    
    if (clicked === 0) {
        const latestPost = blogPosts[0];
        if (latestPost) {
            latestPost.style.display = 'block';
        }
    } else {
        const currentPost = document.getElementById(window.location.hash.substring(1));
        if (currentPost) {
            currentPost.style.display = 'block';
        }
    }
});


// Load Blogs for OOW
document.addEventListener("DOMContentLoaded", function () {
    const oowblogPosts = document.querySelectorAll('.oowblog');
    const oowblogList = document.getElementById('oowblog-list');
    let clicked = 0;

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
    
    if (clicked === 0) {
        const latestPost = oowblogPosts[0];
        if (latestPost) {
            latestPost.style.display = 'block';
        }
    } else {
        const currentPost = document.getElementById(window.location.hash.substring(1));
        if (currentPost) {
            currentPost.style.display = 'block';
        }
    }
});


// Load Blogs for Orpheus
document.addEventListener("DOMContentLoaded", function () {
    const orpheusblogPosts = document.querySelectorAll('.orpheusblog');
    const orpheusblogList = document.getElementById('orpheusblog-list');
    let clicked = 0;

    orpheusblogPosts.forEach(post => post.style.display = 'none');

    orpheusblogPosts.forEach(post => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${post.id}`;
        link.textContent = post.id;
        
        link.addEventListener('click', function (e) {
            e.preventDefault();
            orpheusblogPosts.forEach(p => p.style.display = 'none');
            document.getElementById(post.id).style.display = 'block';
            clicked = 1;
        });
        
        listItem.appendChild(link);
        orpheusblogList.appendChild(listItem);
    });
    
    if (clicked === 0) {
        const latestPost = orpheusblogPosts[0];
        if (latestPost) {
            latestPost.style.display = 'block';
        }
    } else {
        const currentPost = document.getElementById(window.location.hash.substring(1));
        if (currentPost) {
            currentPost.style.display = 'block';
        }
    }
});


// Choose Blog
document.addEventListener("DOMContentLoaded", function () {
    const byButton = document.getElementById("by-button");
    const oowButton = document.getElementById("oow-button");
    const orpheusButton = document.getElementById("orpheus-button");
    const byContent = document.getElementById("by-content");
    const oowContent = document.getElementById("oow-content");
    const orpheusContent = document.getElementById("orpheus-content");

    // Hide all content by default
    // byContent.classList.add("hide");
    oowContent.classList.add("hide");
    orpheusContent.classList.add("hide");

    byButton.addEventListener("click", function () {
        byContent.classList.remove("hide");
        oowContent.classList.add("hide");
        orpheusContent.classList.add("hide");
    });

    oowButton.addEventListener("click", function () {
        oowContent.classList.remove("hide");
        orpheusContent.classList.add("hide");
        byContent.classList.add("hide");

        // Trigger OOW blog loading
        const oowblogPosts = document.querySelectorAll('.oowblog');
        if (oowblogPosts.length > 0) {
            oowblogPosts.forEach(post => post.style.display = 'none');
            oowblogPosts[0].style.display = 'block';
        }
    });

    orpheusButton.addEventListener("click", function () {
        oowContent.classList.add("hide");
        byContent.classList.add("hide");
        orpheusContent.classList.remove("hide");

        // Trigger Orpheus blog loading
        const orpheusblogPosts = document.querySelectorAll('.orpheusblog');
        if (orpheusblogPosts.length > 0) {
            orpheusblogPosts.forEach(post => post.style.display = 'none');
            orpheusblogPosts[0].style.display = 'block';
        }
    });
});


// Photography Selector
document.addEventListener("DOMContentLoaded", function () {
    const workButton = document.getElementById("work-button");
    const travelButton = document.getElementById("travel-button");
    const workContent = document.getElementById("work-content");
    const travelContent = document.getElementById("travel-content");

    workContent.classList.add("hide");
    travelContent.classList.add("hide");

    workButton.addEventListener("click", function () {
        workContent.classList.remove("hide");
        travelContent.classList.add("hide");
    });

    travelButton.addEventListener("click", function () {
        travelContent.classList.remove("hide");
        workContent.classList.add("hide");
    });
});
