import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createNetwork, createPacket, createAttackPacket, createLabel } from './devices.js';
import { createZone } from "./zones.js";
import { animatePacket, animateLabPacket,animatePharmacyPacket, animateAdminPacket, animateDatabasePacket, animateBackupPacket, animateAttackPacket } from "./animations.js";
import { startNetworkActivity } from "./interactions.js";

export function createScene() {

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050814);

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 12, 20);

    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.minDistance = 10;
controls.maxDistance = 60;

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(15, 20, 10);
    scene.add(directionalLight);

    // Ground
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(80,80),
        new THREE.MeshStandardMaterial({
            color:0x0a1d37
        })
    );

    plane.rotation.x = -Math.PI/2;
    scene.add(plane);

// Create Network Devices
createNetwork(scene);
startNetworkActivity();
scene.add(createLabel("Internet", 0, 4.5, 15));
scene.add(createLabel("Firewall", 0, 3.2, 10));
scene.add(createLabel("Router", 0, 3.2, 5));
scene.add(createLabel("Core Switch", 0, 2.8, 0));

scene.add(createLabel("Database Server", -1.2, 3.8, -10));
scene.add(createLabel("Backup Server", -1.2, 3.8, -15));

scene.add(createLabel("ICU", 10, 3.2, -10));
scene.add(createLabel("Laboratory", 10, 3.2, -2));
scene.add(createLabel("Pharmacy", 10, 3.2, 6));
scene.add(createLabel("Administration", 10, 3.2, 14));
const packet = createPacket(scene, 0, 2.8, 14.29);
const packet2 = createPacket(scene, 0, 2.8, 14.29);
const packet3 = createPacket(scene, 0, 2.8, 14.29);
const packet4 = createPacket(scene, 0, 2.8, 14.29);
const packet5 = createPacket(scene, 0, 2.8, 14.29);
const packet6 = createPacket(scene, 0, 2.8, 14.29);
const attackPacket = createAttackPacket(scene,0, 2.8, 14.29);

// Create Department Zones
createZone(scene,10,-10,"ICU",0x3b82f6);


createZone(scene,10,-2,"Laboratory",0x22c55e);

createZone(scene,10,6,"Pharmacy",0xf59e0b);

createZone(scene,10,14,"Administration",0x64748b);

    function animate(){
        requestAnimationFrame(animate);
        controls.update();
        animatePacket(packet);
        animateLabPacket(packet2)
        animatePharmacyPacket(packet3)
        animateAdminPacket(packet4)
        animateDatabasePacket(packet5)
        animateBackupPacket(packet6)
        animateAttackPacket(attackPacket)
        renderer.render(scene,camera);
    }

    animate();

    window.addEventListener('resize',()=>{
        camera.aspect=window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);
    });

}