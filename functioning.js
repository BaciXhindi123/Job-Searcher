const filterBtn = document.querySelector(".filter")
const filterIcon = document.querySelector("#filter_icon")

document.addEventListener("click" , (e) => {
    suggestedLocation.style.display = "none"
    suggestedTitle.style.display = "none"
    suggestedTitle.innerHTML = ""
})


let filterOpen = false;
filterBtn.addEventListener("click" , ()=> {
    if(filterOpen === false) {
    filterIcon.classList.add("active_filter")
    filterOpen = true
    } else {
    filterIcon.classList.remove("active_filter")
    filterOpen = false
    }
})

const login = document.getElementById("login")
const loginForm = document.querySelector(".login_form")
const closeForm = document.querySelector(".close_form")
const body = document.getElementsByTagName("BODY")[0]
const titleInput = document.querySelector(".title")
const locationInput = document.querySelector(".location")
const warning = document.querySelector(".form_warning")

function openLoginForm() {
    loginForm.classList.add("active_form")
    body.style.pointerEvents = "none";
    body.style.background = "rgba(0,0,0,0.25)";
    titleInput.style.background = "rgba(0,0,0,0.25)";
    locationInput.style.background = "rgba(0,0,0,0.25)";
}
function closeLoginForm() {
    loginForm.classList.remove("active_form")
    body.style.pointerEvents = "all";
    body.style.background = "white";
    titleInput.style.background = "white";
    locationInput.style.background = "white";
}

login.addEventListener("click" , () => {
    openLoginForm()
    warning.style.display = "none";
    const forgotPass = document.getElementById("forgot-pass")
    forgotPass.addEventListener("click" , () => {warning.style.display = "inline";})
})
closeForm.addEventListener("click" , () => {
    closeLoginForm()
})

const loginBtn = document.getElementById("loginBtn");
const username = document.getElementById("username");
let userLogged = false

loginBtn.addEventListener("click" || "keypress" , function (e)  {
    if(e.key = "Enter") {
    const usernameInput = document.getElementById("username-input")
    const passwordInput = document.getElementById("password-input")
    if(usernameInput.value.toUpperCase() == "ADMIN" && passwordInput.value.toUpperCase() == "PASSWORD") {
        userLogged = true;
        username.textContent = usernameInput.value.toUpperCase()
        username.style.display = "inline"
        usernameInput.value = ""
        passwordInput.value = ""
        closeLoginForm()
    } else {
        passwordInput.value = ""
        warning.style.display = "inline";
        console.log("Wrong!")
    }
}
})


// =====   CREATE JOB FORM GOES HERE!! =====




/* Making the Search Bar Functional BELOW */
const suggestedTitle = document.querySelector(".suggested_title")
const suggestedLocation = document.querySelector(".suggested_location")

const searchBtn = document.getElementById("search-btn")
searchBtn.addEventListener("click" , () => {
    titleInput.value = "" 
    locationInput.value = ""})

suggestedTitle.style.display = "none"
suggestedLocation.style.display = "none"
let suggestedJobs = ["Kamarier" , "Guzhinier" , "Pianist" , "Shites" , "Inxhinier Ndertimi" , "Menaxher Lokali" , "Ekonomist" , "Kontabilier" , "Inxhinier Nafte" , "Mesues Kurs Privat"]
let suggestedLocations = ["Fier , Albania" , "Durres , Albania" , "Elbasan , Albania" , "Tirane , Albania" , "Korçe , Albania" , "Shkoder , Albania" , "Vlore , Albania" , "Sarande , Albania"]

titleInput.addEventListener("input" , () => {
    let jobInputValue = titleInput.value.length
    if(jobInputValue == 0) {
        suggestedTitle.style.display = "none"
    }
    if(jobInputValue == 1){
    suggestedTitle.innerHTML = ""
    
    suggestedTitle.style.display = "block";
    let jobValue = titleInput.value.toUpperCase()
    let storedJobSuggestion = [];
    for(let i = 0 ; i < suggestedJobs.length ; i++){
        let j = 0;
        for(j = 0 ; j < suggestedJobs[i].length ; j++){
        if(jobValue == suggestedJobs[i][j].toUpperCase()){
            if(storedJobSuggestion[i] !== suggestedJobs[i]){
        storedJobSuggestion.push(suggestedJobs[i])
            }
        console.log(storedJobSuggestion)
        }
    }  
}
storedJobSuggestion.forEach(suggest => {
    displayJobSuggestions(suggest)
})
    }
function displayJobSuggestions(suggestName) {
    const newJobSuggest = document.createElement("div");
    newJobSuggest.innerHTML = `
    <i class="fas fa-business-time"></i>${suggestName}`
    suggestedTitle.appendChild(newJobSuggest)
}   
})
suggestedTitle.addEventListener("click" , (e) =>{
    titleInput.value = e.target.innerText
})



locationInput.addEventListener("input" , () => {
    let locationInputValue = locationInput.value.length
    if(locationInputValue == 0) {
        suggestedLocation.style.display = "none"
    }
    if(locationInputValue == 1){
    suggestedLocation.innerHTML = ""
    }
    if(locationInputValue == 1){
        suggestedLocation.innerHTML = ""
        
        suggestedLocation.style.display = "block";
        let locationValue = locationInput.value.toUpperCase()
        let storedLocationSuggestion = [];
        for(let i = 0 ; i < suggestedLocations.length ; i++){
            let j = 0;
            for(j = 0 ; j < suggestedLocations[i].length ; j++){
            if(locationValue == suggestedLocations[i][j].toUpperCase()){
                if(storedLocationSuggestion[i] !== suggestedLocations[i]){
            storedLocationSuggestion.push(suggestedLocations[i])
                }
            console.log(storedLocationSuggestion)
            }
        }  
    }
    storedLocationSuggestion.forEach(suggest => {
        displayLocationSuggestions(suggest)
    })
}
function displayLocationSuggestions(suggestName) {
    const newLocationSuggest = document.createElement("div");
    newLocationSuggest.innerHTML = `<i class="fas fa-map-marker-alt"></i>${suggestName}`
    suggestedLocation.appendChild(newLocationSuggest)
}   
})
suggestedLocation.addEventListener("click" , (e) =>{
    locationInput.value = e.target.innerText
})




console.log("Functioning JavaScript Working!")