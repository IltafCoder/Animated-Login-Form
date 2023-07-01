
function iconColor(element) {

    if (element == "user") {
        let x = document.getElementById("user-icon")
        x.style.color = "aqua"
        x.style.marginLeft = "210px"
        x.style.transition = "0.1s linear"
    }
    else {
        let x = document.getElementById("pass-icon")
        x.style.color = "aqua"
        x.style.marginLeft = "210px"
        x.style.transition = "0.1s linear"
    }
}


function iconColorReset(element) {

    if (element == "user") {
        let x = document.getElementById("user-icon")
        x.style.color = "black"
        x.style.marginLeft = "200px"
        x.style.transition = "0.1s linear"

    }
    else {
        let x = document.getElementById("pass-icon")
        x.style.color = "black"
        x.style.marginLeft = "200px"
        x.style.transition = "0.1s linear"
    }
}