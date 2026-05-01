import loadFile from "./components/loadFile.js";
import test from "./test.js";
import footer from "./footer.js";
import redirect from "./redirect.js";
document.addEventListener("DOMContentLoaded", () => {
    loadFile("nav.html", "nav");
    loadFile("footer.html", "footer");
});
test();
footer();
redirect();
//# sourceMappingURL=app.js.map