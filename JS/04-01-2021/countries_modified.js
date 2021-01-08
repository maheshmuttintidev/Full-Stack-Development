function getStatesList() {
        var country = document.getElementById("country").value,
        states = document.getElementById("states")

        const indiaStates = ["Andhra Pradesh","Arunachal Pradesh","Assam","Chhattisgarh","Goa","Tamil Nadu","Telangana"],
                spainStates = ["Álava","Albacete","Alicante","Asturias","Ávila","Badajoz"],
                qatarStates = ["Ad Dawḩah","Al Khawr","Al Jumaliyah","Ar Rayyān","Madinat ach Shamal","Umm Sa'id"],
                egyptStates = ["Muhafazat Suhaj","Muhafazat Shamal Sina","Muhafazat Qina","Kafr ash Shaykh","South Sinai Governorate","Muhafazat Matruh"],
                australiaStates = ["New South Wales","Victoria","Queensland","Western Australia","South Australia","Tasmania"]
        switch(country) {
                case "India":
                        for(let state of indiaStates) {
                                states.innerHTML += `

                                        <option value="${state}">${state}</option>
                                `
                        }
                        break
                case "Spain":
                        for(let state of spainStates) {
                                states.innerHTML += `
                                        <option value="${state}">${state}</option>
                                `
                        }
                        break
                case "Qatar":
                        for(let state of qatarStates) {
                                states.innerHTML += `
                                        <option value="${state}">${state}</option>
                                `
                        }
                        break
                case "Egypt":
                        for(let state of egyptStates) {
                                states.innerHTML += `
                                        <option value="${state}">${state}</option>
                                `
                        }
                        break
                case "Australia":
                        for(let state of australiaStates) {
                                states.innerHTML += `
                                        <option value="${state}">${state}</option>
                                `
                        }
                        break
                default:
                        states.innerHTML = `<option value='Select State'>Select State</option>`

        }
}

