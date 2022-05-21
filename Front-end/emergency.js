//DOM elements
var state = document.getElementById('state')
var city = document.getElementById('city')
var pincode = document.getElementById('pincode')
var submit = document.getElementById('submit')
var filter_table = document.getElementById('filter-table')
var filter_table_div = document.getElementById('filter-table-div')

//Variables
var socket = io();
console.log('Socket created successfully')

submit.addEventListener('click', function() {
    console.log(state.value)
    console.log(city.value)
    socket.emit('emergency', city.value+", "+state.value)
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
        cell1.innerHTML = result[i-1]['name']
        cell2.innerHTML = result[i-1]['contact']
        cell3.innerHTML = "<a href='#'>Book Now</a>"
    }
});