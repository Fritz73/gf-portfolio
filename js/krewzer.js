let mockup = document.querySelector("section.preview > .ui-design iframe");
let notification = document.querySelector("section.preview > .ui-design div.notification");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mockup.style.display = "none";
    notification.style.display = "flex";
}