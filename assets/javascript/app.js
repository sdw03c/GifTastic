$(document).ready(function () {
        var correctAnswers = 0;
        var wrongAnswers = 0;
        var unansweredQuestions = 0;
        var userGuess ="";
        var timer = 20;
        var timerRunning = false;
        var startTimer; 
    var questions= [
        {
            question: "In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?", 
            choice: ["Trystane Martell of Dorne", "Robyn Arryn", "Bran Stark", "Theon Greyjoy"],
            answer: 3,
            photo: "assets/images/theonGreyjoy.gif"
         },
         {
             question: "Which House is a direct vassal of House Baratheon of King's Landing?", 
            choice: ["Stokeworth", "Greyjoy", "Upcliff", "Karstark"],
            answer: 0,
            photo: "assets/images/Stokeworth.png"
         }, 
         {
            question: "What is the name of Jon's direwolf?", 
            choice: ["Summer", "Shaggyddog", "Ghost", "Grey Wind" ],
            answer: 2,
            photo: "assets/images/ghost.gif"
        }, 
        {
            question: "Why could Jon leave the Night's Watch, since his vows were for life?", 
            choice: ["As Lord Commander, he was free to go", "He died", "He is the son of the great lord", "He broke his vows" ],
            answer: 1,
            photo: "assets/images/deadJonSnow.gif"
        }, 
        {
            question: "How many men did Theon Greyjoy use to capture Winterfell?", 
            choice: ["10", "40", "100", "20" ],
            answer: 3,
            photo: "assets/images/theonWinterfell.gif"
        }, 
        {
            question: "Which name is given to the bastards of The Reach?", 
            choice: ["Storm", "Pyke", "Flowers", "Waters" ],
            answer: 2,
            photo: "assets/images/flowers.jpg"
        }, 
        {
            question: "How many times has Sansa Stark been married?", 
            choice: ["Once", "Twice", "Three times", "She has never been married" ],
            answer: 1,
            photo: "assets/images/SansaandJoffrey.gif"
        }, 
        {
            question: "Who was the Mad King's firstborn son?", 
            choice: ["Rhaegar Targaryen", "Viserys Targaryen", "Aegon Targaryen", "Aemon Targaryen" ],
            answer: 0,
            photo: "assets/images/rhaegar.gif"
        },
        {
            question: "Grey Worm and Missandei became allies of Daenerys Targaryen after she liberated the slaves of which city?", 
            choice: ["Qarth", "Yunkai", "Meereen", "Astapor" ],
            answer: 3,
            photo: "assets/images/GreyWormandMissandei.gif"
        },
        {
            question: "Which city does Samwell Tarly travel to in order to train as a maester?", 
            choice: ["Highgarden", "Oldtown", "Sunspear", "Newtown" ],
            answer: 1,
            photo: "assets/images/oldtown.jpg"
        }];   
        var totalQuestions = questions.length;
        var select;
        var random;
        var newPicture = [];
        var newGame = [];

    //Starts the game upon "Start Game" buton click
    $("#startGame").on("click", function () {
            $("#startGame").hide();
            runTimer();
            displayQuestion();
            for(var i = 0; i < questions.length; i++) {
            newGame.push(questions[i]);
    }
        })
    
   
    //Start timer function
    function runTimer(){
        if (!timerRunning) {
        startTimer = setInterval(decrement, 1000); 
        }
    }
    //countdown
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        //stop timer if reach it rechaes 0
        if (timer === 0) {
            unansweredQuestions++;
            stop();
            $("#correctAnswer").html("<h4>Time is up! The correct answer is: " + select.choice[select.answer] + "</h4>");
            hidepicture();
        }	
    }
    
    //Stop timer function
    function stop() {
        clearInterval(startTimer);
    }
    //display random questions
    function displayQuestion() {
        random = Math.floor(Math.random()*questions.length);
        select = questions[random];
    
            $("#questions").html("<h2>" + select.question + "</h2>");
            for(var i = 0; i < select.choice.length; i++) {
                var userChoice = $("<h5>").addClass("selectedAnswer");
                userChoice.text(select.choice[i]).css('cursor', 'pointer');
                userChoice.attr("dataa", i);
                $("#correctAnswer").append(userChoice).css('color','black');
    }
    
    //click function to select answers
    $(".selectedAnswer").on("click", function () {
        userGuess = parseInt($(this).attr("dataa"));
    
        //correct guess or wrong guess outcomes
        if (userGuess === select.answer) {
            stop();
            correctAnswers++;
            userGuess="";
            $("#correctAnswer").html("<h4>Correct!</h4>").css('color','green');
            hidepicture();
    
        } else {
            stop();
            wrongAnswers++;
            userGuess="";
            $("#correctAnswer").html("<h4>Nope! The correct answer is: " + select.choice[select.answer] + "</h4>").css('color','red');
            hidepicture();
        }
    })
    }
    
    
    function hidepicture () {
        $("#correctAnswer").append("<img src=" + select.photo + ">");
        newPicture.push(select);
        questions.splice(random,1);
    
        var hidpic = setTimeout(function() {
            $("#correctAnswer").empty();
            timer= 20;
    
        //run the score screen if all questions answered
        if ((wrongAnswers + correctAnswers + unansweredQuestions) === totalQuestions) {
            $("#questions").empty();
            $("#questions").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#correctAnswer").append("<h4> Correct: " + correctAnswers + "</h4>" ).css('color','green');
            $("#correctAnswer").append("<h4> Incorrect: " + wrongAnswers + "</h4>" ).css('color','red');
            $("#correctAnswer").append("<h4> Unanswered: " + unansweredQuestions + "</h4>" ).css('color','black');
            $("#reset").show();
            correctAnswers = 0;
            wrongAnswers = 0;
            unansweredQuestions = 0;
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 5000);
    
    
    }
    $("#reset").hide();
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#correctAnswer").empty();
        $("#questions").empty();
        for(var i = 0; i < newGame.length; i++) {
            questions.push(newGame[i]);
        }
        runTimer();
        displayQuestion();
    
    })
    
    })