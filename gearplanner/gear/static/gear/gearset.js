document.addEventListener('DOMContentLoaded', () => {
    let jobChoice = document.getElementById("job");

    jobChoice.addEventListener('change', () => {
        if (jobChoice.value > 0) {
            document.getElementById("gearset").style.visibility = "visible";
            document.getElementById("weapon").style.visibility = "visible";
            document.getElementById("shield").style.visibility = "visible";
            document.getElementById("head").style.visibility = "visible";
            document.getElementById("body").style.visibility = "visible";
            document.getElementById("legs").style.visibility = "visible";
            document.getElementById("hands").style.visibility = "visible";
            document.getElementById("feet").style.visibility = "visible";
            document.getElementById("earrings").style.visibility = "visible";
            document.getElementById("necklace").style.visibility = "visible";
            document.getElementById("bracelet").style.visibility = "visible";
            document.getElementById("left_ring").style.visibility = "visible";
            document.getElementById("right_ring").style.visibility = "visible";
        } else {
            document.getElementById("gearset").style.visibility = "hidden";
            document.getElementById("weapon").style.visibility = "hidden";
            document.getElementById("shield").style.visibility = "hidden";
            document.getElementById("head").style.visibility = "hidden";
            document.getElementById("body").style.visibility = "hidden";
            document.getElementById("legs").style.visibility = "hidden";
            document.getElementById("hands").style.visibility = "hidden";
            document.getElementById("feet").style.visibility = "hidden";
            document.getElementById("earrings").style.visibility = "hidden";
            document.getElementById("necklace").style.visibility = "hidden";
            document.getElementById("bracelet").style.visibility = "hidden";
            document.getElementById("left_ring").style.visibility = "hidden";
            document.getElementById("right_ring").style.visibility = "hidden";
        }
    })

})