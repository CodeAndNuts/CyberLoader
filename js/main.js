document.addEventListener("DOMContentLoaded", function () {
    const loaderOverlay = document.getElementById("can-loaderOverlay");
    const showLoaderBtn = document.getElementById("can-showLoader");

    showLoaderBtn.addEventListener("click", () => {
        loaderOverlay.classList.add("can-active");
    });

    loaderOverlay.addEventListener("click", () => {
        loaderOverlay.classList.remove("can-active");
    });
});
