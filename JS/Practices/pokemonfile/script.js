async function getpokeData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);

//     for (var idx = 0; idx < pokeData.results.length:) {
//     console.log(pokeData.results[idx].name)
//         break
//     }
// }
    
// getpokeData();
