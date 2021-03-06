'use strict';

// camera -> audio
function initAudio() {
	var listener = new THREE.AudioListener();
	camera.add( listener );
	
	audio.bgm = new Audio('sounds/bgm.ogg');
	audio.tutorial = new Audio('sounds/tutorial.ogg');
	audio.bgm.volume = 1.0; 
	audio.tutorial.volume = 1.0; 

	audio.axe = new THREE.Audio( listener ); 
	audio.axe.load( 'sounds/axe.ogg' ); 
	audio.axe.setRefDistance( 200 ); 
	audio.axe.setVolume(0.3); 
	audio.axe.setLoop(true); 
	
	audio.factory = new THREE.Audio( listener ); 
	audio.factory.load( 'sounds/factory.ogg' ); 
	audio.factory.setRefDistance( 200 ); 
	audio.factory.setVolume(0.8); 
	audio.factory.setLoop(true); 
	
	audio.die = new THREE.Audio( listener ); 
	audio.die.load( 'sounds/die.ogg' ); 
	audio.die.setRefDistance( 200 ); 
	audio.die.setVolume(0.5); 
	
	audio.explode = new THREE.Audio( listener ); 
	audio.explode.load( 'sounds/explode.ogg' ); 
	audio.explode.setRefDistance( 200 ); 
	
	audio.howl = new THREE.Audio( listener );
	audio.howl.load( 'sounds/howl.ogg' );
	audio.howl.setRefDistance( 100 );
	
	
	audio.fire = new THREE.Audio( listener );
	audio.fire.load( 'sounds/fire.ogg' );
	audio.fire.setRefDistance( 100 );
	
	audio.wind = new THREE.Audio( listener );
	audio.wind.load( 'sounds/wind.ogg' );
	audio.wind.setRefDistance( 100 );
	
	audio.water = new THREE.Audio( listener );
	audio.water.load( 'sounds/water.ogg' );
	audio.water.setRefDistance( 100 );
	
	audio.v_instruction = new THREE.Audio( listener );
	audio.v_instruction.load( 'sounds/v_instruction.ogg' );
	audio.v_instruction.setRefDistance( 100 );
	
	audio.v_fire = new THREE.Audio( listener );
	audio.v_fire.load( 'sounds/v_fire.ogg' );
	audio.v_fire.setRefDistance( 100 );
	
	audio.v_water = new THREE.Audio( listener );
	audio.v_water.load( 'sounds/v_water.ogg' );
	audio.v_water.setRefDistance( 100 );
	
	audio.v_wind = new THREE.Audio( listener );
	audio.v_wind.load( 'sounds/v_wind.ogg' );
	audio.v_wind.setRefDistance( 100 );
}
