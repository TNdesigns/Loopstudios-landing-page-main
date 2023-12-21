document.addEventListener("DOMContentLoaded", function() {
    const menubtn = document.getElementById("mbl-menu");
    const menulist = document.getElementById("mbl-menulist");

    menubtn.addEventListener("click", function() {
        if (menulist.style.display === "none"){
            menulist.style.display = "flex";
        } else {
            menulist.style.display = "none";
        }
    })
})