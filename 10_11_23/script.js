

const result = document.querySelector('.result');
const btn = document.getElementById('btn');


btn.addEventListener('click', logMovies);


async function logMovies() {
    const response = await fetch(" https://v2.jokeapi.dev/joke/Any?safe-mode");
    result.innerText ="";
    // console.log(response);
    const responseJson = await response.json();
    
    let text = responseJson.delivery;
     dom(result, text);
    
  }

  function dom( result, text)
  {
    let joke = document.createElement('h2');
    console.log(joke);
    joke.innerText= text;
    result.appendChild(joke)
  }

//   logMovies();