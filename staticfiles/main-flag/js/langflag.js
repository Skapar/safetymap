let flags = ['en', 'kz', 'ru'];
let currentIndex = 0;
let staticUrl = "SafetyMap/static/main-flag/flags-gif/";

function switchFlag(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = flags.length - 1;
    if (currentIndex >= flags.length) currentIndex = 0;
    document.getElementById("flag").src = staticUrl + "/" flags[currentIndex] + ".gif";
}

function redirectToPage() {
    switch (flags[currentIndex]) {
        case 'en':
            window.location.href = redirectedUrl;
            break;
        case 'kz':
            window.location.href = kzPageUrl;
            break;
        case 'ru':
            window.location.href = ruPageUrl;
            break;
    }
}
