console.log("hello")
const td1 = document.querySelector('#newLocal')
const td2 = document.querySelector('#totalLocal')
const td3 = document.querySelector('#localHos')
const td4 = document.querySelector('#totalLocalDeaths')
const td5 = document.querySelector('#newLocalDeaths')
const td6 = document.querySelector('#localRec')
const td7 = document.querySelector('#localActive')
const td8 = document.querySelector('#globalNew')
const td9 = document.querySelector('#globalTotal')
const td10 = document.querySelector('#globalDeath')
const td11 = document.querySelector('#globalNewDeath')
const td12 = document.querySelector('#globalRecover')
const para = document.querySelector('#msg1')

window.addEventListener('load',(e) => {
    e.preventDefault()
    fetch(`/srilanka`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                td1.textContent = data.error
            }else{
                td1.textContent = data.new_cases
                td2.textContent = data.local_total_cases
                td3.textContent = data.local_total_number_of_individuals_in_hospitals
                td4.textContent = data.local_deaths
                td5.textContent = data.local_new_deaths
                td6.textContent = data.local_recovered
                td7.textContent = data.local_active_cases
                td8.textContent = data.global_new_cases
                td9.textContent = data.global_total_cases
                td10.textContent = data.global_deaths
                td11.textContent = data.global_new_deaths
                td12.textContent = data.global_recovered
            } 
        })
    })    
})
