const request = require('request')

const getInfor = (callback) => {
    const url = "https://www.hpb.health.gov.lk/api/get-current-statistical"

    request({url: url}, (error,res) => {
        const body = JSON.parse(res.body)
        if(error){
            callback(error)
        }else{
            callback({
                "new_cases": body.data.local_new_cases,
                "local_total_cases": body.data.local_total_cases,
                "local_total_number_of_individuals_in_hospitals": body.data.local_total_number_of_individuals_in_hospitals,
                "local_deaths": body.data.local_deaths,
                "local_new_deaths": body.data.local_new_deaths,
                "local_recovered": body.data.local_recovered,
                "local_active_cases": body.data.local_active_cases,
                "global_new_cases": body.data.global_new_cases,
                "global_total_cases": body.data.global_total_cases,
                "global_deaths": body.data.global_deaths,
                "global_new_deaths": body.data.global_new_deaths,
                "global_recovered": body.data.global_recovered
            })
        }
    })
}


module.exports = getInfor