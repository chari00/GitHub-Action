document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");
    const getAllDataBtn = document.getElementById("getAllDataBtn");
    const getPersonBtn = document.getElementById("getPersonBtn");
    const postPersonBtn = document.getElementById("postPersonBtn");
    const patchPersonBtn = document.getElementById("patchPersonBtn");
    const deletePersonBtn = document.getElementById("deletePersonBtn");

    getAllDataBtn.addEventListener("click", fetchAllData);
    getPersonBtn.addEventListener("click", fetchPerson);
    postPersonBtn.addEventListener("click", createPerson);
    patchPersonBtn.addEventListener("click", updatePerson);
    deletePersonBtn.addEventListener("click", deletePerson);

    function fetchAllData() {
        fetch("http://localhost:4000/mockData")
            .then(response => response.json())
            .then(data => displayData(data.payload))
            .catch(error => console.error("Error fetching data:", error));
    }

    function fetchPerson() {
        const id = prompt("Enter the ID of the person:");
        if (id) {
            fetch(`http://localhost:4000/mockData/${id}`)
                .then(response => response.json())
                .then(data => displayData([data.payload]))
                .catch(error => console.error("Error fetching person:", error));
        }
    }

    function createPerson() {
        const newData = prompt("Enter person details in JSON format:");
        if (newData) {
            fetch("http://localhost:4000/mockData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: newData
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error creating person:", error));
        }
    }

    function updatePerson() {
        const id = prompt("Enter the ID of the person to update:");
        const newData = prompt("Enter updated details in JSON format:");
        if (id && newData) {
            fetch(`http://localhost:4000/mockData/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: newData
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error updating person:", error));
        }
    }

    function deletePerson() {
        const id = prompt("Enter the ID of the person to delete:");
        if (id) {
            fetch(`http://localhost:4000/mockData/${id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error deleting person:", error));
        }
    }

    function displayData(data) {
        outputDiv.innerHTML = ""; // Clear previous output
        if (data.length === 0) {
            outputDiv.textContent = "No data found.";
            return;
        }
        const table = document.createElement("table");
        const headerRow = table.insertRow();
        for (const key in data[0]) {
            const headerCell = document.createElement("th");
            headerCell.textContent = key;
            headerRow.appendChild(headerCell);
        }

        data.forEach(person => {
            const row = table.insertRow();
            for (const key in person) {
                const cell = row.insertCell();
                cell.textContent = person[key];
            }
        });

        outputDiv.appendChild(table);
    }
});
