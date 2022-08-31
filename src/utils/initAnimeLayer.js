import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';



const loader = new GLTFLoader();

// init
export const init= ()=>{const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;
camera.rotation.z = 0.1;

const light = new THREE.AmbientLight( 0xffffff, 2 );

const scene = new THREE.Scene();
scene.add( light );

loader.load("/models/gibson/scene.gltf", (gltf) => {
	let model = gltf.scene;
	model.scale.set(1.25,1.25,0.10);
	// animate model
	gsap.to(camera.position, {duration: 3, x: -0.5, y: 0.5, z: 0.5,ease: "back.out(1.7)"});
	gsap.to(camera.rotation, {duration: 3,z:0});
	
	scene.add(model);
});


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

window.addEventListener("resize", ()=>{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}, false);
// animation

function animation( time ) {

	renderer.render( scene, camera );

}

}
export default init;