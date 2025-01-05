const images = ["image1.jpg", "image2.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slideshow").src = images[currentIndex];
}
setInterval(changeImage, 2500);

const readmore1 = document.getElementById("readmore1");
readmore1.addEventListener('click', () => {
    let extended = document.getElementById("extendhome-p1");
    if (readmore1.innerHTML == "Read More") {
        extended.style.display = "block";
        readmore1.innerHTML = "Close";
    } else {
        extended.style.display = "none";
        readmore1.innerHTML = "Read More";
    }
})

const readmore2 = document.getElementById("readmore2");
readmore2.addEventListener('click', () => {
    let extended = document.getElementById("extendabout-p1");
    if (readmore2.innerHTML == "Read More") {
        extended.style.display = "block";
        readmore2.innerHTML = "Close";
    } else {
        extended.style.display = "none";
        readmore2.innerHTML = "Read More";
    }
})

const readmore3 = document.getElementById("readmore3");
readmore3.addEventListener('click', () => {
    let extended = document.getElementById("education-p1");
    if (readmore3.innerHTML == "Read More") {
        extended.style.display = "block";
        readmore3.innerHTML = "Close";
    } else {
        extended.style.display = "none";
        readmore3.innerHTML = "Read More";
    }
})

readmore4.addEventListener('click', () => {
    let extended = document.getElementById("extendexperience-p1");
    if (readmore4.innerHTML == "Read More") {
        extended.style.display = "block";
        readmore4.innerHTML = "Close";
    } else {
        extended.style.display = "none";
        readmore4.innerHTML = "Read More";
    }
});

const hireMe = document.getElementById("hire-me");
const letsTalk = document.getElementById("lets-talk");
const home = document.getElementById("home");
hireMe.addEventListener('click', () => {
    alert("page will open soon!")
});
letsTalk.addEventListener('click', () => {
    window.alert("page will open soon!");
});

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    const navlinks = document.getElementById('nav-links');
    navlinks.classList.toggle('active');
    event.stopPropagation();

});
document.addEventListener('click', function(event) {
    const navlinks = document.getElementById('nav-links');
    const menuButton = document.getElementById('menu-button');
    const isClickInside = navlinks.contains(event.target) || menuButton.contains(event.target);

    if (!isClickInside) {
        navlinks.classList.remove('active');
    }

});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Failed to send email: ' + response.statusText);
                }
            });
        }
    }).catch(error => {
        alert('Failed to send email: ' + error.message);
    });
});