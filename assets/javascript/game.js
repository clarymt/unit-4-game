var targetScore;
var loss;
var win;

for(var i = 0; i < 4; i++){
    
    var crystal = $("<div>");
        crystal.attr("class", 'crystal');

    $(".crystals").append(crystal);


}
//this game will have 4 crystals and random target number
//each crystal will have random number 1-12
//each new game will generate a new random bumber for each crystal
//when clicking a crystal, it should adding to the total until
//it equals target score
//if it is greater than target number it recieves +1 loss and will restart
//if it is equal, it recieves +1 win and will restart