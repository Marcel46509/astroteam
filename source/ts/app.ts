import loadFile from "./components/loadFile.js";
import test from "./test.js";

document.addEventListener("DOMContentLoaded", () => {
    loadFile("nav.html", "nav");
    loadFile("footer.html", "footer");
});

test();