//DOM elements
booking_city = document.getElementById('booking-city')
booking_state = document.getElementById('booking-state')
booking_pincode = document.getElementById('booking-pincode')
booking_submit = document.getElementById('booking-submit')
review_city = document.getElementById('review-city')
review_ambulance = document.getElementById('review-ambulance')
review = document.getElementById('review')
review_submit = document.getElementById('review-submit')
var filter_table = document.getElementById('filter-table')
var filter_table_div = document.getElementById('filter-table-div')

//Variables
var socket = io();
console.log('Socket created successfully')

booking_submit.addEventListener('click', function() {
    console.log(booking_city.value)
    console.log(booking_state.value)
    socket.emit('emergency', booking_city.value+", "+booking_state.value)
});

review_submit.addEventListener('click', function() {
    console.log(review_city.value)
    console.log(review_ambulance.value)
    console.log(review.value)
    socket.emit('review_ambulance', review_city.value, review_ambulance.value, review.value)
})

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