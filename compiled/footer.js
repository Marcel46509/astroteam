const yearElement = document.getElementById("year");
export default function init() {
    if (!yearElement) {
        return;
    }
    ;
    yearElement.textContent = new Date().getFullYear().toString();
}
;
//# sourceMappingURL=footer.js.map