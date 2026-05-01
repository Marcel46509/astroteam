export default function (fileName : string, elementId : string) {
    const element : HTMLElement | null = document.getElementById(elementId);

    if (!element) {
        return;
    };

    fetch(fileName)
        .then(response => response.text())
        .then(result => {
            element.innerHTML = result;
        })
};