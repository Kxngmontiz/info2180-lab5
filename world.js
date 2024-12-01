window.onload = () => {
    const lookup_button = document.getElementById("lookup");
    const country_input = document.getElementById("country");
    const result_container = document.getElementById("result");

    lookup_button.addEventListener("click", () => {
        const country = country_input.value;
        

        fetch(`world.php?country=${encodeURIComponent(country.trim())}`)
        .then((response) => response.text())
        .then((data) => {
            result_container.innerHTML = data;
        })
        .catch((error) => {
            console.log(error);
        })

        
    })

    const lookup_button_cities = document.getElementById("lookup-cities");

    lookup_button_cities.addEventListener("click", () => {
        const country = country_input.value;
        

        fetch(`world.php?country=${encodeURIComponent(country.trim())}&lookup=cities`)
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            result_container.innerHTML = data;
        })
        .catch((error) => {
            console.log(error);
        })

        
    })

}