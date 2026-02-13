document.getElementById("vacation-form").onsubmit = () => {

    clearErrors();

    let isValid = true;

    let destination = document.getElementById("destination");
    let trav = document.getElementById("travelers").value.trim();

    //Check for destination
    if(destination.value == "none"){
        document.getElementById("err-destination").style.display = "block";

        isValid = false;
    }

    //Check travelers
    if(!trav || trav <= 0){
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }

    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}