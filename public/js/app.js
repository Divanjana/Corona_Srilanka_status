console.log("Hello world");

const conronaForm = document.querySelector('form')
const table = document.querySelector('table')
const search = document.querySelector('#s1')
const para = document.querySelector('#msg1')
const td1 = document.querySelector('#hosname')
const td2 = document.querySelector('#loc_com')
const td3 = document.querySelector('#for_com')
const td4 = document.querySelector('#total_com')
const td5 = document.querySelector('#loc_treat')
const td6 = document.querySelector('#for_treat')
const td7 = document.querySelector('#total_treat')


conronaForm.addEventListener('submit' , (e) => {
    e.preventDefault()
    fetch(`/hosname?address=${search.value}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                para.textContent = data.error
            }else{
                table.hidden = false
                // para.textContent = `Hospital name  is ${data.name_sin} number of locals are ${data.hos_local} and forgins are ${data.hos_for}.`
                td1.textContent = data.name
                td2.textContent = data.hos_local_com
                td3.textContent = data.hos_for_com
                td4.textContent = data.total_com
                td5.textContent = data.hos_local_treat
                td6.textContent = data.hos_for_treat
                td7.textContent = data.total_treat
                para.textContent = data.name +' / '+ data.name_sin +' / '+ data.name_ta
            }
        })
    })
})