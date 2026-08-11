function openProject() {
    document.getElementById("projectModal").style.display = "block";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}

function showCert(src) {
    document.getElementById("certModal").style.display = "block";
    document.getElementById("certImage").src = src;
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}