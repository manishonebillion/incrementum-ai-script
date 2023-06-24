
// Select the form element and the loader elements 
const question_1 = document.querySelector('#question_1');
const result_text_1 = document.querySelector('#result_text_1');
const q_reason_block_1 = document.querySelector('#q_reason_block_1');

question_1.addEventListener('blur', (event) => {

    // Make an API call to our Make cenario
    fetch('http://52.8.169.139:5000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "Targeted Niche (TN)",
            Question: "Who is your target market?",
            Answer: event.target.value
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            console.log('response', data);
            localStorage.removeItem("question_1");
            let question_1_data;
            if (data.Score !== null) {
                result_text_1.innerText = data.Score;
                q_reason_block_1.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                question_1_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.Score),
                    "suggestion": data.Suggestions,
                    "Reason": data.Reason,
                }
            } else {
                result_text_1.innerText = 0;
                question_1_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.Suggestions,
                    "Reason": data.Reason
                }
            }
            localStorage.setItem("question_1", JSON.stringify(question_1_data));
        })
        .catch((error) => {
            // Code executed when an error occurs in the promise chain
            console.error('Error:', error);
        })
        .finally(() => {
            q_reason_block_1.style.display = 'block';
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
            let question_2_data;
            if (data.score !== null) {
                result_text_2.innerText = data.score;
                question_2_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_2.innerText = 0;
                question_2_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_2", JSON.stringify(question_2_data));
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
            let question_3_data;
            if (data.score !== null) {
                result_text_3.innerText = data.score;
                question_3_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_3.innerText = 0;
                question_3_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_3", JSON.stringify(question_3_data));
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
            let question_4_data;
            if (data.score !== null) {
                result_text_4.innerText = data.score;
                question_4_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_4.innerText = 0;
                question_4_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_4", JSON.stringify(question_4_data));
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
            let question_5_data;
            if (data.score !== null) {
                result_text_5.innerText = data.score;
                question_5_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_5.innerText = 0;
                question_5_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_5", JSON.stringify(question_5_data));
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
            let question_6_data;
            if (data.score !== null) {
                result_text_6.innerText = data.score;
                question_6_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_6.innerText = 0;
                question_6_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_6", JSON.stringify(question_6_data));
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
            let question_7_data;
            if (data.score !== null) {
                result_text_7.innerText = data.score;
                question_7_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_7.innerText = 0;
                question_7_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_7", JSON.stringify(question_7_data));
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
            let question_8_data;
            if (data.score !== null) {
                result_text_8.innerText = data.score;
                question_8_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_8.innerText = 0;
                question_8_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_8", JSON.stringify(question_8_data));
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
            let question_9_data;
            if (data.score !== null) {
                result_text_9.innerText = data.score;
                question_9_data = {
                    "Metric": data.Metric,
                    "score": parseInt(data.score),
                    "suggestion": data.suggestion
                }
            } else {
                result_text_9.innerText = 0;
                question_9_data = {
                    "Metric": data.Metric,
                    "score": 0,
                    "suggestion": data.suggestion
                }
            }
            localStorage.setItem("question_9", JSON.stringify(question_9_data));
        })
        .catch(error => {
            console.error('Error:', error);
        });

});


const form = document.querySelector('#wf-form-generator');
const resultWrap = document.querySelector('#statement-component');
const resultLoader = document.querySelector('#statement-loader');
const resultText = document.querySelector('#statement-text');
const question_avg_score_heading = document.querySelector('#question_avg_score_heading');
const suggestions_body = document.querySelector('#suggestions_body');
const offer_wrap_container = document.querySelector('#offer_wrap_container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('abcd');

    // Show the div that will contain the response and scroll to it
    resultWrap.style.display = "block";
    resultLoader.style.display = "flex";
    resultWrap.scrollIntoView({ behavior: "smooth" });

    let question_1 = JSON.parse(localStorage.getItem("question_1"));
    let question_2 = JSON.parse(localStorage.getItem("question_2"));
    let question_3 = JSON.parse(localStorage.getItem("question_3"));
    let question_4 = JSON.parse(localStorage.getItem("question_4"));
    let question_5 = JSON.parse(localStorage.getItem("question_5"));
    let question_6 = JSON.parse(localStorage.getItem("question_6"));
    let question_7 = JSON.parse(localStorage.getItem("question_7"));
    let question_8 = JSON.parse(localStorage.getItem("question_8"));
    let question_9 = JSON.parse(localStorage.getItem("question_9"));

    console.log('question_1', question_1);

    //calculate avg score
    let total_score = parseInt(question_1.score) + parseInt(question_2.score) + parseInt(question_3.score) + parseInt(question_4.score) + parseInt(question_5.score) + parseInt(question_6.score) + parseInt(question_7.score) + parseInt(question_8.score) + parseInt(question_9.score);
    console.log('total_score', total_score);
    let avg_score = Math.round(total_score / 9);
    console.log('avg_score', avg_score);

    question_avg_score_heading.innerHTML = '<div>Current Offer Analysis: ' + total_score + ' / 90 </div>';
    let suggestions_body_html = '<div style="margin-top: 10px"> - ' + question_1.Metric + ' score: ' + question_1.score + '<br>' + question_1.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_2.Metric + ' score: ' + question_2.score + '<br>' + question_2.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_3.Metric + ' score: ' + question_3.score + '<br>' + question_3.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_4.Metric + ' score: ' + question_4.score + '<br>' + question_4.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_5.Metric + ' score: ' + question_5.score + '<br>' + question_5.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_6.Metric + ' score: ' + question_6.score + '<br>' + question_6.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_7.Metric + ' score: ' + question_7.score + '<br>' + question_7.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_8.Metric + ' score: ' + question_8.score + '<br>' + question_8.suggestion + '</div>';
    suggestions_body_html += '<div style="margin-top: 5px"> - ' + question_9.Metric + ' score: ' + question_9.score + '<br>' + question_9.suggestion + '</div>';

    suggestions_body.innerHTML = suggestions_body_html;

    let inputs = '- ' + question_1.Metric + ' score: ' + question_1.score + ' ' + question_1.suggestion;
    inputs += '- ' + question_2.Metric + ' score: ' + question_2.score + ' ' + question_2.suggestion;
    inputs += '- ' + question_3.Metric + ' score: ' + question_3.score + ' ' + question_3.suggestion;
    inputs += '- ' + question_4.Metric + ' score: ' + question_4.score + ' ' + question_4.suggestion;
    inputs += '- ' + question_5.Metric + ' score: ' + question_5.score + ' ' + question_5.suggestion;
    inputs += '- ' + question_6.Metric + ' score: ' + question_6.score + ' ' + question_6.suggestion;
    inputs += '- ' + question_7.Metric + ' score: ' + question_7.score + ' ' + question_7.suggestion;
    inputs += '- ' + question_8.Metric + ' score: ' + question_8.score + ' ' + question_8.suggestion;
    inputs += '- ' + question_9.Metric + ' score: ' + question_9.score + ' ' + question_9.suggestion;

    fetch('http://54.67.124.18:5000/api/offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            input: inputs,
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            if (data.suggestion) {
                let suggestion = data.suggestion;
                let suggestions = suggestion.split("\n\n");
                console.log('suggestions', suggestions);
                let suggestion_html = '';
                for (let index = 0; index < suggestions.length; index++) {
                    suggestion_html += '<div style="margin-top: 10px">' + suggestions[index] + '</div>';
                }
                offer_wrap_container.innerHTML = suggestion_html;
            } else {
                offer_wrap_container.innerHTML = '<div>Response error</div>';
            }
            resultLoader.style.display = "none";
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const back_btn = document.querySelector('#back-btn');
back_btn.addEventListener('click', (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const generate_new_offer = document.querySelector('#generate_new_offer');
generate_new_offer.addEventListener('click', (event) => {
    window.location.reload();
})