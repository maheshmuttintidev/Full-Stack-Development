window.onload = () => {
        const dateEl = document.createElement("date"),
                root = document.body
        root.appendChild(dateEl)

        function currentTime(){
                dateEl.style = `position: fixed; right: 12px; padding: 5px 7px;`
                dateEl.innerHTML = new Date().toLocaleString()
        }

        setInterval(currentTime,1000)
}