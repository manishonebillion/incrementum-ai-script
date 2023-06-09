
// Select the form element and the loader elements 
const question_1 = document.querySelector('#question_1');
const result_text_1 = document.querySelector('#result_text_1');
const q_reason_block_1 = document.querySelector('#q_reason_block_1');

question_1.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Targeted Niche(TN)",
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
    }

});


const question_2 = document.querySelector('#question_2');
const result_text_2 = document.querySelector('#result_text_2');
const q_reason_block_2 = document.querySelector('#q_reason_block_2');

question_2.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Desirable Outcome(DO)",
                Question: "What is their desired outcome?",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_2");
                let question_2_data;
                if (data.Score !== null) {
                    result_text_2.innerText = data.Score;
                    q_reason_block_2.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_2_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_2.innerText = 0;
                    question_2_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_2", JSON.stringify(question_2_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_2.style.display = 'block';
            });
    }
});

const question_3 = document.querySelector('#question_3');
const result_text_3 = document.querySelector('#result_text_3');
const q_reason_block_3 = document.querySelector('#q_reason_block_3');

question_3.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "One-of-a-Kind Positioning(OP)",
                Question: "Why are you uniquely qualified to achieve this desired outcome?",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_3");
                let question_3_data;
                if (data.Score !== null) {
                    result_text_3.innerText = data.Score;
                    q_reason_block_3.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_3_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_3.innerText = 0;
                    question_3_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_3", JSON.stringify(question_3_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_3.style.display = 'block';
            });
    }
});


const question_4 = document.querySelector('#question_4');
const result_text_4 = document.querySelector('#result_text_4');
const q_reason_block_4 = document.querySelector('#q_reason_block_4');

question_4.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Effortless Implementation(EI)",
                Question: "How much effort is required for customers to achieve this outcome?",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_4");
                let question_4_data;
                if (data.Score !== null) {
                    result_text_4.innerText = data.Score;
                    q_reason_block_4.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_4_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_4.innerText = 0;
                    question_4_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_4", JSON.stringify(question_4_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_4.style.display = 'block';
            });
    }
});


const question_5 = document.querySelector('#question_5');
const result_text_5 = document.querySelector('#result_text_5');
const q_reason_block_5 = document.querySelector('#q_reason_block_5');

question_5.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "High Probability(HP)",
                Question: "What percentage of your customers achieve this desired outcome during your work together?",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_5");
                let question_5_data;
                if (data.Score !== null) {
                    result_text_5.innerText = data.Score;
                    q_reason_block_5.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_5_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_5.innerText = 0;
                    question_5_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_5", JSON.stringify(question_5_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_5.style.display = 'block';
            });
    }
});

const question_6 = document.querySelector('#question_6');
const result_text_6 = document.querySelector('#result_text_6');
const q_reason_block_6 = document.querySelector('#q_reason_block_6');

question_6.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Rapid Results(RR)",
                Question: "How long does it take for customers to achieve the desired outcome? (Rating from 0 to 10)",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_6");
                let question_6_data;
                if (data.Score !== null) {
                    result_text_6.innerText = data.Score;
                    q_reason_block_6.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_6_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_6.innerText = 0;
                    question_6_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_6", JSON.stringify(question_6_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_6.style.display = 'block';
            });
    }
});

const question_7 = document.querySelector('#question_7');
const result_text_7 = document.querySelector('#result_text_7');
const q_reason_block_7 = document.querySelector('#q_reason_block_7');

question_7.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Expiring Opportunity(EO)",
                Question: "Is your offer available for a limited time or to a limited number of people? (Yes/No)",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_7");
                let question_7_data;
                if (data.Score !== null) {
                    result_text_7.innerText = data.Score;
                    q_reason_block_7.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_7_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_7.innerText = 0;
                    question_7_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_7", JSON.stringify(question_7_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_7.style.display = 'block';
            });
    }
});

const question_8 = document.querySelector('#question_8');
const result_text_8 = document.querySelector('#result_text_8');
const q_reason_block_8 = document.querySelector('#q_reason_block_8');

question_8.addEventListener('blur', (event) => {

    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Premium Price(PP)",
                Question: "What is the price for your offer? (Enter number in USD)",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_8");
                let question_8_data;
                if (data.Score !== null) {
                    result_text_8.innerText = data.Score;
                    q_reason_block_8.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_8_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_8.innerText = 0;
                    question_8_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_8", JSON.stringify(question_8_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_8.style.display = 'block';
            });
    }
});

const question_9 = document.querySelector('#question_9');
const result_text_9 = document.querySelector('#result_text_9');
const q_reason_block_9 = document.querySelector('#q_reason_block_9');

question_9.addEventListener('blur', (event) => {
    if (event.target.value) {
        // Make an API call to our Make cenario
        fetch('http://52.8.169.139:5000/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Metric: "Risk Reduction(RISK)",
                Question: "Does your offer reverse risk with a guarantee? (Yes/No)",
                Answer: event.target.value
            })
        })
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                console.log('response', data);
                localStorage.removeItem("question_9");
                let question_9_data;
                if (data.Score !== null) {
                    result_text_9.innerText = data.Score;
                    q_reason_block_9.innerText = "Reason: " + (data.Reason ? data.Reason : '');
                    question_9_data = {
                        "Metric": data.Metric,
                        "score": parseInt(data.Score),
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason,
                    }
                } else {
                    result_text_9.innerText = 0;
                    question_9_data = {
                        "Metric": data.Metric,
                        "score": 0,
                        "suggestion": data.Suggestions,
                        "Reason": data.Reason
                    }
                }
                localStorage.setItem("question_9", JSON.stringify(question_9_data));
            })
            .catch((error) => {
                // Code executed when an error occurs in the promise chain
                console.error('Error:', error);
            })
            .finally(() => {
                q_reason_block_9.style.display = 'block';
            });
    }
});


const form = document.querySelector('#wf-form-generator');
const resultWrap = document.querySelector('#statement-component');
const resultLoader_1 = document.querySelector('#statement-loader-1');
const resultLoader_2 = document.querySelector('#statement-loader-2');
const resultText = document.querySelector('#statement-text');
const question_avg_score_heading = document.querySelector('#question_avg_score_heading');
const suggestions_body = document.querySelector('#suggestions_body');
const offer_wrap_container = document.querySelector('#offer_wrap_container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Show the div that will contain the response and scroll to it
    resultWrap.style.display = "block";
    resultLoader_1.style.display = "flex";
    resultLoader_2.style.display = "flex";
    resultWrap.scrollIntoView({ behavior: "smooth" });

    fetch('http://52.8.169.139:5000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "",
            Question: "OFFER OPTIMIZATION",
            Answer: ""
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            const optimizedOffer = data["OPTIMIZED OFFER"];
            const offerScore = data["Offer Score"];

            if (optimizedOffer) {
                question_avg_score_heading.innerHTML = '<div>Current Offer Analysis: ' + offerScore + ' / 90 </div>';
                let suggestions = optimizedOffer.split("\n\n");
                console.log('suggestions', suggestions);
                let suggestion_html = '';
                for (let index = 0; index < suggestions.length; index++) {
                    suggestion_html += '<div style="margin-top: 10px">' + suggestions[index] + '</div>';
                }
                suggestions_body.innerHTML = suggestion_html;
            } else {
                offer_wrap_container.innerHTML = '<div>Response error</div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            resultLoader_1.style.display = "none";
            fetchRewrittenOffer();
        });
});

const fetchRewrittenOffer = () => {

    fetch('http://52.8.169.139:5000/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Metric: "",
            Question: "REWRITTEN OFFER",
            Answer: ""
        })
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            const offer_a = data["OFFER A"];
            const offer_b = data["OFFER B"];
            const offer_c = data["OFFER C"];
            const score_a = data["SCORE A"];
            const score_b = data["SCORE B"];
            const score_c = data["SCORE C"];

            if (offer_a && offer_b && offer_c) {
                offer_html = '';
                offer_html += '<div style="margin-top: 10px"> SCORE A: ' + score_a + ' <br> OFFER A: ' + offer_a + '</div>';
                offer_html += '<div style="margin-top: 10px"> SCORE B: ' + score_b + ' <br> OFFER B: ' + offer_b + '</div>';
                offer_html += '<div style="margin-top: 10px"> SCORE C: ' + score_c + ' <br> OFFER C: ' + offer_c + '</div>';
                offer_wrap_container.innerHTML = offer_html;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            resultLoader_2.style.display = "none";
        });
}

const back_btn = document.querySelector('#back-btn');
back_btn.addEventListener('click', (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const generate_new_offer = document.querySelector('#generate_new_offer');
generate_new_offer.addEventListener('click', (event) => {
    window.location.reload();
})