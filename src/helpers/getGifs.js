const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=4DW17YMR8fIf5xnYXCh8WDbCpe1aCO2P`;
    console.log(url);
    const httpRequest = await fetch(url);
    const { data } = await httpRequest.json();
    
    const gifs = data.map((img) =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
}

export default getGifs;