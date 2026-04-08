// a script to control scrolling announcements at the top of the page

var announcements = [
    "Unification Church looking for members", 
    "I love the unification church",
    "UNIFICATION!!!!"
];

function SetAnnouncements() {
    const randomInt = Math.floor(Math.random * announcements.length);
    document.getElementById("announcements").innerHTML = announcements[randomInt];
}

SetAnnouncements();