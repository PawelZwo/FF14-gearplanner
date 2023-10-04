document.addEventListener('DOMContentLoaded', () => {
    let jobChoice = document.getElementById("job");
    document.getElementById("button_to_submit").style.visibility = "hidden";

    jobChoice.addEventListener('change', () => {
        if (jobChoice.value != 0 && jobChoice.value != 1) {
            document.getElementById("gearset").style.visibility = "visible";
            document.getElementById("shield").style.visibility = "hidden";
            document.getElementById("button_to_submit").style.visibility = "visible";
        } else if (jobChoice.value == 1) {
            document.getElementById("gearset").style.visibility = "visible";
            document.getElementById("shield").style.visibility = "visible";
            document.getElementById("button_to_submit").style.visibility = "visible";
        } else {
            document.getElementById("gearset").style.visibility = "hidden";
            document.getElementById("shield").style.visibility = "hidden";
            document.getElementById("button_to_submit").style.visibility = "hidden";
        }
    })

})