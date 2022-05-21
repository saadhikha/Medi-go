//DOM elements
city = document.getElementById('city')
state = document.getElementById('state')
pincode = document.getElementById('pincode')
submit = document.getElementById('submit')
filter_table = document.getElementById('filter-table')
filter_table_div = document.getElementById('filter-table-div')

//Variables
var socket = io();
console.log('Socket created successfully')

submit.addEventListener('click', function() {
    console.log(state.value)
    console.log(city.value)
    socket.emit('hospital_beds', city.value+", "+state.value)
});

socket.on('returning_result', function(result){
    filter_table_div.style.display = "block"
    console.log(result)
    var resultCount = result['length']
    for(i=1; i<=resultCount; i++) {
        var row = filter_table.insertRow(i)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        var cell6 = row.insertCell(5)
        var cell7 = row.insertCell(6)
        cell1.innerHTML = result[i-1]['name']
        cell2.innerHTML = result[i-1]['category']
        cell3.innerHTML = result[i-1]['beds_available']
        cell4.innerHTML = result[i-1]['beds_available_icu']
        cell5.innerHTML = result[i-1]['beds_available_normal']
        cell6.innerHTML = result[i-1]['beds_available_ventilation']
        cell7.innerHTML = "<a href='#'>Book Now</a>"
    }
});