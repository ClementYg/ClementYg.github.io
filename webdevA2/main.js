//target all elements to save to constants
/*jshint esversion: 6 */ 
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");

const navMenu = document.querySelector("#navMenu");
const navMenuItems = document.querySelector("nav ul");
const Meso2000BCE = document.querySelector("#meso2000BCE");
const Meso750BCE = document.querySelector("#meso750BCE");
const Meso5thBCE = document.querySelector("#meso5thBCE");
const Meso410BCE = document.querySelector("#meso410BCE");

const Egypt2000BCE = document.querySelector("#egypt2000BCE");
const Egypt2ndBCE = document.querySelector("#egypt2ndBCE");

const combiParas = document.querySelectorAll(".combiPara");

//FOR COORDINATES ONLY
const ball1 = document.getElementById("b1").getBoundingClientRect();
const ball2 = document.getElementById("b2").getBoundingClientRect();

var allpages = document.querySelectorAll(".page");
var ball = document.getElementsByClassName("ball");
var MesoBall = document.querySelectorAll(".ball.mesopotamia");
const page1 = document.getElementById("page1");
// INTRO 
const intro = document.querySelector("#intro");

//lets intro slide up after 2.5s
setTimeout(function () {
    intro.style.top = "-100vh";
}, 2500);
 // set to 2500 after finished
/* hide/show pages */

    //select all subtopic pages
    function hideall() { //function to hide all pages
        for (let onepage of allpages) { //go through all subtopic pages
            onepage.style.display = "none"; //hide it
        }
    }
    function show(pgno) { //function to show selected page no
        hideall();
        //select the page based on the parameter passed in
        let onepage = document.querySelector("#page" + pgno);
        onepage.style.display = "block"; //show the page
    }

    function toggleMenu() {
        navMenuItems.classList.toggle("showMenu");
        if (navMenuItems.classList.contains("showMenu")) {
            navMenu.innerHTML = "Close Menu";
        }
        else {
            navMenu.innerHTML = "Open Menu";
        }
    }

    navMenu.addEventListener("click", toggleMenu);

    page1btn.addEventListener("click", function () {
        show(1);
        setlinePosition();
    });
    page2btn.addEventListener("click", function () {
        show(2);
    });
    page3btn.addEventListener("click", function () {
        show(3);
    });
    page4btn.addEventListener("click", function () {
        show(4);
    });
    hideall();

// %%%%%%%%%%% HISTORY TIME LINE PAGE %%%%%%%%%%%%%%% //

    var hasanimationrun = {
        mesopotamia: false,
        egypt: false,
        combined: false
    }; //mesopotamia, egypt, combined

    const desktopCombinedLayout = [
        { top: '5%', left: '-80%' },
        { top: '5%', left: '-50%' },
        { top: '20%', left: '-80%' },
        { top: '24%', left: '-44%' },
        { top: '30%', left: '-3%' },
        { top: '48%', left: '-8%' },
        { top: '59%', left: '-18%' },
        { top: '71%', left: '-51%' },
    ];

    const desktopMesoLayout = [
        { top: '12%', left: '5%' },
        { top: '23%', left: '10%' },
        { top: '37%', left: '15%' },
        { top: '63%', left: '20%' },
    ];
    const desktopEgyptLayout = [
        { top: '44%', left: '-42%' },
        { top: '44%', left: '11%' },
    ];

    const isDesktop = window.innerWidth >= 800;
    {
        ball[0].addEventListener("click", function () { 
            if (Meso2000BCE.style.display == "none") { //Comparison, checks like a boolean. True/False MAYBE CHANGE TO TOGGLE 

                Meso2000BCE.style.display = "block";
            } else {
                Meso2000BCE.style.display = "none";
            }
        });

        ball[1].addEventListener("click", function () {
            if (Meso750BCE.style.display == "none") {
                Meso750BCE.style.display = "block";
            } else {
                Meso750BCE.style.display = "none";
            }
        });

        ball[2].addEventListener("click", function () {
            if (Meso5thBCE.style.display == "none") {
                Meso5thBCE.style.display = "block";
            } else {
                Meso5thBCE.style.display = "none";
            }
        });

        ball[3].addEventListener("click", function () {
            if (Meso410BCE.style.display == "none") {
                Meso410BCE.style.display = "block";
            } else {
                Meso410BCE.style.display = "none";
            }
        });

        ball[4].addEventListener("click", function () { //start of EGYPT
            if (Egypt2000BCE.style.display == "none") {
                Egypt2000BCE.style.display = "block";
            }
            else {
                Egypt2000BCE.style.display = "none";
            }
        });

        ball[5].addEventListener("click", function () {
            if (Egypt2ndBCE.style.display == "none") {
                Egypt2ndBCE.style.display = "block";
            }
            else {
                Egypt2ndBCE.style.display = "none";
            }
        });
        ball[6].addEventListener("click", function () {
            if (combiParas[0].style.display == "none") {
                combiParas[0].style.display = "block";
            }
            else { combiParas[0].style.display = "none"; }
        });
        ball[7].addEventListener("click", function () {
            if (combiParas[1].style.display == "none") {
                combiParas[1].style.display = "block";
            }
            else { combiParas[1].style.display = "none"; }
        });

        ball[8].addEventListener("click", function () {
            if (combiParas[2].style.display == "none") {
                combiParas[2].style.display = "block";
            }
            else { combiParas[2].style.display = "none"; }
        });

        ball[9].addEventListener("click", function () {
            if (combiParas[3].style.display == "none") {
                combiParas[3].style.display = "block";
            }
            else { combiParas[3].style.display = "none"; }
        });
        ball[10].addEventListener("click", function () {
            if (combiParas[4].style.display == "none") {
                combiParas[4].style.display = "block";
            }
            else { combiParas[4].style.display = "none"; }
        });

        ball[11].addEventListener("click", function () {
            if (combiParas[5].style.display == "none") {
                combiParas[5].style.display = "block";
            }
            else { combiParas[5].style.display = "none"; }
        });

        ball[12].addEventListener("click", function () {
            if (combiParas[6].style.display == "none") {
                combiParas[6].style.display = "block";
            }
            else { combiParas[6].style.display = "none"; }
        });

        ball[13].addEventListener("click", function () {
            if (combiParas[7].style.display == "none") {
                combiParas[7].style.display = "block";
            }
            else { combiParas[7].style.display = "none"; }
        });
    }
    function dynamicHeight() {
        const histContainer = document.querySelector("#histcontainer");
        histContainer.classList.remove("egyptBG", "mesoBG", "combiBG");

        histContainer.style.height = "100vh";
        if (hasanimationrun.mesopotamia) {
            histContainer.style.height = "150vh";
            histContainer.classList.add("mesoBG");
        } else if (hasanimationrun.egypt) {
            histContainer.style.height = "75vh";
            histContainer.classList.add("egyptBG");
        } else if (hasanimationrun.combined) {
            histContainer.style.height = "400vh";
            histContainer.classList.add("combiBG");
        }
    }

    //TRYING TO ANIMATE THE BALLS TO FLY OUT
    function animateBalls(groupClass) {


        if (hasanimationrun[groupClass] == true) { return; } //break/continue are not used as they get out of loop only
        const groupofBalls = document.querySelectorAll(`.ball.${groupClass}`);
        groupofBalls[0].innerHTML = "2000 BCE";
        console.log("animateBalls running");
        var layout;

        if (isDesktop) {
            if (groupClass == "mesopotamia") { layout = desktopMesoLayout; }
            if (groupClass == "egypt") { layout = desktopEgyptLayout; }
            if (groupClass == "combined") { layout = desktopCombinedLayout; }
        }
        //RESET TO FIRST BALL
        for (let i = 0; i < groupofBalls.length; i++) {
            const currentBall = groupofBalls[i];
            currentBall.style.transition = "none";
            currentBall.style.top = isDesktop ? layout[0].top : groupofBalls[0].dataset.top;
            currentBall.style.left = isDesktop ? layout[0].left : groupofBalls[0].dataset.left;
        }

        var reflow = groupofBalls[0].clientHeight;
        // get position for reassurance + 
        // FORCE REFLOW --> ensures any changes made in CSS reflects, 
        // in this case its the intiial position reset

        //ANIMATE TO CORRECT AREA
        for (let i = 0; i < groupofBalls.length; i++) {
            const currentBall = groupofBalls[i];
            currentBall.style.transition = "top 2s ease, left 2s ease";
            currentBall.style.top = isDesktop ? layout[i].top : currentBall.dataset.top; //uses data-* attribute that saved final top and left positions in html to be used here
            currentBall.style.left = isDesktop ? layout[i].left : currentBall.dataset.left;
        }
        updateLineAnimation();
        hasanimationrun[groupClass] = true;

    }

    function desktopBalls(group) {
        if (!isDesktop) return;
        if (hasanimationrun[group]) return;


        if (group === "mesopotamia") {
            startIndex = 0;
            layout = desktopMesoLayout;
        } else if (group === "egypt") {
            startIndex = 4;
            layout = desktopEgyptLayout;
        } else if (group === "combined") {
            startIndex = 6;
            layout = desktopCombinedLayout;
        } else {
            return;
        }
        for (let i = 0; i < layout.length; i++) {
            const currentBall = ball[startIndex + i]; //+ i for increment, startIndex is to specify whcih group
            if (currentBall) //check if will go out of bounds
            {
                currentBall.style.top = layout[i].top;
                currentBall.style.left = layout[i].left;
            }
        }
    }

    function updateLineAnimation() {
        const animateDuration = 2000;
        const startTime = performance.now(); //accurate way to get date data in miliseconds 
        const lineInterval = setInterval(function () {
            const elapsed = performance.now() - startTime; //finds time taken to complete animation
            setlinePosition();

            if (elapsed > animateDuration) {
                clearInterval(lineInterval);
                setlinePosition();
            }
        }, 16); //every 16ms, run this.

    }

    function resetBalls(groupClass) {
        if (hasanimationrun[groupClass] == false) return; // only reset if animation already ran

        console.log("Resetting balls");
        const groupofBalls = document.querySelectorAll(`.ball.${groupClass}`);

        const startingTop = "1%";
        const startingLeft = "1%";

        for (let i = 0; i < groupofBalls.length; i++) {

            const currentBall = groupofBalls[i];
            console.log("Resetting", i, currentBall.style.top, currentBall.style.left);

            var reflow = ball[0].clientHeight;

            currentBall.style.transition = "top 2s ease, left 2s ease";
            currentBall.style.top = startingTop;
            currentBall.style.left = startingLeft;
        }

        var paraClass = '';
        if (groupClass == "mesopotamia") {
            paraClass = ".mesoPara";
        }
        else if (groupClass == "egypt") {
            paraClass = ".egyptPara";
        }
        else if (groupClass == "combined") {
            paraClass = ".combiPara";
        }
        else paraClass = null;

        if (paraClass) {
            const paragraphs = document.querySelectorAll(paraClass);
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.display = "none";
            }
        }

        if (groupClass == "mesopotamia") {
            groupofBalls[0].innerHTML = "Mesopotamia";
        }
        else if (groupClass == "egypt") {
            groupofBalls[0].innerHTML = "Egypt";
        }
        else if (groupClass == "combined") {
            groupofBalls[0].innerHTML = "Unification";
        }
        else console.log("Error groupClass");

        hasanimationrun[groupClass] = false;
        setlinePosition();
        var linesFollow = setInterval(updateLineAnimation, 100);
        setTimeout(function () {
            clearInterval(linesFollow);
        }, 500);


    }

    //DRAWING OF LINES IS BY CHATGPT + OWN RESEARCH SO MIGHT NOT BE ACCURATE

    function getCenter(element) {
        const area = element.getBoundingClientRect(); // returns width/height/position/coordinate info about the DOMRect of the element.
        const container = document.getElementById("connector").getBoundingClientRect();
        return { // returns object of {x, y}. x and y are creating object with 2 properties.
            x: area.left - container.left + (area.width / 2), //gives X center of element, including position and how much scrolled
            y: area.top - container.top + (area.height / 2) //same but Y 
        };
    }
    function setlinePosition() {
        console.log("Running linePos");
        const balls = [ //ARRAY OF BALLS
            document.getElementById("b1"), //INDEX 0
            document.getElementById("b2"),
            document.getElementById("b3"), // INDEX 2
            document.getElementById("b4"),
            document.getElementById("eb1"), //INDEX 4, EGYPT
            document.getElementById("eb2"),
            document.getElementById("cb1"), //INDEX 6, COMBI
            document.getElementById("cb2"),
            document.getElementById("cb3"),
            document.getElementById("cb4"),
            document.getElementById("cb5"),
            document.getElementById("cb6"),
            document.getElementById("cb7"),
            document.getElementById("cb8")
        ];

        const centers = balls.map(getCenter); // .map uses elements in balls ARRAY, runs each element in getCenter FUNCTION, then creates a new array centers with each object's {x,y}
        const lines = [
            document.getElementById("line1"),
            document.getElementById("line2"),
            document.getElementById("line3"),
            document.getElementById("line4"),
            document.getElementById("line5"),
            document.getElementById("line6"),
            document.getElementById("line7"),
            document.getElementById("line8"),
            document.getElementById("line9"),
            document.getElementById("line10"),
            document.getElementById("line11")

        ];
        // ADD IF ELSE TO CHECK FOR CURRENT BALL, EGYPT AND MESOPOTAMIA 
        if (!isDesktop) {
            lines[0].setAttribute("x1", centers[0].x); // next 4 lines: html <line> has attributes x1x2y1y2, that gives coordinates of start and end point of the drawn svg line. 
            lines[0].setAttribute("y1", centers[0].y); // What I'm doing: setting the value of these attributes manually via JS to the center of the balls. 
            lines[0].setAttribute("x2", centers[1].x); // Desired Effect: Lines connecting the balls
            lines[0].setAttribute("y2", centers[1].y);

            lines[1].setAttribute("x1", centers[1].x);
            lines[1].setAttribute("y1", centers[1].y);
            lines[1].setAttribute("x2", centers[2].x);
            lines[1].setAttribute("y2", centers[2].y);

            lines[2].setAttribute("x1", centers[2].x);
            lines[2].setAttribute("y1", centers[2].y);
            lines[2].setAttribute("x2", centers[3].x);
            lines[2].setAttribute("y2", centers[3].y);

            lines[3].setAttribute("x1", centers[4].x); //egypt
            lines[3].setAttribute("y1", centers[4].y);
            lines[3].setAttribute("x2", centers[5].x);
            lines[3].setAttribute("y2", centers[5].y);

            lines[4].setAttribute("x1", centers[6].x); //combi
            lines[4].setAttribute("y1", centers[6].y);
            lines[4].setAttribute("x2", centers[7].x);
            lines[4].setAttribute("y2", centers[7].y);

            lines[5].setAttribute("x1", centers[7].x);
            lines[5].setAttribute("y1", centers[7].y);
            lines[5].setAttribute("x2", centers[8].x);
            lines[5].setAttribute("y2", centers[8].y);

            lines[6].setAttribute("x1", centers[8].x);
            lines[6].setAttribute("y1", centers[8].y);
            lines[6].setAttribute("x2", centers[9].x);
            lines[6].setAttribute("y2", centers[9].y);

            lines[7].setAttribute("x1", centers[9].x);
            lines[7].setAttribute("y1", centers[9].y);
            lines[7].setAttribute("x2", centers[10].x);
            lines[7].setAttribute("y2", centers[10].y);

            lines[8].setAttribute("x1", centers[10].x);
            lines[8].setAttribute("y1", centers[10].y);
            lines[8].setAttribute("x2", centers[11].x);
            lines[8].setAttribute("y2", centers[11].y);

            lines[9].setAttribute("x1", centers[11].x);
            lines[9].setAttribute("y1", centers[11].y);
            lines[9].setAttribute("x2", centers[12].x);
            lines[9].setAttribute("y2", centers[12].y);

            lines[10].setAttribute("x1", centers[12].x);
            lines[10].setAttribute("y1", centers[12].y);
            lines[10].setAttribute("x2", centers[13].x);
            lines[10].setAttribute("y2", centers[13].y);
        }
        if (isDesktop) {
            lines[0].setAttribute("x1", centers[0].x); // next 4 lines: html <line> has attributes x1x2y1y2, that gives coordinates of start and end point of the drawn svg line. 
            lines[0].setAttribute("y1", centers[0].y); // What I'm doing: setting the value of these attributes manually via JS to the center of the balls. 
            lines[0].setAttribute("x2", centers[1].x); // Desired Effect: Lines connecting the balls
            lines[0].setAttribute("y2", centers[1].y);

            lines[1].setAttribute("x1", centers[1].x);
            lines[1].setAttribute("y1", centers[1].y);
            lines[1].setAttribute("x2", centers[2].x);
            lines[1].setAttribute("y2", centers[2].y);

            lines[2].setAttribute("x1", centers[2].x);
            lines[2].setAttribute("y1", centers[2].y);
            lines[2].setAttribute("x2", centers[3].x);
            lines[2].setAttribute("y2", centers[3].y);

            lines[3].setAttribute("x1", centers[4].x); //egypt
            lines[3].setAttribute("y1", centers[4].y);
            lines[3].setAttribute("x2", centers[5].x);
            lines[3].setAttribute("y2", centers[5].y);

            lines[4].setAttribute("x1", centers[6].x);
            lines[4].setAttribute("y1", centers[6].y);
            lines[4].setAttribute("x2", centers[7].x);
            lines[4].setAttribute("y2", centers[7].y);

            lines[5].setAttribute("x1", centers[8].x);
            lines[5].setAttribute("y1", centers[8].y);
            lines[5].setAttribute("x2", centers[9].x);
            lines[5].setAttribute("y2", centers[9].y);

            lines[6].setAttribute("x1", centers[8].x);
            lines[6].setAttribute("y1", centers[8].y);
            lines[6].setAttribute("x2", centers[9].x);
            lines[6].setAttribute("y2", centers[9].y);

            lines[7].setAttribute("x1", centers[9].x);
            lines[7].setAttribute("y1", centers[9].y);
            lines[7].setAttribute("x2", centers[10].x);
            lines[7].setAttribute("y2", centers[10].y);

            lines[8].setAttribute("x1", centers[10].x);
            lines[8].setAttribute("y1", centers[10].y);
            lines[8].setAttribute("x2", centers[11].x);
            lines[8].setAttribute("y2", centers[11].y);

            lines[9].setAttribute("x1", centers[11].x);
            lines[9].setAttribute("y1", centers[11].y);
            lines[9].setAttribute("x2", centers[12].x);
            lines[9].setAttribute("y2", centers[12].y);

            lines[10].setAttribute("x1", centers[12].x);
            lines[10].setAttribute("y1", centers[12].y);
            lines[10].setAttribute("x2", centers[13].x);
            lines[10].setAttribute("y2", centers[13].y);
        }





    }

    // when user resizes screen or scrolls, use above function to set lines again (responsiveness)
    window.addEventListener("resize", function () {
        desktopBalls();
        setlinePosition();
    });
    ball[0].addEventListener("click", function () { //MESO
        resetBalls("egypt");
        resetBalls("combined");
        animateBalls("mesopotamia");
        dynamicHeight();
    }); // When click 1st ball, animate balls to fly out
    ball[4].addEventListener("click", function () {
        resetBalls("mesopotamia");
        resetBalls("combined");
        animateBalls("egypt");
        desktopBalls("egypt");
        dynamicHeight();
    });
    ball[6].addEventListener("click", function () {
        resetBalls("mesopotamia");
        resetBalls("egypt");
        animateBalls("combined");
        desktopBalls("combined");
        dynamicHeight();
    });



// %%%%%%%%%% HISTORY QUIZ SECTION %%%%%%%%%%%%%%

    var startquizBtn = document.getElementById("startBtn");
    var quizSection = document.querySelector("footer section");
    var currentQuestionIndex = 0;
    var nextBtn = document.getElementById("nextBtn");
    var quizScore = 0;
    var quizquestions = [
        document.querySelector("input[value='a'] + span"),
        document.querySelector("input[value='b'] + span"),
        document.querySelector("input[value='c'] + span"),
        document.querySelector("input[value='d'] + span")

    ];

    startquizBtn.addEventListener("click", function () {
        quizSection.classList.toggle("showQuiz");
        if (quizSection.classList.contains("showQuiz")) {
            startquizBtn.style.display = "none";
            quizSection.style.display = "block";
        }
    });
    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {
        currentQuestionIndex = 0;
        quizScore = 0;

        // Show quiz section 
        quizSection.classList.remove("showQuiz");
        quizSection.style.display = "none";

        const question = document.querySelector("footer section h3");
        question.innerHTML = "Q1: Who was the first to assign meaning to the planets and stars?";

        quizquestions[0].innerHTML = "Egyptians.";
        quizquestions[1].innerHTML = "Mesopotamians."; // correct
        quizquestions[2].innerHTML = "Greeks.";
        quizquestions[3].innerHTML = "Romans.";

        // Clear selected answer
        const radios = document.querySelectorAll("input[name='q1']");
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
        // Hide score display and reset button
        startquizBtn.style.display = "inline-block";
        document.getElementById("quizscoreDisplay").style.display = "none";
        resetBtn.style.display = "none";

    });
    function checkquizAnswer() {
        var answer = document.querySelector("input[name='q1']:checked").value;
        switch (currentQuestionIndex) {
            case 0:
                {
                    if (answer == 'b') { quizScore++; }
                    break;
                }
            case 1:
                {
                    if (answer == 'b') { quizScore++; }
                    break;
                }
            case 2:
                {
                    if (answer == 'a') { quizScore++; }
                    break;
                }
            case 3:
                {
                    if (answer == 'c') { quizScore++; }
                    break;
                }
            case 4:
                {
                    if (answer == 'd') { quizScore++; }
                    break;
                }
            default:
                console.log("Error checking answer");
        }
        currentQuestionIndex++;
        if (currentQuestionIndex >= 5) {
            endQuiz();
        }
        else nextQn();
    }

    function endQuiz() {
        quizSection.style.display = "none";

        const qScoreDisplay = document.getElementById("quizscoreDisplay");
        qScoreDisplay.style.display = "block";

        const scoreValue = document.querySelector("#quizscoreDisplay p");
        scoreValue.innerHTML = `${quizScore}`;
        resetBtn.style.display = "inline-block";

    }

    function nextQn() {
        var question = document.querySelector("footer section h3");
        console.log(currentQuestionIndex);
        switch (currentQuestionIndex) {
            case 1: //QUESTION 2, q1 starts at index 0
                {
                    question.innerHTML = "Q2: Are there 13 Zodiacs? Why?";
                    quizquestions[0].innerHTML = "Yes. The forgotten zodiac Ophiuchus was found and added recently";
                    quizquestions[1].innerHTML = "No. The constellation Ophiuchus is not part of the zodiac belt. "; //ANS
                    quizquestions[2].innerHTML = "No. Ophiuchus is fake and a scheme by astrophysicists.";
                    quizquestions[3].innerHTML = "Yes. Ophiuchus is now a zodiac sign due to the changes in the stars as planets move.";
                }
                break;
            case 2: //QUESTION 3 
                {
                    question.innerHTML = "Q3: What are the 4 branches of traditional Astrology Topics? ";
                    quizquestions[0].innerHTML = "Mundane Astrology, Natal Astrology,  Electional Astrology, Horary Astrology."; //ANS
                    quizquestions[1].innerHTML = "Basic Astrology, Birth Astrology, Political Astrology, Time Astrology";
                    quizquestions[2].innerHTML = "Tarot Cards, Divination, Crystallomancy, Palm Reading ";
                    quizquestions[3].innerHTML = "Chinese Astrology, Indian Astrology, Babylonian Astrology, Celtic Astrology";
                    break;
                }
            case 3:
                {
                    question.innerHTML = "Q4: What best characterises the major shift in astrology during the 20th century? ";
                    quizquestions[0].innerHTML = "Return to strictly predictive astrology and fatalism. ";
                    quizquestions[1].innerHTML = "Greater emphasis on astronomical accuracy over symbolism";
                    quizquestions[2].innerHTML = "Shift towards psychological analysis and character introspection";
                    quizquestions[3].innerHTML = "Decline in interest due to scientific rejection of astrology";
                    break;
                }
            case 4:
                {
                    question.innerHTML = "Q5: What marked the emergence of Hellenistic astrology around 100 BCE?";
                    quizquestions[0].innerHTML = "Abandonment of house systems in natal charts";
                    quizquestions[1].innerHTML = "The complete separation of astronomy from astrology";
                    quizquestions[2].innerHTML = "A rejection of zodiac signs in favor of decans";
                    quizquestions[3].innerHTML = "The blending of Mesopotamian and Egyptian traditions";
                    break;
                }
            default:
                console.log("Error going to next qn");
        }

    }
    nextBtn.addEventListener("click", checkquizAnswer);

// %%%%%%%%%%%%%%% MINI GAME PAGE %%%%%%%%%%%%%

    const gameArea = document.querySelector("#gameArea");
    const gamestartBtn = document.querySelector("#gameStart");
    const gameresetBtn = document.querySelector("#resetLines");

    const constellations = [ // array of arrays(constellations) containing arrays(starPositions)
        [ //Aries
            [40, 44],
            [38, 38],
            [20, 30],
            [0, 28]
        ],
        [ //LEO
            [-4, 0],
            [-10, 2],
            [-11, 10],
            [-8, 13],
            [1, 12],
            [4, 20],
            [-17, 37],
            [-26, 45],
            [-26, 30]
        ],
        [//taurus
            [0, -10],   // topmost
            [10, 10],
            [14, 16],
            [13, 20],
            [16, 21],   // start of the dense cluster
            [16, 28],
            [8, 23],
            [-10, -5],
            [23, 35],   // end of cluster
            [35, 45],
            [36, 50]    // bottom-right
        ],
        [// GEMINI
            [-40, 10],
            [-36, 11],
            [-31, 10.5],
            [-10, 20],
            [-5, 15],
            [-45, 30],
            [-42, 35],
            [-10, 45],
            [-15, 60],
        ],
        [ //CANCER
            [0, 0],
            [12, 18],
            [15, 23],
            [16, 45],
            [35, 35]
        ],
        [//VIRGO
            [0, 0],
            [-2, 6],
            [-9, 7],
            [-17, 5],
            [-1.5, 20],
            [1, 25],
            [-6, 34],
            [-9, 33],
            [-11, 45],//bottom most
            [-10, 17],
            [-14, 22],
            [-23, 32],
        ],
        [// SAGG
            [0, 0], //MIDDLE BIG ONE
            [-4, -10], //TOP BRANCH
            [-1, -12],
            [-9, -11],
            [-13, -18], //TOP MOST, END OF TOP BRANCH
            [4, 2],
            [12, -3], //RIGHT SIDE BRNACH
            [16, -16],
            [15, 6],
            [22, 8],
            [32, -2], //most right side
            [14, 17],
            [18, 20], //end of right side
            [-2, 10], // bottom left area
            [-6, 7],
            [-16, 4],
            [-21, 12],
            [-15, 30],
            [-12, 38],
            [-3, 35],
            [-1, 43]
        ],
        [//AQUARIUS
            [0, 0],
            [14, -13],
            [32, -33],
            [13, 8],
            [26, 6],
            [-2, 10],
            [-5, 14],
            [-7, 19],
            [8, 38],
            [12, 27],
            [20, 26],
            [23, 30],
            [29, 34],
        ],
        [ //PISCES
            [0, 0],
            [-3, -7],
            [-7, -9],
            [-13, -7],
            [-14, 1],
            [-12, 5],
            [-6, 6],
            [-10, 13],
            [-7, 23],
            [-4, 27],
            [2, 34],
            [11, 43],
            [-8, 40],
            [-15, 39],
            [-30, 40],
            [-33, 46],
            [-40, 44]
        ],
        [ //CAPRICORN
            [0, 0],
            [7, -6],
            [6.5, -12],
            [-1, -40],
            [-2, -50], //PEAK
            [-15, -12],
            [-23, -3],
            [-27, 10],
            [-29, 15], //MOST DOWN
            [-21, 11],
            [-13, 9.5]
        ],
        [
            [-2, -7],
            [13, -17],
            [11, -24],
            [10, -10],
            [12, -1],
            [-18, 11],
            [-16, 17],
            [-17, 23],
            [-25, 24.5],
            [-31, 24],
            [-37, 21],
            [-33, 16],
            [-30, 12]
        ],
        [
            [0, 0],
            [5, -3],
            [8, -6],
            [12, -22],
            [23, -7],
            [20, 10],
            [10, 17],
            [10.5, 21],
        ]
    ];

    const constellationNames = ["Aries", "Leo", "Taurus", "Gemini", "Cancer", "Virgo",
        "Sagittarius", "Aquarius", "Pisces", "Capricorn", "Scorpio", "Libra"];
    // gameState stuff
    var pickedConstellation = [];
    var randConstellation = 0;
    var dotsClicked = [];
    var connectedLines = [];
    var lineData = [];
    var timeLeft = 300;
    var gameScore = 0;
    var countdownID = null;

    // offseting
    var dotMargin = 25; //rough amount so that it wont touch 

    function clearGame() {
        dotsClicked = [];
        connectedLines = [];
    }

    function resetLines() {
        const Lines = gameArea.querySelectorAll(".constellationLine");
        for (let i = 0; i < Lines.length; i++) {
            Lines[i].remove("constellationLine");
        }
        connectedLines = [];
        lineData = [];
        lastClicked = null;
    }

    function backgroundStars() {
        const numberofStars = 50;
        for (let i = 0; i < numberofStars; i++) {
            const star = document.createElement("div");
            star.classList.add("blinkingStar");
            star.style.left = `${Math.random() * 100}%`;// template literal. `` creates string. ${} refers to a variable im using. I want it in %  to be responsive positioning
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`; //delay in seconds so that not all blink at once
            gameArea.appendChild(star); // add to gameArea/dynamicGameArea with all the above 
        }
    }
    function constellationGame() {
        clearGame();
        console.log("Game start");
        randConstellation = Math.floor(Math.random() * constellations.length); // gets a random number based on total in constellation array. MATH.ROUND IS USED HERE AS the prior line gives a decimal number. FLOOR GIVES INTEGER THAT IS CLOSEST TO THE VALUE
        pickedConstellation = constellations[randConstellation];
        var maxX = 0;
        var maxY = 0;
        for (let i = 0; i < pickedConstellation.length; i++) {
            if (pickedConstellation[i][0] > maxX) maxX = pickedConstellation[i][0]; //if each > maxX then set maxX as new highest value
            if (pickedConstellation[i][1] > maxY) maxY = pickedConstellation[i][1]; // same but with maxY
        }

        var MaxoffsetX = 100 - maxX - dotMargin - 10; //100 used cos 100%, minus the max it can be and extra margin space to not touch border.
        var MaxoffsetY = 100 - maxY - dotMargin - 5; //added extra 5% bottom from css

        var offsetX = dotMargin + Math.random() * MaxoffsetX; // add back in margin then find random Position within max range
        var offsetY = dotMargin + Math.random() * MaxoffsetY;

        for (let i = 0; i < pickedConstellation.length; i++) //length refers to no. of starPos
        {
            const star = pickedConstellation[i]; // i.e First star position
            const x = star[0] + offsetX; //accessing x/first value of 2d array selected
            const y = star[1] + offsetY;

            const createDot = document.createElement("div");
            createDot.classList.add("dot");
            createDot.style.left = x + '%';
            createDot.style.top = y + '%';
            createDot.dataset.index = i; //gives each dot created an index 0, 1, etc
            gameArea.appendChild(createDot);
        }

        backgroundStars();
    }

    function getGameCenter(element) {
        const area = element.getBoundingClientRect(); // returns width/height/position/coordinate info about the DOMRect of the element.
        const container = gameArea.getBoundingClientRect();
        return { // returns object of {x, y}. x and y are creating object with 2 properties.
            x: area.left - container.left + (area.width / 2), //gives X center of element, including position and how much scrolled
            y: area.top - container.top + (area.height / 2) //same but Y 
        };
    }

    function constellationLines(dot1, dot2) {
        console.log("Lines created");
        const pos1 = getGameCenter(dot1);
        const pos2 = getGameCenter(dot2);

        const Xdiff = pos2.x - pos1.x; //gets length and height
        const Ydiff = pos2.y - pos1.y;

        const lineLength = Math.sqrt((Xdiff * Xdiff) + (Ydiff * Ydiff)); // PYTHAGORAS THEOREM!!! imagine triangle
        const rotateAngle = Math.atan2(Ydiff, Xdiff) * (180 / Math.PI); //using atan2 because no need worry which quadrant(positive/negative etc). Last part is bc javascript handles in radians
        const line = document.createElement("div");
        line.classList.add("constellationLine");
        line.style.width = `${lineLength}px`;
        line.style.left = `${pos1.x}px`;
        line.style.top = `${pos1.y}px`;
        line.style.transform = `rotate(${rotateAngle}deg)`; // rotate tht amount of degree, if not line will be straight line from pt1 to pt2

        gameArea.appendChild(line);
        connectedLines.push(line);
        lineData.push([parseInt(dot1.dataset.index), parseInt(dot2.dataset.index)]); //basically tell that one line has been drawn, uses parseInt cos earleir is still a string. 
        //EXAMPLE linedata = [ dot 0, dot 1] means theres a line between dot 0 and dot 1
        checkComplete();
    }

    //whole function is the same with drawing lines but uses for loop to use already connected lines to reshape.
    function updater() {
        for (let i = 0; i < connectedLines.length; i++) {
            const startIndex = lineData[i][0];
            const endIndex = lineData[i][1];

            const startDot = gameArea.querySelector(`.dot[data-index="${startIndex}"]`);
            const endDot = gameArea.querySelector(`.dot[data-index="${endIndex}"]`);

            const SdotCenter = getGameCenter(startDot);
            const EdotCenter = getGameCenter(endDot);

            const Xdiff = EdotCenter.x - SdotCenter.x; //gets length and height
            const Ydiff = EdotCenter.y - SdotCenter.y;

            const lineLength = Math.sqrt((Xdiff * Xdiff) + (Ydiff * Ydiff));
            const rotateAngle = Math.atan2(Ydiff, Xdiff) * (180 / Math.PI);
            const line = connectedLines[i];
            line.classList.add("constellationLine");
            line.style.width = `${lineLength}px`;
            line.style.left = `${SdotCenter.x}px`;
            line.style.top = `${SdotCenter.y}px`;
            line.style.transform = `rotate(${rotateAngle}deg)`; // rotate tht amount of degree, if not line will be straight line from pt1 to pt2

        }
    }
    function startTimer() {
        timeLeft = 300;
        document.getElementById("timerDisplay").innerHTML = `Time: ${timeLeft}s left`;

        countdownID = setInterval(function () {
            timeLeft--;
            document.getElementById("timerDisplay").innerHTML = `Time: ${timeLeft}s left`;

            if (timeLeft <= 0) {
                clearInterval(countdownID);
                endGame();
            }

        }, 1000); //every 1000ms, trigger time reduce by 1 second, if reach 0, move to next constellation
    }

    function checkComplete() {
        console.log("Checking");
        if (lineData.length != pickedConstellation.length - 1) return;// if number of lines is not equal compared ot actual amount. (in between = stars - 1)
        for (let i = 0; i < lineData.length; i++) { //check correct part
            if ((lineData[i][0] != i && lineData[i][1] != i + 1) ||
                (lineData[i][1] != i && lineData[i][0] != i)) { // LINEDATA IS BASED ON THE INDEX WHICH IS CREATED BASED ON ORDER OF STARS.
                // IF line data is not in order, that means user has placed wrongly, meaning NOT COMPLETE CORRECTLY.
                return;
            }
        }
        for (let i = 0; i < connectedLines.length; i++) {
            connectedLines[i].classList.add("completedLine");
        }
        gameScore++;
        document.getElementById("scoreDisplay").innerHTML = `Score: ${gameScore}`;
        const showName = document.createElement("div");
        showName.classList.add("showName");
        showName.innerHTML = `${constellationNames[randConstellation]}`;
        gameArea.appendChild(showName);

        setTimeout(nextConstellation, 1000);
    }

    function nextConstellation() {
        const dots = gameArea.querySelectorAll(".dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].remove(); //similar to resetGame but resetGame is everything
        }
        const totallines = gameArea.querySelectorAll(".constellationLine");
        for (let i = 0; i < totallines.length; i++) {
            totallines[i].remove();
        }
        const showNames = gameArea.querySelectorAll(".showName");
        for (let i = 0; i < showNames.length; i++) {
            showNames[i].remove();
        }

        dotsClicked = [];
        connectedLines = [];
        lineData = [];
        lastClicked = null;

        constellationGame();
    }
    function removeDynamicContent() {
        const dots = gameArea.querySelectorAll(".dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].remove();
        }
        const totallines = gameArea.querySelectorAll(".constellationLine");
        for (let i = 0; i < totallines.length; i++) {
            totallines[i].remove();
        }
        const backStars = gameArea.querySelectorAll(".blinkingStar");
        for (let i = 0; i < backStars.length; i++) {
            backStars[i].remove();
        }
        const showNames = gameArea.querySelectorAll(".showName");
        for (let i = 0; i < showNames.length; i++) {
            showNames[i].remove();
        }
        const message = document.getElementById("gameoverMsg");
        message.style.display = "none";
        gameArea.style.backgroundColor = "";
    }

    function endGame() {
        document.getElementById("gameArea").style.backgroundColor = "rgba(0,0,0,0.5)";
        const gameoverMsg = document.getElementById("gameoverMsg");
        gameoverMsg.style.display = "block";
        gameoverMsg.innerHTML = `Time is up! Good job on getting ${gameScore} constellations correct!`;
        //remove each dynamically added divs
        const dots = gameArea.querySelectorAll(".dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].remove();
        }
        const totallines = gameArea.querySelectorAll(".constellationLine");
        for (let i = 0; i < totallines.length; i++) {
            totallines[i].remove();
        }
        const backStars = gameArea.querySelectorAll(".blinkingStar");
        for (let i = 0; i < backStars.length; i++) {
            backStars[i].remove();
        }
        const showNames = gameArea.querySelectorAll(".showName");
        for (let i = 0; i < showNames.length; i++) {
            showNames[i].remove();
        }
    }

    var lastClicked = null;

    gameArea.addEventListener("click", function (eventClick) { //DELEGATE EVENT LISTENER TO PARENT INSTEAD OF EACH DOT WHICH ARE STILL UNCONFIRMED :D
        if (!eventClick.target.classList.contains("dot")) return; // listens for user target CLICK inside the gameArea. If area that clicked is not one of the dots, means nothing happen
        const dotSelected = eventClick.target.dataset.index;

        if (lastClicked == null) {
            lastClicked = eventClick.target;
            lastClicked.classList.add("selectedDot");
        }
        else if (lastClicked == eventClick.target) { // if click again, remove selected
            lastClicked.classList.remove("selectedDot");
            lastClicked = null;
        }
        else { // if click another one then will form line
            constellationLines(lastClicked, eventClick.target); //last clicked dot and the next dot
            lastClicked.classList.remove("selectedDot");
            lastClicked = null; //reset last clicked
        }
    });

    function resetGameState() {
        randConstellation = 0;
        pickedConstellation = [];
        lastClicked = null;
        connectedLines = [];
        dotsClicked = [];
        lineData = [];
        gameScore = 0;
        timeLeft = 300; // 5 minutes

        clearInterval(countdownID);
        document.getElementById("timerDisplay").innerHTML = `Time: ${timeLeft}s left`;
        document.getElementById("scoreDisplay").innerHTML = `Score: ${gameScore}`;
    }

    document.getElementById("fullscreenBtn").addEventListener("click", function () {
        if (gameArea.requestFullscreen) { gameArea.requestFullscreen(); }
        else if (gameArea.mozRequestFullscreen) { gameArea.mozRequestFullScreen(); }
        else if (gameArea.webkitRequestFullscreen) { gameArea.webkitRequestFullscreen(); }
        else if (gameArea.msRequestFullscreen) { gameArea.msRequestFullscreen(); }
    });
    document.getElementById("exitFS").addEventListener("click", function () {
        if (document.exitFullscreen) { document.exitFullscreen(); }
        else if (document.mozCancelFullscreen) { document.mozCancelFullScreen(); }
        else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
        else if (document.msExitFullscreen) { document.msExitFullscreen(); }
    });

    gamestartBtn.addEventListener("click", function () {
        clearGame(); // remove dynamic stuff
        removeDynamicContent();
        resetGameState(); //reset stuff to 0, empty arrays
        startTimer();
        constellationGame(); //starts game.
    });
    window.addEventListener("resize", updater);
    gameresetBtn.addEventListener("click", resetLines);

console.log("Ball1 X: " + ball1.x + "Ball1Y: " + ball1.y + "Ball2 X: " + ball2.x + "Ball2 Y: " + ball2.y);

// ZODIAC

    var zodiacList = document.querySelector("#zodiacList");
    var zodiacSections = document.querySelectorAll("#page2 div section");
    var zodiacEachList = document.querySelectorAll("#zodiacList li");

    function showSection(index) {
        console.log("Showing section", index);
        for (let i = 0; i < zodiacSections.length; i++) {
            zodiacSections[i].classList.remove("active");
        }

        zodiacSections[index].classList.add("active");
    }

    for (let i = 0; i < zodiacEachList.length; i++) {
        zodiacEachList[i].addEventListener("click", function () {
            showSection(i); //Pass each zodiac their own section index
        });
    }
    const elementHead = document.querySelectorAll("#page3 h3");
    const p3paragraphs = document.querySelectorAll(".infoPara");    
    for (let i = 0; i < elementHead.length; i++) {

        var individualEl = elementHead[i];
        individualEl.addEventListener('click', function() {
            const Toggle = elementHead[i].nextElementSibling;

            if (Toggle.classList.contains('active')) {
                Toggle.classList.remove('active');
            } else {
                for (let j = 0; j < p3paragraphs.length; j++) {
                    p3paragraphs[j].classList.remove('active');
                }
                Toggle.classList.add('active');
            }
        });
    }
