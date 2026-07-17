import * as THREE from "three";
import { addActivity } from "./interactions.js";

const path = [

    new THREE.Vector3(0, 2.8, 14.29),  // Actual cloud position

    new THREE.Vector3(0, 1.4, 10),     // Firewall

    new THREE.Vector3(0, 1.2, 5),      // Router

    new THREE.Vector3(0, 1.0, 0),      // Switch

    new THREE.Vector3(10, 1.6, -10)    // ICU

];

const labPath = [

    new THREE.Vector3(0, 2.8, 14.29),   // Cloud

    new THREE.Vector3(0, 1.4, 10),      // Firewall

    new THREE.Vector3(0, 1.2, 5),       // Router

    new THREE.Vector3(0, 1.0, 0),       // Switch

    new THREE.Vector3(10, 1.6, -2)      // Laboratory

];

const pharmacyPath = [

    new THREE.Vector3(0, 2.8, 14.29),

    new THREE.Vector3(0, 1.4, 10),

    new THREE.Vector3(0, 1.2, 5),

    new THREE.Vector3(0, 1.0, 0),

    new THREE.Vector3(10, 1.6, 6)

];
const adminPath = [

    new THREE.Vector3(0, 2.8, 14.29),

    new THREE.Vector3(0, 1.4, 10),

    new THREE.Vector3(0, 1.2, 5),

    new THREE.Vector3(0, 1.0, 0),

    new THREE.Vector3(10, 1.6, 14)

];

const databasePath = [

    new THREE.Vector3(0, 2.8, 14.29),

    new THREE.Vector3(0, 1.4, 10),

    new THREE.Vector3(0, 1.2, 5),

    new THREE.Vector3(0, 1.0, 0),

    new THREE.Vector3(0, 1.6, -10)

];

const backupPath = [

    new THREE.Vector3(0, 2.8, 14.29),

    new THREE.Vector3(0, 1.4, 10),

    new THREE.Vector3(0, 1.2, 5),

    new THREE.Vector3(0, 1.0, 0),

    new THREE.Vector3(-3, 1.0, 0),

    new THREE.Vector3(-3, 1.0, -15),

    new THREE.Vector3(-1.2, 1.6, -15)

];

const attackPath = [

    new THREE.Vector3(0, 2.8, 14.29),   // Internet

    new THREE.Vector3(0, 1.4, 10)       // Firewall

];

let segmentDatabase = 0;
let progressDatabase = -1.6;

let segment = 0;
let progress = 0;

let segmentLab = 0;
let progressLab = -0.4;

let segmentPharmacy = 0;
let progressPharmacy = -0.8;

let segmentAdmin = 0;
let progressAdmin = -1.2;

let segmentBackup = 0;
let progressBackup = -2.0;

let segmentAttack = 0;
let progressAttack = -2.4;

let attackRunning = false;

export function animatePacket(packet) {

    progress += 0.005;

    if (progress >= 1) {

        progress = 0;
        segment++;

        if (segment >= path.length - 1) {
            segment = 0;
        }

    }

    packet.position.lerpVectors(

        path[segment],
        path[segment + 1],
        progress

    );

}

export function animateLabPacket(packet) {

    progressLab += 0.005;

    if (progressLab < 0) return;

    if (progressLab >= 1) {

        progressLab = 0;
        segmentLab++;

        if (segmentLab >= labPath.length - 1) {

            segmentLab = 0;

        }

    }

    packet.position.lerpVectors(

        labPath[segmentLab],
        labPath[segmentLab + 1],
        progressLab

    );

}

export function animatePharmacyPacket(packet) {

    progressPharmacy += 0.005;

    if (progressPharmacy < 0) return;

    if (progressPharmacy >= 1) {

        progressPharmacy = 0;
        segmentPharmacy++;

        if (segmentPharmacy >= pharmacyPath.length - 1) {

            segmentPharmacy = 0;

        }

    }

    packet.position.lerpVectors(

        pharmacyPath[segmentPharmacy],
        pharmacyPath[segmentPharmacy + 1],
        progressPharmacy

    );

}

export function animateAdminPacket(packet) {

    progressAdmin += 0.005;

    if (progressAdmin < 0) return;

    if (progressAdmin >= 1) {

        progressAdmin = 0;
        segmentAdmin++;

        if (segmentAdmin >= adminPath.length - 1) {

            segmentAdmin = 0;

        }

    }

    packet.position.lerpVectors(

        adminPath[segmentAdmin],
        adminPath[segmentAdmin + 1],
        progressAdmin

    );

}

export function animateDatabasePacket(packet) {

    progressDatabase += 0.005;

    if (progressDatabase < 0) return;

    if (progressDatabase >= 1) {

        progressDatabase = 0;
        segmentDatabase++;

        if (segmentDatabase >= databasePath.length - 1) {

            segmentDatabase = 0;

        }

    }

    packet.position.lerpVectors(

        databasePath[segmentDatabase],
        databasePath[segmentDatabase + 1],
        progressDatabase

    );

}

export function animateBackupPacket(packet) {

    progressBackup += 0.005;

    if (progressBackup < 0) return;

    if (progressBackup >= 1) {

        progressBackup = 0;
        segmentBackup++;

        if (segmentBackup >= backupPath.length - 1) {

            segmentBackup = 0;

        }

    }

    packet.position.lerpVectors(

        backupPath[segmentBackup],
        backupPath[segmentBackup + 1],
        progressBackup

    );

}

export function animateAttackPacket(packet) {
     progressAttack += 0.005;

    if (progressAttack < 0) return;

    if (progressAttack >= 1 && !attackRunning) {

    attackRunning = true;
    packet.visible = false;

    document.getElementById("threatAlert").style.display = "block";

    setTimeout(() => {

    document.getElementById("threatAlert").style.display = "none";

}, 5000);
    
    setTimeout(() => {

    packet.visible = true;

    packet.position.copy(attackPath[0]);

    progressAttack = 0;
    attackRunning = false;

}, 17000);

    return;

}

    packet.position.lerpVectors(

        attackPath[segmentAttack],
        attackPath[segmentAttack + 1],
        progressAttack

    );

}