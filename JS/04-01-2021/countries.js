function getStatesList() {
        var country = document.getElementById("country").value,
        states = document.getElementById("states")

        

        switch(country) {
                case "India":
                        states.innerHTML = `

                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value=" Goa">   Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value=" Haryana">       Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value=" Jharkhand">     Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value=" Kerala">        Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value=" Manipur">       Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value=" Mizoram">       Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value=" Odisha">        Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                        `
                        break
                case "Spain":
                        states.innerHTML = `

                                <option value="Álava">Álava</option>
                                <option value="Albacete">Albacete</option>
                                <option value="Alicante">Alicante</option>
                                <option value="Almería">Almería</option>
                                <option value="Asturias">Asturias</option>
                                <option value="Ávila">Ávila</option>
                                <option value="Badajoz">Badajoz</option>
                                <option value="Balearic Islands">Balearic Islands</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Biscay">Biscay</option>
                                <option value="Burgos">Burgos</option>
                                <option value="Cáceres">Cáceres</option>
                                <option value="Cádiz">Cádiz</option>
                                <option value="Cantabria">Cantabria</option>
                                <option value="Castellón"> Castellón</option>
                                <option value="Ciudad Real">Ciudad Real</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Corunna">Corunna</option>
                                <option value="Cuenca">Cuenca</option>
                                <option value="Gipuzkoa">Gipuzkoa</option>
                                <option value="Girona">Girona</option>
                                <option value="Granada">Granada</option>
                                <option value="Guadalajara">Guadalajara</option>
                                <option value="Huelva">Huelva</option>
                                <option value="Huesca">Huesca</option>
                                <option value="Jaén">Jaén</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Las Palmas">Las Palmas</option>
                                <option value="León">León</option>
                                <option value="Lleida">Lleida</option>
                                <option value="Lugo">Lugo</option>
                                <option value="Madrid">Madrid</option>
                                <option value="Málaga">Málaga</option>
                                <option value="Murcia">Murcia</option>
                                <option value="Navarre">Navarre</option>
                                <option value="Ourense">Ourense</option>
                                <option value="Palencia">Palencia</option>
                                <option value="Pontevedra>Pontevedra</option>
                                <option value="Salamanca">Salamanca</option>
                                <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                                <option value="Segovia">Segovia</option>
                                <option value="Seville">Seville</option>
                                <option value="Soria">Soria</option>
                                <option value="Tarragona">Tarragona</option>
                                <option value="Teruel">Teruel</option>
                                <option value="Toledo">Toledo</option>
                                <option value="Valencia">Valencia</option>

                                <option value="Valladolid">Valladolid</option>
                                <option value="Zamora">Zamora</option>
                                <option value="Zaragoza">Zaragoza</option>
                                
                        `
                        break


                        case "Qatar":
                                states.innerHTML = `

                                        <option value="Ad Dawḩah">Ad Dawḩah</option>
                                        <option value="Al Khawr">Al Khawr</option>
                                        <option value="Al Jumaliyah">Al Jumaliyah</option>
                                        <option value="Ar Rayyān">Ar Rayyān</option>
                                        <option value="Madinat ach Shamal">Madinat ach Shamal</option>
                                        <option value="Umm Sa'id">Umm Sa'id</option>
                                        <option value="Umm Şalāl">Umm Şalāl</option>
                                        <option value="Al Wakrah">Al Wakrah</option>
                                        <option value="Al Wakrah Municipality">Al Wakrah Municipality</option>
                                `
                        break
                case "Egypt":
                        states.innerHTML = `

                                <option value="Muhafazat Suhaj">Muhafazat Suhaj</option>
                                <option value="Muhafazat Shamal Sina">Muhafazat Shamal Sina</option>
                                <option value="Muhafazat Qina">Muhafazat Qina</option>
                                <option value="Muhafazat Matruh">Muhafazat Matruh</option>
                                <option value="Kafr ash Shaykh">Kafr ash Shaykh</option>
                                <option value="South Sinai Governorate">South Sinai Governorate</option>
                                <option value="Damietta Governorate">Damietta Governorate</option>
                                <option value="Muhafazat Bur Sa'id">Muhafazat Bur Sa'id</option>
                                <option value="Muhafazat Bani Suwayf">Muhafazat Bani Suwayf</option>
                                <option value="Muhafazat Asyut">Muhafazat Asyut</option>
                                <option value="Muhafazat Aswan">Muhafazat Aswan</option>
                                <option value="As Suways">As Suways</option>
                                <option value="Muhafazat ash Sharqiyah">Muhafazat ash Sharqiyah</option>
                                <option value="Muhafazat al Wadi al Jadid">Muhafazat al Wadi al Jadid</option>
                                <option value="Muhafazat al Qalyubiyah">Muhafazat al Qalyubiyah</option>
                                <option value="Cairo Governorate">Cairo Governorate</option>
                                <option value="Muhafazat al Minya">Muhafazat al Minya</option>
                                <option value="Muhafazat al Minufiyah">Muhafazat al Minufiyah</option>
                                <option value="Muhafazat al Jizah">Muhafazat al Jizah</option>
                                <option value="Ismailia Governorate">Ismailia Governorate</option>
                                <option value="Muhafazat al Iskandariyah">Muhafazat al Iskandariyah</option>
                                <option value="Muhafazat al Gharbiyah">Muhafazat al Gharbiyah</option>
                                <option value="Muhafazat al Fayyum">Muhafazat al Fayyum</option>
                                <option value="Beheira Governorate">Beheira Governorate</option>
                                <option value="Red Sea Governorate">Red Sea Governorate</option>
                                <option value="Muhafazat ad Daqahliyah">Muhafazat ad Daqahliyah</option>
                                <option value="Muhafazat al Uqsur">Muhafazat al Uqsur</option>
                        `
                break
                case "Australia":
                        states.innerHTML = `

                                <option value="New South Wales">New South Wales</option>
                                <option value="Victoria">Victoria</option>
                                <option value="Queensland">Queensland</option>
                                <option value="Western Australia">Western Australia</option>
                                <option value="South Australia
                        ">South Australia
                        </option>
                                <option value="Tasmania">Tasmania</option>
                        `
                break


                default:
                        states.innerHTML = `<option value='Select State'>Select State</option>`

        }
}

