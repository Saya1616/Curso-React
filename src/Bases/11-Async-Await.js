//Async

const getImagen = async() => {

    try {
        const apiKey = "s0vktTdK7f2ocQuogDjI978eZL2rd62t";
        const httpCall = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await httpCall.json();
        console.log(data);
        const { url } = data.images.original;
        const img = document.createElement("img");

        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.error(error)
        
    }



};


getImagen()






    
