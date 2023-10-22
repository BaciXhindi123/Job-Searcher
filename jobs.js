import jobsData from "./Data/Jobs.js";
import JobsData from "./Data/Jobs.js"
let displayJobs = document.querySelector(".display_jobs")

class job{
    constructor(image,heading,companyName,location,short_desciption,skill1,skill2,skill3,salary,schedule,updated,vote,id){
        this.image = image;
        this.heading = heading;
        this.companyName = companyName;
        this.location = location;
        this.short_desciption = short_desciption;
        this.vote = vote;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
        this.salary = salary;
        this.schedule = schedule;
        this.updated = updated;
        this.id = id;
    }
}
function getJobs() {
    let jobs;
    jobs = JobsData;
    return jobs;
}
function addJobToDisplay(job){
    const newJob = document.createElement('div')
    newJob.classList.add('job')
    newJob.innerHTML = `
                    <div class="job_vote">
                        <div class="voting">
                            <div><i class="far fa-caret-square-up upvote" aria-hidden="true"></i></div>
                            <div id="votes">${job.vote}</div>
                            <div><i class="far fa-caret-square-down downvote" aria-hidden="true"></i></div>
                        </div>
                        <div class="open_job_content"><i class="fas fa-angle-down" aria-hidden="true"></i></div>
                    </div>

                    <div class="job_info">

                        <h3 class="job_heading">${job.heading}</h3>
                        <div class="job_attributes">
                            <span class="company_name">${job.companyName}</span>
                            <span class="company_location">${job.location}</span>
                        </div>

                        <p class="short_desctription">${job.short_desciption}</p>

                        <div class="share"><i class="far fa-share-square" aria-hidden="true"></i></div>
                        <div class="options"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                        <div class="options_menu">
                        <span class="delete_note"><i class="fa fa-trash"></i>Delete</span>
                        </div>
                        <span class="date_posted">${job.updated}</span>
                        <span id="skill1" style="display:none">${job.skill1}</span>
                        <span id="skill2" style="display:none">${job.skill2}</span>
                        <span id="skill3" style="display:none">${job.skill3}</span>
                        <span id="job-salary" style="display:none">Paga: ${job.salary}</span>
                        <span id="job-schedule" style="display:none">Orari: ${job.schedule}</span>
                        <span id="job-image" style="display:none">${job.image}</span>
                        <span id="job-id" style="display:none">${job.id}</span>
                    </div>`
                    displayJobs.appendChild(newJob)
}
function showingJobs(){
    const jobs = getJobs()
    jobs.forEach(job => {
        addJobToDisplay(job)
    })
}
function removeJob(id){
    const jobs = getJobs();
    jobs.forEach((note , id) => {
        jobs.splice(id , 1)
    })
}
const body = document.getElementsByTagName("BODY")[0]
const titleInput = document.querySelector(".title")
const locationInput = document.querySelector(".location")
const jobForm = document.querySelector(".job_display_form")
const closeJobForm = document.querySelector(".close_job_form")

closeJobForm.addEventListener("click" , () => {
    jobForm.classList.remove("active_form")
    body.style.pointerEvents = "all";
    body.style.background = "white";
    titleInput.style.background = "white";
    locationInput.style.background = "white";
})
// ===== Job Full Display elements go below here ===== 
const jobDisplayBackground = document.querySelector(".job_image")
const jobDisplayHeading = document.querySelector(".job_form_heading")
const jobDisplayParagraph = document.querySelector(".job_form_p")
const jobDisplaySalary = document.querySelector("#salary")
const jobDisplaySchedule = document.querySelector("#schedule")
const jobDisplaySkill1 = document.querySelector(".display_skill1")
const jobDisplaySkill2 = document.querySelector(".display_skill2")
const jobDisplaySkill3 = document.querySelector(".display_skill3")


        // ===== Job Menu - Delete Job Div =====
let i = 0;
displayJobs.addEventListener("click" , (e) => {
    
    if(e.target.classList.contains("options") || e.target.classList.contains("fa-ellipsis-v")){
    const currentJob = e.target.closest(".job")
    const currentMenu = currentJob.querySelector(".options_menu")
    currentMenu.classList.add("active_menu")
    i++
    if(i % 2 === 0 && (!e.target.classList.contains("fa-ellipsis-v") || !e.target.classList.contains("options"))){
        currentMenu.classList.remove("active_menu")
    }
    }
    if(e.target.classList.contains("delete_note")){
        const currentJob = e.target.closest(".job")
        currentJob.remove()
        const id= currentJob.querySelector("#job-id").textContent
        removeJob(Number(id))
    }
    // =====  Job Vote Menu - Increase or Decrease Votes =====

    if(e.target.classList.contains("upvote")){
        const currentJob = e.target.closest(".job")
        let dataVote = currentJob.querySelector("#votes").innerText
        let vote = Number(dataVote) + 1
        currentJob.querySelector("#votes").innerText = vote;
        currentJob.querySelector(".upvote").style.color = "green";
        currentJob.querySelector(".downvote").style.color = "black";
    }
    if(e.target.classList.contains("downvote")){
        const currentJob = e.target.closest(".job")
        let dataVote = currentJob.querySelector("#votes").innerText
        let vote = Number(dataVote) + -1
        currentJob.querySelector("#votes").innerText = vote;
        currentJob.querySelector(".downvote").style.color = "red";
        currentJob.querySelector(".upvote").style.color = "black";
    }

    // ===== Job Show Form - Showing the job items =====

    if(e.target.classList.contains("job_heading")){
        jobForm.classList.add("active_form")
        body.style.pointerEvents = "none";
        body.style.background = "rgba(0,0,0,0.25)";
        titleInput.style.background = "rgba(0,0,0,0.25)";
        locationInput.style.background = "rgba(0,0,0,0.25)";
        const currentJob = e.target.closest(".job");
        jobDisplayHeading.innerText = currentJob.querySelector(".job_heading").innerText
        jobDisplayParagraph.innerText = currentJob.querySelector(".short_desctription").innerText
        jobDisplaySalary.innerText = currentJob.querySelector("#job-salary").textContent
        jobDisplaySchedule.innerText = currentJob.querySelector("#job-schedule").textContent
        jobDisplaySkill1.innerText = currentJob.querySelector("#skill1").textContent
        jobDisplaySkill2.innerText = currentJob.querySelector("#skill2").textContent
        jobDisplaySkill3.innerText = currentJob.querySelector("#skill3").textContent
        jobDisplayBackground.style.backgroundImage = `url(${currentJob.querySelector("#job-image").textContent})`
    }
})

const postJob = document.getElementById("post-job")
const postJobForm = document.querySelector(".create_job_form")
const closePostJobForm = document.querySelector(".close_create_form")

const createJobTitle = document.getElementById("create-job-title")
const createJobCompany = document.getElementById("create-job-company")
const createJobLocation = document.getElementById("create-job-location")
const createJobDescription = document.getElementById("create-job-description")
const createJobSkill1 = document.getElementById("create-job-skill1")
const createJobSkill2 = document.getElementById("create-job-skill2")
const createJobSkill3 = document.getElementById("create-job-skill3")
const createJobSalary = document.getElementById("create-job-salary")
const createJobSchedule = document.getElementById("create-job-schedule")
const createWarning = document.getElementById("create-warning")
const createJobBtn = document.getElementById("create-job")

postJob.addEventListener("click" , () => {
    postJobForm.classList.add("active_form");
    body.style.pointerEvents = "none";
    body.style.background = "rgba(0,0,0,0.25)";
    titleInput.style.background = "rgba(0,0,0,0.25)";
    locationInput.style.background = "rgba(0,0,0,0.25)";
})
closePostJobForm.addEventListener("click" , () => {
    postJobForm.classList.remove("active_form");
    body.style.pointerEvents = "all";
    body.style.background = "white";
    titleInput.style.background = "white";
    locationInput.style.background = "white";
    createWarning.style.display = "none"
})


createJobBtn.addEventListener("click" , () => {
    if(createJobTitle.value&&createJobCompany.value&&createJobLocation.value&&
    createJobDescription.value&&createJobSkill1.value&&createJobSkill2.value&&createJobSkill3.value
         ){
        jobsData.push({
            heading: createJobTitle.value,
            companyName: createJobCompany.value,
            location: createJobLocation.value,
            short_desciption: createJobDescription.value,
            skill1: createJobSkill1.value,
            skill2: createJobSkill2.value,
            skill3: createJobSkill3.value,
            salary: createJobSalary.value,
            schedule: createJobSchedule.value,
            updated: "Updated 01.01.2000",
            vote: 0,
            image: "building_engineer.jpg",
            id : Math.random()
        })
        postJobForm.classList.remove("active_form");
        body.style.pointerEvents = "all";
        body.style.background = "white";
        titleInput.style.background = "white";
        locationInput.style.background = "white";
        createWarning.style.display = "none"
        // Empty the Inputs
        createJobTitle.value = '';
        createJobCompany.value = '';
        createJobLocation.value = '';
        createJobDescription.value = '';
        createJobSkill1.value = '';
        createJobSkill2.value = '';
        createJobSkill3.value = '';
        createJobSalary.value = '';
        createJobSchedule.value = '';

        displayJobs.innerHTML= "";
        showingJobs()
        } else {
            createWarning.style.display = "inline"
        }
        console.log(jobsData)
})

const apply = document.getElementById("apply-for-job") 
const applyButton = document.getElementById("apply-button")
const applyForm = document.querySelector(".apply_form")



apply.addEventListener("click" , () => {
    jobForm.classList.remove("active_form")
    applyForm.classList.add("active_form")
})

applyButton.addEventListener("click" , () => {
    applyForm.classList.remove("active_form")
    body.style.pointerEvents = "all";
    body.style.background = "white";
    titleInput.style.background = "white";
    locationInput.style.background = "white";
    createWarning.style.display = "none"
})




showingJobs()

console.log("Jobs JavaScript Working!")