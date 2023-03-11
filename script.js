

function pipes(){

    var quiz_page = document.querySelector(".quiz-page");
    var home = document.querySelector(".home");
    var gotohome = document.querySelector("#gotohome");
    var restartquiz = document.querySelector("#restartquiz");

    quiz_page.style.display = "block";
    home.style.display = "none";
    gotohome.addEventListener("click",function(){
        home.style.display = "block";
        quiz_page.style.display = "none";
        window.location.reload();

    })

    restartquiz.addEventListener("click",function(){
        pipes();
        reload();
        
    })



    const quizData = [{
        question: "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        a: "5 min.",
        b: "9 min.",
        c: "10 min.",
        d: "15 min.",
        correct: "b",
    },
    {
        question: "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        a: "1 hours",
        b: "2 hours",
        c: "6 hours",
        d: "8 hours",
        correct: "c",
    },
    {
        question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
        a: "12 min",
        b: "15 min",
        c: "11 min",
        d: "14 min",
        correct: "a",
    },
    {
        question: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        a: "130 gallons",
        b: "110 gallons",
        c: "120 gallons",
        d: "none of the above",
        correct: "c",
    },

    {
        question: "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        a: "5 min.",
        b: "9 min.",
        c: "10 min.",
        d: "15 min.",
        correct: "b",
    },
    {
        question: "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        a: "1 hours",
        b: "2 hours",
        c: "6 hours",
        d: "8 hours",
        correct: "c",
    },
    {
        question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
        a: "12 min",
        b: "15 min",
        c: "11 min",
        d: "14 min",
        correct: "a",
    },
    {
        question: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        a: "130 gallons",
        b: "110 gallons",
        c: "120 gallons",
        d: "none of the above",
        correct: "c",
    },

    {
        question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
        a: "12 min",
        b: "15 min",
        c: "11 min",
        d: "14 min",
        correct: "a",
    },
    {
        question: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        a: "130 gallons",
        b: "110 gallons",
        c: "120 gallons",
        d: "none of the above",
        correct: "c",
    },
    
    ];
    let index = 0;
    let correct = 0,
    incorrect = 0,
    total = quizData.length;
    let questionBox = document.getElementById("questionBox");
    let allInputs = document.querySelectorAll("input[type='radio']")
    const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
    }
    
    document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
    )
    
    const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
    }
    
    const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
    }
    
    const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
    }
    loadQuestion(index);
    
}

function probability(){

    var quiz_page = document.querySelector(".quiz-page");
    var home = document.querySelector(".home");
    var gotohome = document.querySelector("#gotohome");
    var restartquiz = document.querySelector("#restartquiz");

    quiz_page.style.display = "block";
    home.style.display = "none";
    gotohome.addEventListener("click",function(){
        home.style.display = "block";
        quiz_page.style.display = "none";
        window.location.reload();

    })

    restartquiz.addEventListener("click",function(){
        probability();
        reload();
        
    })



    const quizData = [{
        question: " If an rolls a fair dice, with sides labelled A, B, C, D, E and F. What is the probability that the dice lands on a vowel?",
        a: "1/3",
        b: "1/2",
        c: "2/3",
        d: "3/2",
        correct: "a",
    },
    {
        question: "Rachel flips a biased coin. The probability that she gets two heads is 0.16. What is the probability that she gets two tails?",
        a: "0.25",
        b: "0.56",
        c: "0.36",
        d: "0.26",
        correct: "c",
    },

    {
        question: " If an rolls a fair dice, with sides labelled A, B, C, D, E and F. What is the probability that the dice lands on a vowel?",
        a: "1/3",
        b: "1/2",
        c: "2/3",
        d: "3/2",
        correct: "a",
    },
    {
        question: "Rachel flips a biased coin. The probability that she gets two heads is 0.16. What is the probability that she gets two tails?",
        a: "0.25",
        b: "0.56",
        c: "0.36",
        d: "0.26",
        correct: "c",
    },

    {
        question: " If an rolls a fair dice, with sides labelled A, B, C, D, E and F. What is the probability that the dice lands on a vowel?",
        a: "1/3",
        b: "1/2",
        c: "2/3",
        d: "3/2",
        correct: "a",
    },
    {
        question: "Rachel flips a biased coin. The probability that she gets two heads is 0.16. What is the probability that she gets two tails?",
        a: "0.25",
        b: "0.56",
        c: "0.36",
        d: "0.26",
        correct: "c",
    },

    {
        question: " If an rolls a fair dice, with sides labelled A, B, C, D, E and F. What is the probability that the dice lands on a vowel?",
        a: "1/3",
        b: "1/2",
        c: "2/3",
        d: "3/2",
        correct: "a",
    },
    {
        question: "Rachel flips a biased coin. The probability that she gets two heads is 0.16. What is the probability that she gets two tails?",
        a: "0.25",
        b: "0.56",
        c: "0.36",
        d: "0.26",
        correct: "c",
    },

    {
        question: " If an rolls a fair dice, with sides labelled A, B, C, D, E and F. What is the probability that the dice lands on a vowel?",
        a: "1/3",
        b: "1/2",
        c: "2/3",
        d: "3/2",
        correct: "a",
    },
    {
        question: "Rachel flips a biased coin. The probability that she gets two heads is 0.16. What is the probability that she gets two tails?",
        a: "0.25",
        b: "0.56",
        c: "0.36",
        d: "0.26",
        correct: "c",
    },
    
    
    ];
    let index = 0;
    let correct = 0,
    incorrect = 0,
    total = quizData.length;
    let questionBox = document.getElementById("questionBox");
    let allInputs = document.querySelectorAll("input[type='radio']")
    const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
    }
    
    document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
    )
    
    const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
    }
    
    const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
    }
    
    const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
    }
    loadQuestion(index);
    

}

function ages(){

    var quiz_page = document.querySelector(".quiz-page");
    var home = document.querySelector(".home");
    var gotohome = document.querySelector("#gotohome");
    var restartquiz = document.querySelector("#restartquiz");

    quiz_page.style.display = "block";
    home.style.display = "none";
    gotohome.addEventListener("click",function(){
        home.style.display = "block";
        quiz_page.style.display = "none";
        window.location.reload();

    })

    restartquiz.addEventListener("click",function(){
        ages();
        reload();
        
    })



    const quizData = [{
        question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        a: "5 years",
        b: "4 years",
        c: "10 years",
        d: "15 years",
        correct: "b",
    },
    {
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        a: "1",
        b: "2",
        c: "6",
        d: "10",
        correct: "d",
    },
   
    {
        question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        a: "5 years",
        b: "4 years",
        c: "10 years",
        d: "15 years",
        correct: "b",
    },
    {
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        a: "1",
        b: "2",
        c: "6",
        d: "10",
        correct: "d",
    },

    {
        question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        a: "5 years",
        b: "4 years",
        c: "10 years",
        d: "15 years",
        correct: "b",
    },
    {
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        a: "1",
        b: "2",
        c: "6",
        d: "10",
        correct: "d",
    },

    {
        question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        a: "5 years",
        b: "4 years",
        c: "10 years",
        d: "15 years",
        correct: "b",
    },
    {
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        a: "1",
        b: "2",
        c: "6",
        d: "10",
        correct: "d",
    },

    {
        question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        a: "5 years",
        b: "4 years",
        c: "10 years",
        d: "15 years",
        correct: "b",
    },
    {
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        a: "1",
        b: "2",
        c: "6",
        d: "10",
        correct: "d",
    },
    
    ];
    let index = 0;
    let correct = 0,
    incorrect = 0,
    total = quizData.length;
    let questionBox = document.getElementById("questionBox");
    let allInputs = document.querySelectorAll("input[type='radio']")
    const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
    }
    
    document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
    )
    
    const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
    }
    
    const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
    }
    
    const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
    }
    loadQuestion(index);
    
    
    
}

function profit(){
   


    var quiz_page = document.querySelector(".quiz-page");
    var home = document.querySelector(".home");
    var gotohome = document.querySelector("#gotohome");
    var restartquiz = document.querySelector("#restartquiz");

    quiz_page.style.display = "block";
    home.style.display = "none";
    gotohome.addEventListener("click",function(){
        home.style.display = "block";
        quiz_page.style.display = "none";
        window.location.reload();

    })

    restartquiz.addEventListener("click",function(){
        profit();
        reload();
        
    })



    const quizData = [{
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        a: "5 ",
        b: "16",
        c: "10 ",
        d: "15 ",
        correct: "b",
    },
    {
        question: " A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        a: "1",
        b: "2",
        c: "6",
        d: "5",
        correct: "d",
    },
    

    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        a: "5 ",
        b: "16",
        c: "10 ",
        d: "15 ",
        correct: "b",
    },
    {
        question: " A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        a: "1",
        b: "2",
        c: "6",
        d: "5",
        correct: "d",
    },

    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        a: "5 ",
        b: "16",
        c: "10 ",
        d: "15 ",
        correct: "b",
    },
    {
        question: " A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        a: "1",
        b: "2",
        c: "6",
        d: "5",
        correct: "d",
    },

    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        a: "5 ",
        b: "16",
        c: "10 ",
        d: "15 ",
        correct: "b",
    },
    {
        question: " A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        a: "1",
        b: "2",
        c: "6",
        d: "5",
        correct: "d",
    },

    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        a: "5 ",
        b: "16",
        c: "10 ",
        d: "15 ",
        correct: "b",
    },
    {
        question: " A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        a: "1",
        b: "2",
        c: "6",
        d: "5",
        correct: "d",
    },
    
    ];
    let index = 0;
    let correct = 0,
    incorrect = 0,
    total = quizData.length;
    let questionBox = document.getElementById("questionBox");
    let allInputs = document.querySelectorAll("input[type='radio']")
    const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
    }
    
    document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
    )
    
    const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
    }
    
    const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
    }
    
    const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
    }
    loadQuestion(index);
    
}








