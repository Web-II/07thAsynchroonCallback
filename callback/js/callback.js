function buildDeathStarAsync(callbackParameter){
  //do a lot of stuff, it takes time to build a death star (10sec)
  setTimeout(function(){
    const planet = {name: 'Alderaan', moon:false}
    console.log(`Builded ${planet.name}, it took 10 seconds`);
    callbackParameter(planet)
  },10000);
}
function createACloneArmyAsync(){
  console.log('Cloned Army, go for war...');
}
function destroyPlanet(planet){
  //do a lot of stuff, it takes time to destroy a death star (2sec)
  setTimeout(function(){
    console.log(`Destroyed ${planet.name}, it took 2 seconds`);
    console.log(planet.name === 'Alderaan'?'Aaaaaaargh, Alderaan destroyed\n'.repeat(10):'Nothing seriously happened')
  },2000); 
}

buildDeathStarAsync(destroyPlanet);
createACloneArmyAsync();
