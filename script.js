const description = document.querySelector("#jw")
const descriptionMezcal = document.querySelector("#mezcal")
const descriptionMarioBross = document.querySelector("#mariobross")
const descriptionEasyShoopping = document.querySelector("#easyshoopping")
const descriptionWeCare = document.querySelector("#we-care")
const descriptionWideCoverage = document.querySelector("#wide-coverage")
const masck = document.querySelector(".mascara-description")


function showDescriptionjw(){
    description.style.left ="50%"
    description.style.top ="20%"
    description.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"

}

function showDescriptionMezcal(){
    descriptionMezcal.style.left ="50%"
    descriptionMezcal.style.top ="20%"
    descriptionMezcal.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"

}

function showDescriptionMarioBross(){
    descriptionMarioBross.style.left ="50%"
    descriptionMarioBross.style.top ="20%"
    descriptionMarioBross.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"
}

function showDescriptionEasyShoopping(){
    descriptionEasyShoopping.style.left ="50%"
    descriptionEasyShoopping.style.top ="20%"
    descriptionEasyShoopping.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"
}

function showDescriptionWeCare(){
    descriptionWeCare.style.left ="50%"
    descriptionWeCare.style.top ="20%"
    descriptionWeCare.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"
}

function showDescriptionWideCoverage(){
    descriptionWideCoverage.style.left ="50%"
    descriptionWideCoverage.style.top ="20%"
    descriptionWideCoverage.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"
}



function hideMasck(){
    description.style.left = "-100%"
    descriptionMezcal.style.left = "-100%"
    descriptionMarioBross.style.left = "-100%"
    descriptionEasyShoopping.style.left = "-100%"
    descriptionWeCare.style.left = "-100%"
    descriptionWideCoverage.style.left = "-100%"
    masck.style.visibility = "hidden"
}