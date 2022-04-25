// Store the wallet amount to your local storage with key "amount"


let amount = localStorage.getItem("amount") || 0;

let wallet = document.getElementById('wallet');
wallet.innerText = amount;


function AddMoney()
{
    let money = document.getElementById('amount').value;
    
    if(amount !== '' || amount !== '0')
    {
        total = Number(amount) + Number(money);

        localStorage.setItem('amount', total);
        
        window.location.reload();        
    }


}
