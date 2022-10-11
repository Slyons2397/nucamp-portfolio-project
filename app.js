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
