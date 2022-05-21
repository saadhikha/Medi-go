//DOM elements
var leave_review_city = document.getElementById('leave-review-city')
var leave_review_hospital = document.getElementById('leave-review-hospital')
var leave_review_submit = document.getElementById('leave-review-submit')
var review = document.getElementById('review')
var search_review_city = document.getElementById('search-review-city')
var search_review_hospital = document.getElementById('search-review-hospital')
var search_review_submit = document.getElementById('search-review-submit')
var search_review_table_div = document.getElementById('search-review-table-div')
var search_review_table = document.getElementById('search-review-table')

//Variables
var socket = io();
console.log('Socket created successfully')

search_review_submit.addEventListener('click', function() {
    console.log(search_review_city.value)
    console.log(search_review_hospital.value)
    socket.emit('search_review', search_review_city.value, search_review_hospital.value)
})

leave_review_submit.addEventListener('click', function() {
    console.log(leave_review_city.value)
    console.log(leave_review_hospital.value)
    console.log(review.value)
    socket.emit('leave_review', leave_review_city.value, leave_review_hospital.value, review.value)
})

socket.on('returning_result', function(result) {
    search_review_table_div.style.display = "block"
    console.log(result)
    var resultCount = result['length']
    for(i=1; i<=resultCount; i++) {
        var row = search_review_table.insertRow(i)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        cell1.innerHTML = search_review_hospital.value
        cell2.innerHTML = result[i-1]['content']
    }
})