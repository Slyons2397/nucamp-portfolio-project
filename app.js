$(document).ready(function() {
    $(".orderButton").on('click',(function(){
        $("#cartModal").modal('show');
    }));
    $(".closeButton").on('click',(function(){
        $("#cartModal").modal('hide');
    }));
    $(".jobButton").on('click',(function(){
        $("#jobModal").modal('show');
    }));
    $(".closeButton").on('click',(function(){
        $("#jobModal").modal('hide');
        $("#confirmModal").modal('hide');
    }));
    $(".placeOrderButton").on('click',(function(){
        $("#confirmModal").modal('show');
        $("#cartModal").modal('hide');
    }));
    $(".submitAppButton").on('click',(function(){
        $("#thankModal").modal('show');
        $("#jobModal").modal('hide');
    }));
    $(".homeButton").on('click',(function(){
        $("#thankModal").modal('hide');
        $("#confirmModal").modal('hide');
    }));

});

let orderTime = document.querySelector('#orderTime');
let today = new Date();
let hour = today.getHours();
let twelveHour = today.getHours() % 12 || 12;
let leadMin = '';
let minutes = today.getMinutes();
let timeOfDay = '';
let updateCartButton = document.querySelector(".updateCartButton");
let hotCoffeeAmount = document.querySelector("#hotCoffeeAmount")
let icedCoffeeAmount = document.querySelector("#icedCoffeeAmount")
let foodAmount = document.querySelector("#foodAmount")
let total = document.querySelector("#total")
let placeOrderButton = document.querySelector(".placeOrderButton")


placeOrderButton.addEventListener('click', function(){
    hotCoffeeAmount.value = 0
    icedCoffeeAmount.value = 0
    foodAmount.value = 0
    total.textContent = `Your Total is`
})

function getAmount(amount, price){
    total1 = (amount * price)
    return total1
}


updateCartButton.addEventListener('click', function(){
    let hotCoffeeNumber = hotCoffeeAmount.value
    let icedCoffeeNumber = icedCoffeeAmount.value
    let foodNumber = foodAmount.value
    let hotTotal = getAmount(hotCoffeeNumber, 3.00)
    let icedTotal = getAmount(icedCoffeeNumber, 4.00)
    let foodTotal = getAmount(foodNumber, 6.00)
    let totalPrice = parseInt(hotTotal + icedTotal + foodTotal)
    total.textContent = `Your total is $${totalPrice}`
})


if (minutes < 10){
    leadMin = '0';
}else {
    leadMin = '';
};

if (hour > 12){
    timeOfDay = 'PM';
}else {
    timeOfDay = 'AM';
};

orderTime.textContent = `Your order was submitted at: ${twelveHour}:${leadMin}${minutes} ${timeOfDay}`;
