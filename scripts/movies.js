// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let amount = localStorage.getItem("amount") || 0;

let wallet = document.getElementById('wallet');
wallet.innerText = amount;

let id;

async function Search()
{
    const url = 'https://www.omdbapi.com/?apikey=a5ad53a7&s=';
    let input = document.getElementById('search').value;

    const res = await fetch(url+input);

    const data = await res.json();
    
    const movies = data.Search;
        
    return movies;    
     
}

let movies_div = document.getElementById('movies');

function AppendData(data){

    movies_div.innerHTML = null;

    data.forEach((el) => {

        if(el.Poster !== 'N/A')
        {
            let poster = document.createElement('img');
            poster.src = el.Poster;
            poster.style.width = '100%';
            poster.style.height = '400px';

            let title = document.createElement('p');
            title.innerText = el.Title;

            let btn = document.createElement('button');
            btn.innerHTML = '<a href="checkout.html">Book Now</a>';
            btn.setAttribute('class','book_now');
            btn.addEventListener('click', function(){
                Checkout(el);
            })

            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');

            div2.append(poster);
            div3.append(title,btn)

            div1.append(div2,div3);

            movies_div.append(div1);
        }
    })
}


async function Main(){   
       
    let data = await Search();

    if(data === undefined)
    { return false; }

    AppendData(data);    
}


function DeBounce(delay){
    
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(() => {
        Main();
    },delay)
}




function Checkout(el){

    let movie = [];

    movie.push(el);

    localStorage.setItem('movie', JSON.stringify(movie));
}


