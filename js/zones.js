import * as THREE from 'three';

export function createZone(scene, x, z, title, color) {

    // ===========================
    // PLATFORM
    // ===========================

    const platform = new THREE.Mesh(

        new THREE.BoxGeometry(6, 0.3, 6),

        new THREE.MeshStandardMaterial({

            color: color,
            metalness: 0.3,
            roughness: 0.7

        })

    );

    platform.position.set(x,0.15,z);

    scene.add(platform);

    // ===========================
    // BORDER
    // ===========================

    const border = new THREE.Mesh(

        new THREE.BoxGeometry(6.2,0.05,6.2),

        new THREE.MeshStandardMaterial({

            color:0xffffff,

            emissive:0x444444

        })

    );

    border.position.set(x,0.33,z);

    scene.add(border);

    return platform;

}

