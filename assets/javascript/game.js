$( document ).ready(function() {


var targetScore;
var loss;
var win;


targetScore = Math.floor(Math.random() * 129 ) + 30; 

$("#result").text('Target Score: ' + targetScore);
//console.log(targetScore);

//this game will have 4 crystals and random target number
for(var i = 0; i < 4; i++){
    
    //each crystal will have random number 1-12
 
    var random = Math.floor(Math.random() * 12) + 1;
    //console.log(random);


    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function () {

    var num = $(this).attr('data-random');
    
    console.log(typeof num);

});

//each new game will generate a new random bumber for each crystal
//when clicking a crystal, it should adding to the total until
//it equals target score
//if it is greater than target number it recieves +1 loss and will restart
//if it is equal, it recieves +1 win and will restart
});