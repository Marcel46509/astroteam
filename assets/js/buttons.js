const discordLink = "https://discord.gg/dy5MfKxmAM";
const downloadLink = "https://gitlab.com/Marcel664/Asteroid-X-3/-/raw/main/Asteroid_Bootstrapper.exe";

function promptDiscord() {
    window.location.href = discordLink;
}

function promptDownload() {
    window.location.href = downloadLink;
}

const discordButton = document.getElementById("discord");
const downloadButton = document.getElementById("download");

if (discordButton) {
    discordButton.href = discordLink;
}

if (downloadButton) {
    downloadButton.href = downloadLink;
}
