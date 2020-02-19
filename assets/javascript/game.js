$(document).ready(function () {

    //Global Variables==================
    var healthPoints;
    var attackPower;
    var couterAttack;
    var characterChosen = false;
    var chooseEnemy = false;
    var enemyName;

    var buttonClicked;
    //Functions===================
    //1. there are 4 characters for you to choose.4 image button.
    //a. character has different level of Health Points, Attack Power, Counter Attack Power

    //2a. when image click, the character jump to your character section. 
    //2b. the others which are not been chosen are put in enemies available to attack.Enemies now only has counter attack only.

    function setUp() {
        // if ($("#chosenCharacter").html().length == 0) {
        //     console.log("No character have been chosen")
        //     characterChosen = false;
        // }

        $(":button").on("click", function () {
            if ((this.id == "char1") && ($("#chosenCharacter").html().length == 0)) {
                alert("char1 has been clicked")
                $("#charBlock1").appendTo("#chosenCharacter");
                $("#char1").attr("disabled", true);
                $("#charBlock2").appendTo("#enemies");
                $("#charBlock3").appendTo("#enemies");
                $("#charBlock4").appendTo("#enemies");
                choosenEnemy();
            } else if ((this.id == "char2") && ($("#chosenCharacter").html().length == 0)) {
                alert("char2 has been clicked")
                $("#charBlock2").appendTo("#chosenCharacter");
                $("#char2").attr("disabled", true);
                $("#charBlock1").appendTo("#enemies");
                $("#charBlock3").appendTo("#enemies");
                $("#charBlock4").appendTo("#enemies");
                choosenEnemy();
            } else if ((this.id == "char3") && ($("#chosenCharacter").html().length == 0)) {
                alert("char3 has been clicked")
                $("#charBlock3").appendTo("#chosenCharacter");
                $("#char3").attr("disabled", true);
                $("#charBlock1").appendTo("#enemies");
                $("#charBlock2").appendTo("#enemies");
                $("#charBlock4").appendTo("#enemies");
                choosenEnemy();
            } else if ((this.id == "char4") && ($("#chosenCharacter").html().length == 0)) {
                alert("char4 has been clicked")
                $("#charBlock4").appendTo("#chosenCharacter");
                $("#char4").attr("disabled", true);
                $("#charBlock1").appendTo("#enemies");
                $("#charBlock2").appendTo("#enemies");
                $("#charBlock3").appendTo("#enemies");
                choosenEnemy();
            }
        })
    }

    function choosenEnemy() {
        $(":button").on("click", function () {
            if ((this.id == "char1") && ($("#defender").html().length == 0)) {
                alert("char1 has been clicked")
                $("#charBlock1").appendTo("#defender").addClass("rival rival1");
                couterAttack = 8;
                enemyName = "ChewBacca";
            } else if ((this.id == "char2") && ($("#defender").html().length == 0)) {
                alert("char2 has been clicked")
                $("#charBlock2").appendTo("#defender").addClass("rival rival2");
                couterAttack = 10;
                enemyName = "Darth Vader";
            } else if ((this.id == "char3") && ($("#defender").html().length == 0)) {
                alert("char3 has been clicked")
                $("#charBlock3").appendTo("#defender").addClass("rival rival3");
                couterAttack = 12;
                enemyName = "Luke Walker";
            } else if ((this.id == "char4") && ($("#defender").html().length == 0)) {
                alert("char4 has been clicked")
                $("#charBlock4").appendTo("#defender").addClass("rival rival4");
                couterAttack = 15;
                enemyName = "Yoda";
            }
        })
    }

    //GAME RUN=============
    setUp();
    attckPwr();


    //4. The attack power of chosen character will increase for every button attack clicked.
    function attckPwr() {
        var attackPower = 0;

        $("#attackBtn").on("click", function () {

            if ($("#char1").is(":disabled")) {
                attackPower += 6;
                console.log(attackPower)
                $("#infoAttack").html("You attacked " + enemyName + " for " + attackPower + " damages");
                $("#infoCounterAttck").html(enemyName + " attacked you back for " + couterAttack + " damages");

            } else if ($("#char2").is(":disabled")) {
                attackPower += 8;
                console.log(attackPower)
                $("#infoAttack").html("You attacked " + enemyName + " for " + attackPower + " damages");
            } else if ($("#char3").is(":disabled")) {
                attackPower += 10;
                console.log(attackPower)
                $("#infoAttack").html("You attacked " + enemyName + " for " + attackPower + " damages");
            } else if ($("#char4").is(":disabled")) {
                attackPower += 12;
                console.log(attackPower)
                $("#infoAttack").html("You attacked " + enemyName + " for " + attackPower + " damages");
            }

        })


    }

    //5. when attacked the health points will be minus.

    //6. the enemies died when there healths is at 0

    //7. game over when user character is 0. then the game reset.





});