const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');

function toggle() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
}


// Theme toggler functionality
const themeModeIcons = document.querySelectorAll('.theme-toggler span');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeModeIcons.forEach(icon => {
        icon.classList.toggle('active');
    });
});









function addRows() {
    // Extended example array of data
    const rowDataArray = [
        { productName: "Mini USB", productNumber: "4563", payments: "Due", status: "Pending" },
        { productName: "Keyboard", productNumber: "9876", payments: "Paid", status: "Delivered" },
        { productName: "Mouse", productNumber: "1234", payments: "Due", status: "Pending" },
        { productName: "Monitor", productNumber: "4321", payments: "Paid", status: "Delivered" },
        { productName: "Laptop", productNumber: "5678", payments: "Paid", status: "Delivered" },
        { productName: "Charger", productNumber: "6789", payments: "Due", status: "Pending" },
        { productName: "Headphones", productNumber: "7890", payments: "Paid", status: "Delivered" }
    ];

    const tableBody = document.getElementById("videoTable").getElementsByTagName("tbody")[0];

    // Clear any existing rows
    tableBody.innerHTML = "";

    rowDataArray.forEach(rowData => {
        let newRow = tableBody.insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);

        cell1.innerHTML = rowData.productName;
        cell2.innerHTML = rowData.productNumber;
        cell3.innerHTML = rowData.payments;
        cell4.innerHTML = `<span class="${rowData.status === 'Pending' ? 'warning' : 'primary'}">${rowData.status}</span>`;
        cell5.innerHTML = '<span class="primary">Details</span>';
    });
    console.log("Rows added successfully!");

}







menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block"
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})







