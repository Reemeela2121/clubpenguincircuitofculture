const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

function GoBack() {
    window.location.href="index.html";
}

function Timeline() {
    window.location.href="timeline.html";
}

function Production() {
    window.location.href="production.html";
}

function Consumption() {
    window.location.href="consumption.html";
}

function Regulation() {
    window.location.href="regulation.html";
}

function Identity() {
    window.location.href="identity.html";
}

function Representation() {
    window.location.href="representation.html";
}

function Bibliography() {
    window.location.href="bibliography.html";
}