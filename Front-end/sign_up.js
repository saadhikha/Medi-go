//DOM elements
var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var male = document.getElementById('male')
var female = document.getElementById('female')
var others = document.getElementById('others')
var address = document.getElementById('address')
var phonenumber = document.getElementById('phonenumber')
var password = document.getElementById('password')
var submit = document.getElementById('submit')

//Variables
var socket = io();
console.log('Socket created successfully')

submit.addEventListener('click', function() {
    console.log(firstname.value)
    console.log(lastname.value)
    console.log(male.value)
    console.log(female.value)
    console.log(others.value)
    console.log(address.value)
    console.log(phonenumber.value)
    console.log(password.value)
    var gender
    if(male.value) gender = 'male'
    else if(female.value) gender = 'female'
    else gender.value = 'others'
    socket.emit('signing_up', firstname.value, lastname.value, gender, address.value, 
        phonenumber.value, password.value)
})