const http = require('http');

const xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

const server = http.createServer((req, res) => {
    let advice;

    let myRequest = new xmlhttprequest;

    myRequest.open("GET", "https://api.adviceslip.com/advice", true);

    myRequest.send();

    myRequest.onreadystatechange = () => {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            let convertedAdvice = JSON.parse(myRequest.responseText);
            console.log(convertedAdvice.slip.advice);
            advice = convertedAdvice.slip.advice;
            res.write(advice);
            res.end();
        }
    }

});

server.listen('3000');