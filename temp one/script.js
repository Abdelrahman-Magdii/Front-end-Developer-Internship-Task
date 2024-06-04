const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");



modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})



// Sample data
const internetList = [
    { name: 'Network A', id: 1, ip: '192.168.0.1', devices: 5, mac: '00:1A:2B:3C:4D:5E' },
    { name: 'Network B', id: 2, ip: '192.168.0.2', devices: 10, mac: '00:1A:2B:3C:4D:5F' },
    { name: 'Network C', id: 3, ip: '192.168.0.3', devices: 8, mac: '00:1A:2B:3C:4D:60' },
    { name: 'Network D', id: 4, ip: '192.168.0.4', devices: 12, mac: '00:1A:2B:3C:4D:61' },
    { name: 'Network E', id: 5, ip: '192.168.0.5', devices: 15, mac: '00:1A:2B:3C:4D:62' },
    { name: 'Network F', id: 6, ip: '192.168.0.6', devices: 20, mac: '00:1A:2B:3C:4D:63' },
    { name: 'Network G', id: 7, ip: '192.168.0.7', devices: 7, mac: '00:1A:2B:3C:4D:64' },
    { name: 'Network H', id: 8, ip: '192.168.0.8', devices: 3, mac: '00:1A:2B:3C:4D:65' },
    { name: 'Network I', id: 9, ip: '192.168.0.9', devices: 25, mac: '00:1A:2B:3C:4D:66' },
    { name: 'Network J', id: 10, ip: '192.168.0.10', devices: 18, mac: '00:1A:2B:3C:4D:67' },
    { name: 'Network K', id: 11, ip: '192.168.0.11', devices: 9, mac: '00:1A:2B:3C:4D:68' },
    { name: 'Network L', id: 12, ip: '192.168.0.12', devices: 11, mac: '00:1A:2B:3C:4D:69' },
    { name: 'Network M', id: 13, ip: '192.168.0.13', devices: 6, mac: '00:1A:2B:3C:4D:6A' },
    { name: 'Network N', id: 14, ip: '192.168.0.14', devices: 4, mac: '00:1A:2B:3C:4D:6B' },
    { name: 'Network O', id: 15, ip: '192.168.0.15', devices: 14, mac: '00:1A:2B:3C:4D:6C' },
    { name: 'Network P', id: 16, ip: '192.168.0.16', devices: 16, mac: '00:1A:2B:3C:4D:6D' },
    { name: 'Network Q', id: 17, ip: '192.168.0.17', devices: 21, mac: '00:1A:2B:3C:4D:6E' },
    { name: 'Network R', id: 18, ip: '192.168.0.18', devices: 22, mac: '00:1A:2B:3C:4D:6F' },
    { name: 'Network S', id: 19, ip: '192.168.0.19', devices: 23, mac: '00:1A:2B:3C:4D:70' },
    { name: 'Network T', id: 20, ip: '192.168.0.20', devices: 19, mac: '00:1A:2B:3C:4D:71' },
];

// Function to populate the table
function populateTable() {
    const tableBody = document.querySelector("#internetTable tbody");
    internetList.forEach(item => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.id;
        row.appendChild(nameCell);

        const idCell = document.createElement("td");
        idCell.textContent = item.name;
        row.appendChild(idCell);

        const maccell=document.createElement("td");
        maccell.textContent=item.mac;
        row.appendChild(maccell);

        const ipCell = document.createElement("td");
        ipCell.textContent = item.ip;
        row.appendChild(ipCell);

        const devicesCell = document.createElement("td");
        devicesCell.textContent = item.devices;
        row.appendChild(devicesCell);

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable();