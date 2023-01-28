var utilDisplay = {
    display: () => {
        document.getElementById("display").classList.remove("show");
        document.getElementById("display").classList.add("hide");

        document.getElementById("hide").classList.remove("hide");
        document.getElementById("hide").classList.add("show");

        document.getElementById("iframe").classList.remove("hide");
        document.getElementById("iframe").classList.add("show");
    }
}

var utilHide = {
    hide: () => {
        document.getElementById("hide").classList.remove("show");
        document.getElementById("hide").classList.add("hide");

        document.getElementById("display").classList.remove("hide");
        document.getElementById("display").classList.add("show");

        document.getElementById("iframe").classList.remove("show");
        document.getElementById("iframe").classList.add("hide");
    }
}