const type = document.getElementById("type");
const answers = document.querySelector(".answers") 
const add_btn = document.getElementById("add_btn")

function change() {
    if (type.value == "multiple") {
        answers.innerHTML = ""
        answers.innerHTML += "<div class=\"label\"> Answers: </div>";
        answers.innerHTML += "<div class=\"add\"> <button id=\"add_pa\" onclick=\"add_possible()\"> Add possible answer </button> <button id=\"add_ca\" onclick=\"add_correct()\"> Add correct answer </button> </div>"
        answers.innerHTML += "<div class=\"p_answer\"> <div> <label> Possible answer: </label> <input type=\"text\"> </div> </div>";
        answers.innerHTML += "<div class=\"c_answer\"> <div> <label> Correct answer: </label> <input type=\"text\"> </div> </div>";
    }
    else if (type.value == "short") {
        answers.innerHTML = ""
    }
    else if (type.value == "matching") {
        answers.innerHTML = ""
        answers.innerHTML += "<div class=\"label\"> Answers: </div>"
        answers.innerHTML += "<div class=\"add\"> <button id=\"add_btn\" onclick=\"add_q()\"> Add answer </button> </div>"
        for (let i = 0; i < 2; i++) {
            answers.innerHTML += "<div class=\"answer\"> <input id=\"left\" type=\"text\" placeholder=\"Matching left side\"> - <input id=\"right\" type=\"text\" placeholder=\"Matching right side\"> </div>"
        }
    }
}

function add_q() {
    answers.innerHTML += "<div class=\"answer\"> <input id=\"left\" type=\"text\" placeholder=\"Matching left side\"> - <input id=\"right\" type=\"text\" placeholder=\"Matching right side\"> <button id=\"remove_btn\" onclick=\"remove_q()\"> - </button> </div>"
}

function remove_q() {
    const remove_btn = document.getElementById("remove_btn")
    answers.removeChild(remove_btn.parentNode)
}

function add_possible() {
    let possible = document.querySelector(".p_answer")
    let correct = document.querySelector(".c_answer")
    let p_count = possible.querySelectorAll("div").length
    let c_count = correct.querySelectorAll("div").length
    if (p_count + c_count >= 10) {
        console.log("Max")
    }
    else {
        possible.innerHTML += "<div> <label> Possible answer: </label> <input type=\"text\"> <button id=\"remove_possible\" onclick=\"r_possible()\"> - </button> </div>"
    }
    
}

function add_correct() {
    let possible = document.querySelector(".p_answer")
    let correct = document.querySelector(".c_answer")
    let p_count = possible.querySelectorAll("div").length
    let c_count = correct.querySelectorAll("div").length
    if (p_count + c_count >= 10) {
        console.log("Max")
    }
    else {
    correct.innerHTML += "<div> <label> Correct answer: </label> <input type=\"text\"> <button id=\"remove_correct\" onclick=\"r_correct()\"> - </button> </div>"
    }
}

function r_possible() {
    let remove_pa_btn = document.getElementById("remove_possible")
    let possible = document.querySelector(".p_answer")
    possible.removeChild(remove_pa_btn.parentNode)
}

function r_correct() {
    let remove_ca_btn = document.getElementById("remove_correct")
    let correct = document.querySelector(".c_answer")
    correct.removeChild(remove_ca_btn.parentNode)
}

type.addEventListener("change", change)
