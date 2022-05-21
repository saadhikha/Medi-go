//DOM elements
blood_group = document.getElementById('blood-group')
state = document.getElementById('state')
city = document.getElementById('city')
pincode = document.getElementById('pincode')
submit = document.getElementById('submit')
filter_table = document.getElementById('filter-table')
filter_table_div = document.getElementById('filter-table-div')

//Variables
var socket = io();
console.log('Socket created successfully')

submit.addEventListener('click', function() {
    console.log(blood_group.value)
    console.log(state.value)
    console.log(city.value)
    socket.emit('blood_availability', state.value, blood_group.value)
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
        cell1.innerHTML = result[i-1]['name']
        cell2.innerHTML = result[i-1]['location']
        cell3.innerHTML = result[i-1]['blood_groups']
        cell4.innerHTML = "<a href='#'>Book Now</a>"
    }
});