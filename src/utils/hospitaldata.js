const request = require('request')

// const test = (callback) => {
//     const url = "https://www.hpb.health.gov.lk/api/get-current-statistical"

//     request({url: url}, (error,res) => {
//         const body = JSON.parse(res.body)
//         if(error){
//             callback(error)
//         }else{
//             const arry = body.data.hospital_data
//             arry.forEach(element => {
//                 const x = element.hospital.name
//                 callback({"hospital": x})
//             })    
//         }
//     })
// }

const findhospital = (userHospitalName,callback) => {
    const url = "https://www.hpb.health.gov.lk/api/get-current-statistical"

    request({url: url}, (error,res) => {
        const body = JSON.parse(res.body)
        if(error){
            callback(error)
        }else{
            const arry = body.data.hospital_data
            arry.forEach(element => {
                const hospital = element.hospital.name
                if(userHospitalName === hospital){
                    const host_data = body.data.hospital_data[element.hospital.id - 1]
                    callback({
                        "name": element.hospital.name,
                        "name_sin": element.hospital.name_si,
                        "name_ta": element.hospital.name_ta,
                        "created_at" : element.hospital.created_at,
                        "updated_at" : element.hospital.updated_at,
                        "hos_local_com": host_data.cumulative_local,
                        "hos_for_com" :host_data.cumulative_foreign,
                        "total_com" : host_data.cumulative_total,
                        "hos_local_treat":host_data.treatment_local,
                        "hos_for_treat": host_data.treatment_foreign,
                        "total_treat": host_data.treatment_total
                    })
                }
            })
        }
    })
}

// test1("National Institute of Infectious Diseases", (data) => {
//     console.log(`Hospital name  is ${data.name_sin} number of locals are ${data.hos_local} and forgins are ${data.hos_for}.`)
// })



module.exports = findhospital

