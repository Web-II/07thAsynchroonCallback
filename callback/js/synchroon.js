function buildDeathStar(){
  //do a lot of stuff, it takes time to build a death star
  const planet = {name: 'Alderaan', moon:false};
  console.log(`Builded ${planet.name}`);
  return planet;
}
function destroyPlanet(planet){
  //do a lot of stuff, it takes time to build a death star
  console.log(`Destroyed ${planet.name} `); 
  return planet.name === 'Alderaan'?'Aaaaaaargh, Alderaan destroyed\n':'Nothing seriously happened\n'; 
}
function aMillionVoicesCriedOut(cry){
  return cry.repeat(10);
}
let notAMoon = buildDeathStar(); 
let alderaan = destroyPlanet(notAMoon); 
let disturbedForce = aMillionVoicesCriedOut(alderaan); 

console.log(disturbedForce)
