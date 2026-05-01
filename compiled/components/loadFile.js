export default function (fileName, elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        return;
    }
    ;
    fetch(fileName)
        .then(response => response.text())
        .then(result => {
        element.innerHTML = result;
    });
}
;
//# sourceMappingURL=loadFile.js.map