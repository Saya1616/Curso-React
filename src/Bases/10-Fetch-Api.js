//Fetch-Api
const apiKey = 's0vktTdK7f2ocQuogDjI978eZL2rd62t';

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


httpCall.then(resp=> resp.json().then(({data})=> {
      
    const {url} = data.images.original
    console.log(url)
    const img = document.createElement('img');
    img.src= url;

    document.body.append(img)
})

    

).catch(console.warn)