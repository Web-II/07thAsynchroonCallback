function buildDeathStarAsync(){
  //do a lot of stuff, it takes time to build a death star (10sec simulated by setTimeOut)
  setTimeout(function(){
    const planet = {name:'Alderaan', moon:false }
    console.log(`Builded ${planet.name}, it took 10 seconds`);
    //return, do not work with timeout
    return planet;
  }, 2000)
}
function createACloneArmyAsync(){
  console.log('Cloned Army, go for war...');
}
function destroyPlanet(planet){
  //do a lot of stuff, it takes time to destroy a death star (2sec)
  setTimeout(function(){
    console.log(`Try to destroy planet`);
    console.log(planet.name === 'Alderaan'?'Aaaaaaargh, Alderaan destroyed\n'.repeat(10):'Nothing seriously happened')
  },10000); 
}

let notAMoon = buildDeathStarAsync();
createACloneArmyAsync();
destroyPlanet(notAMoon); 
