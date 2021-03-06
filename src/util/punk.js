
const Punk = {
  search(query){
    return fetch(`https://api.punkapi.com/v2/beers?food=${query}`).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.value === ''){
        alert('Stop')
      } else if(jsonResponse){
        return jsonResponse.map(beer => {
          return {
            id: beer.id,
            image_url: beer.image_url,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            food_pairing: beer.food_pairing.join(". "),
            brewers_tips: beer.brewers_tips
          }
        })
      }
    });
  }
}

export default Punk;
