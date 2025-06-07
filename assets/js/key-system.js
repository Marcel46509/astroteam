function copyToClipboard(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (!input || !icon) return;

    navigator.clipboard.writeText(input.value).then(() => {
        icon.src = "../assets/images/checksmoll64.png";
        icon.title = "Copied!";

        setTimeout(() => {
            icon.src = "../assets/images/clipboard64.png";
            icon.title = "Copy";
        }, 300);
    }).catch(() => {
        // Fallback or error handling
        alert('Failed to copy to clipboard');
    });
}