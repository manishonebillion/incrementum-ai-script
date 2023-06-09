
// Select the form element and the loader elements 
const question_1 = document.querySelector('#question_1');
const result_text_1 = document.querySelector('#result_text_1');

question_1.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Targeted Niche (TN)",
            input: "Who is your target market?",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_1");
            localStorage.setItem("question_1", data);
            if (data.score !== null) {
                result_text_1.innerText = data.score
            } else {
                result_text_1.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});


const question_2 = document.querySelector('#question_2');
const result_text_2 = document.querySelector('#result_text_2');

question_2.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Desirable Outcome (DO)",
            input: "What is their desired outcome?",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_2");
            localStorage.setItem("question_2", data);
            if (data.score !== null) {
                result_text_2.innerText = data.score
            } else {
                result_text_2.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const question_3 = document.querySelector('#question_3');
const result_text_3 = document.querySelector('#result_text_3');

question_3.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "One-of-a-Kind Positioning (OP)",
            input: "Why are you uniquely qualified to achieve this desired outcome?",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_3");
            localStorage.setItem("question_3", data);
            if (data.score !== null) {
                result_text_3.innerText = data.score
            } else {
                result_text_3.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});


const question_4 = document.querySelector('#question_4');
const result_text_4 = document.querySelector('#result_text_4');

question_4.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Effortless Implementation (EI)",
            input: "How much effort is required for customers to achieve this outcome?",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_4");
            localStorage.setItem("question_4", data);
            if (data.score !== null) {
                result_text_4.innerText = data.score
            } else {
                result_text_4.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});


const question_5 = document.querySelector('#question_5');
const result_text_5 = document.querySelector('#result_text_5');

question_5.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "High Probability (HP)",
            input: "What percentage of your customers achieve this desired outcome during your work together?",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_5");
            localStorage.setItem("question_5", data);
            if (data.score !== null) {
                result_text_5.innerText = data.score
            } else {
                result_text_5.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const question_6 = document.querySelector('#question_6');
const result_text_6 = document.querySelector('#result_text_6');

question_6.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Rapid Results (RR)",
            input: "How long does it take for customers to achieve the desired outcome? (Rating from 0 to 10)",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_6");
            localStorage.setItem("question_6", data);
            if (data.score !== null) {
                result_text_6.innerText = data.score
            } else {
                result_text_6.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const question_7 = document.querySelector('#question_7');
const result_text_7 = document.querySelector('#result_text_7');

question_7.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Expiring Opportunity (EO)",
            input: "Is your offer available for a limited time or to a limited number of people? (Yes/No)",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_7");
            localStorage.setItem("question_7", data);
            if (data.score !== null) {
                result_text_7.innerText = data.score
            } else {
                result_text_7.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const question_8 = document.querySelector('#question_8');
const result_text_8 = document.querySelector('#result_text_8');

question_8.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Premium Price (PP)",
            input: "What is the price for your offer? (Enter number in USD)",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_8");
            localStorage.setItem("question_8", data);
            if (data.score !== null) {
                result_text_8.innerText = data.score
            } else {
                result_text_8.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

const question_9 = document.querySelector('#question_9');
const result_text_9 = document.querySelector('#result_text_9');

question_9.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://54.67.124.18:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Risk Reduction (RISK)",
            input: "Does your offer reverse risk with a guarantee? (Yes/No)",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_9");
            localStorage.setItem("question_9", data);
            if (data.score !== null) {
                result_text_9.innerText = data.score
            } else {
                result_text_9.innerText = 0
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

});


const form = document.querySelector('#wf-form-generator');
const resultWrap = document.querySelector('#statement-component');
const resultLoader = document.querySelector('#statement-loader');
const resultText = document.querySelector('#statement-text');
const suggestion_wrap = document.querySelector('#suggestion_wrap_id');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('abcd');

    // Show the div that will contain the response and scroll to it
    resultWrap.style.display = "block";
    // resultLoader.style.display = "flex";
    resultWrap.scrollIntoView({behavior: "smooth"});


    let question_1 = localStorage.getItem("question_1");
    let question_2 = localStorage.getItem("question_2");
    let question_3 = localStorage.getItem("question_3");
    let question_4 = localStorage.getItem("question_4");
    let question_5 = localStorage.getItem("question_5");
    let question_6 = localStorage.getItem("question_6");
    let question_7 = localStorage.getItem("question_7");
    let question_8 = localStorage.getItem("question_8");
    let question_9 = localStorage.getItem("question_9");

    console.log('question_1', question_1);

    suggestion_wrap.innerHTML = '<p>Your Avarage score is: 45 / 90 </p>';
})