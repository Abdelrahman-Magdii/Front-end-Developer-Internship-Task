//  current time

function updateTime() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var pe = "AM";

    if (hours > 12) {
        hours = hours - 12;
        pe = "PM";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.getElementById("timeCounter").innerHTML = "Time :" + year + "-" + month + "-" + day + " | " + hours + ":" + minutes + ":" + seconds + " " + pe;
}

function initTime() {
    updateTime();
    window.setInterval(updateTime, 1000); // Call updateTime every second
}


// navbar 
function showSidebar() {
    const sidebar = document.querySelector('.side')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.side')
    sidebar.style.display = 'none'
}



const listdives = [
    { Name: "dives 1", MACAddress: "4c:d5:77:0d:a4:5f", IPv4Address: "192.168.1.6", IPv6Address: "fe80::cfa7:1ff:fe27:6aa3" },
    { Name: "dives 2", MACAddress: "8c:a6:df:1b:c3:2e", IPv4Address: "192.168.1.7", IPv6Address: "fe80::8ca6:dff:fe1b:c32e" },
    { Name: "dives 3", MACAddress: "3f:4a:20:7d:e3:9a", IPv4Address: "192.168.1.8", IPv6Address: "fe80::3f4a:20ff:fe7d:e39a" },
    { Name: "dives 4", MACAddress: "bc:76:70:6a:9b:4d", IPv4Address: "192.168.1.9", IPv6Address: "fe80::bc76:70ff:fe6a:9b4d" },
    { Name: "dives 5", MACAddress: "ab:cd:ef:12:34:56", IPv4Address: "192.168.1.10", IPv6Address: "fe80::abcd:efff:fe12:3456" },
    { Name: "dives 6", MACAddress: "56:78:9a:bc:de:f1", IPv4Address: "192.168.1.11", IPv6Address: "fe80::5678:9aff:febc:def1" },
    { Name: "dives 7", MACAddress: "1a:2b:3c:4d:5e:6f", IPv4Address: "192.168.1.12", IPv6Address: "fe80::1a2b:3cff:fe4d:5e6f" },
    { Name: "dives 8", MACAddress: "7f:8e:9d:ac:bd:ce", IPv4Address: "192.168.1.13", IPv6Address: "fe80::7f8e:9dff:feac:bdce" },
    { Name: "dives 9", MACAddress: "01:23:45:67:89:ab", IPv4Address: "192.168.1.14", IPv6Address: "fe80::123:45ff:fe67:89ab" }
];



function device() {
    const deviceTableBody = document.getElementById("deviceTableBodyTableBody");

    listdives.forEach(it => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = it.Name;
        row.appendChild(nameCell);

        const macCell = document.createElement("td");
        macCell.textContent = it.MACAddress;
        row.appendChild(macCell);

        const ipv4Cell = document.createElement("td");
        ipv4Cell.textContent = it.IPv4Address;
        row.appendChild(ipv4Cell);


        const ipv6Cell = document.createElement("td");
        ipv6Cell.textContent = it.IPv6Address;
        row.appendChild(ipv6Cell);

        deviceTableBody.appendChild(row);
    });

}


device();

console.log("frist ")

// **********************

