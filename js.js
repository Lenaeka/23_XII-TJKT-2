function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("show");

}


// FORM CONTACT

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const type =
        document.getElementById("type").value;

    alert(
        "Terima kasih, " +
        name +
        "!\n\nPesan " +
        type +
        " berhasil diterima."
    );

    event.target.reset();

}