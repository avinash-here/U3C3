// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let amount = localStorage.getItem("amount") || 0;

let wallet = document.getElementById('wallet');
wallet.innerText = amount;


let movie = JSON.parse(localStorage.getItem('movie'));

let poster = document.createElement('img');
poster.src = movie[0].Poster;

let title = document.createElement('h2');
title.innerText = movie[0].Title;

let div1 = document.createElement('div');
let div2 = document.createElement('div');

div1.append(poster);
div2.append(title);

document.getElementById('movie').append(div1,div2);




function ConfirmBooking(){
    
    let No_of_tickets = document.getElementById('number_of_seats').value;

    let cost = No_of_tickets*100;

    if(amount < cost)
    { alert('Insufficient Balance!'); }

    else if(amount >= cost)
    {
        alert('Booking Successful!');

        amount = amount-cost;

        localStorage.setItem('amount', amount);
        
        window.location.reload();  
    }
}

