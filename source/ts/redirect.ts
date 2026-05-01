const redirect : HTMLElement | null = document.getElementById("redirect");

const routes = {
    ["download"] : "https://gitlab.com/Marcel664/Asteroid-X-3/-/raw/main/Asteroid_Bootstrapper.exe",
    ["discord"] : "https://discord.gg/dy5MfKxmAM"
};

type RouteKey = keyof typeof routes;

export default function init() {
    if (!redirect) {
        return;
    };

    const params = new URLSearchParams(window.location.search);
    const target = params.get("to");

    if (target && target in routes) {
        const key : RouteKey = target as RouteKey;

        document.body.innerHTML = `<p>If you are not redirected, <a href="${routes[key]}">click here</a>.</p>`;

        window.location.href = routes[key];
    } else {
        document.body.innerHTML = `<p>Invalid redirect url, <a href="./">click here to go back</a>.</p>`;
    };
};