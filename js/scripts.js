var result = 0;
var player1total = 0;


function roll() {
    result = Math.floor((Math.random() * 6) + 1);
    if (result === 1) {
        return "Oops! You have losed"
    }
    else {
        return result
    }
};

    function play() {
        //var player1dice = new Array();
        if (result === 1) {
            return (player1total = 0)
        }
        else {
            return (player1total += result)

        }
        ;
    };

    function player1points(dice) {
        var output = "";
        for (var num = 0; num < dice.length; num++) {
            output += dice[num];
        }

        // return output= "YOU LOSE";


    };
////userinterface
    $(document).ready(function () {
        $(".dice-roll-player1").click(function () {
            $("#display-score").text(roll());
            $("#display-total").text(play());
        });
    });

    $(document).ready(function () {
        $(".dice-roll-player2").click(function () {
            $("#display-score-2").text(roll());
            $("#display-total-2").text(play());
        });
    });











