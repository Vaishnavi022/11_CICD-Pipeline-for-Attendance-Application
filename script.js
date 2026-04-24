function addStudent() {
    let nameInput = document.getElementById("studentName");
    let name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter student name!");
        return;
    }

    let table = document.getElementById("attendanceList");

    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let statusCell = row.insertCell(1);
    let actionCell = row.insertCell(2);

    nameCell.innerHTML = name;
    statusCell.innerHTML = "<span class='absent'>Absent</span>";

    actionCell.innerHTML = `
        <button onclick="markPresent(this)">Present</button>
        <button onclick="markAbsent(this)">Absent</button>
        <button onclick="deleteRow(this)">Delete</button>
    `;

    nameInput.value = "";
}

function markPresent(btn) {
    let row = btn.parentElement.parentElement;
    row.cells[1].innerHTML = "<span class='present'>Present</span>";
}

function markAbsent(btn) {
    let row = btn.parentElement.parentElement;
    row.cells[1].innerHTML = "<span class='absent'>Absent</span>";
}

function deleteRow(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
}
