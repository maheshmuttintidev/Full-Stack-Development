window.onload = () => {
        const dateEl = document.createElement("date"),
                root = document.body
        root.appendChild(dateEl)

        function currentTime(){
                dateEl.style = `position: fixed; right: 12px; padding: 5px 7px; text-shadow: 0 0 1px #000, 2px 3px 4px #454545;`
                dateEl.innerHTML = new Date().toLocaleString()
        }

        setInterval(currentTime,1000)
}