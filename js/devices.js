import * as THREE from 'three';

function createFirewall(scene) {

    const firewall = new THREE.Group();
    firewall.position.set(0, 0,0);


    // ===== Main Body =====
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(4.8, 0.8, 2.4),
        new THREE.MeshStandardMaterial({
            color: 0x2b2b2b,
            metalness: 0.6,
            roughness: 0.5
        })
    );

    body.position.set(0, 1, 10);
    firewall.add(body);

    // ===== Front Panel =====
    const front = new THREE.Mesh(
        new THREE.BoxGeometry(4.7, 0.55, 0.06),
        new THREE.MeshStandardMaterial({
            color: 0x3d3d3d
        })
    );

    front.position.set(0, 1, 11.23);
    firewall.add(front);

    // ===== Ventilation Slots =====
    for (let i = -1.8; i <= 1.8; i += 0.3) {

        const slot = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, 0.03, 0.03),
            new THREE.MeshStandardMaterial({
                color: 0x111111
            })
        );

        slot.position.set(i, 1.22, 11.26);
        firewall.add(slot);
    }

    // ===== Status LEDs =====
    const ledColors = [
        0x00ff00,
        0x00ff00,
        0xffff00,
        0xff3333
    ];

    for (let i = 0; i < 4; i++) {

        const led = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 16, 16),
            new THREE.MeshStandardMaterial({
                color: ledColors[i],
                emissive: ledColors[i],
                emissiveIntensity: 1.5
            })
        );

        led.position.set(-2 + i * 0.25, 0.82, 11.25);

        firewall.add(led);
    }

    // ===== Ethernet Ports =====
    for (let i = 0; i < 8; i++) {

        const port = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, 0.12, 0.05),
            new THREE.MeshStandardMaterial({
                color: 0x111111
            })
        );

        port.position.set(-0.8 + i * 0.23, 0.82, 11.24);

        firewall.add(port);
    }

    // ===== Power Button =====
    const power = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.03, 20),
        new THREE.MeshStandardMaterial({
            color: 0xcc0000,
            emissive: 0x550000
        })
    );

    power.rotation.x = Math.PI / 2;
    power.position.set(2.05, 0.82, 11.24);

    firewall.add(power);

    // ===== Feet =====
    const footGeometry = new THREE.BoxGeometry(0.18, 0.1, 0.18);

    const footMaterial = new THREE.MeshStandardMaterial({
        color: 0x111111
    });

    const feet = [
        [-2.1, 0.55, 9.2],
        [ 2.1, 0.55, 9.2],
        [-2.1, 0.55,10.8],
        [ 2.1, 0.55,10.8]
    ];

    feet.forEach(pos => {

        const foot = new THREE.Mesh(footGeometry, footMaterial);

        foot.position.set(pos[0], pos[1], pos[2]);

        firewall.add(foot);

    });
scene.add(firewall);
return firewall;
}

function createRouter(scene) {
    const router = new THREE.Group();

    // ===== Main Body =====
    const body = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 0.8, 48),
        new THREE.MeshStandardMaterial({
            color: 0x2f3e46,
            metalness: 0.5,
            roughness: 0.45
        })
    );

    body.rotation.x = Math.PI / 2;
    body.position.set(0, 1, 5);
    router.add(body);

    // ===== Top Panel =====
    const top = new THREE.Mesh(
        new THREE.CylinderGeometry(1.05, 1.05, 0.05, 48),
        new THREE.MeshStandardMaterial({
            color: 0x46545c
        })
    );

    top.rotation.x = Math.PI / 2;
    top.position.set(0, 1.38, 5);
    router.add(top);

    // ===== Antenna Left =====
    const antenna1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.2, 16),
        new THREE.MeshStandardMaterial({
            color: 0x111111
        })
    );

    antenna1.position.set(-0.55, 2.0, 5);
    router.add(antenna1);

    // ===== Antenna Right =====
    const antenna2 = antenna1.clone();
    antenna2.position.x = 0.55;
    router.add(antenna2);

    // ===== LEDs =====
    const colors = [
        0x00ff00,
        0x00ff00,
        0xffff00
    ];

    for(let i=0;i<3;i++){

        const led = new THREE.Mesh(
            new THREE.SphereGeometry(0.05,16,16),
            new THREE.MeshStandardMaterial({
                color:colors[i],
                emissive:colors[i],
                emissiveIntensity:1.5
            })
        );

        led.position.set(-0.25 + i*0.25,1.42,5.95);

        router.add(led);

    }

    // ===== Feet =====
    [-0.7,0.7].forEach(x=>{

        const foot = new THREE.Mesh(

            new THREE.BoxGeometry(0.15,0.08,0.15),

            new THREE.MeshStandardMaterial({
                color:0x111111
            })

        );

        foot.position.set(x,0.6,5);

        router.add(foot);

    });
scene.add(router);
return router;
}

function createSwitch(scene){
    const core = new THREE.Group();

    // ===========================
    // MAIN BODY
    // ===========================

    const body = new THREE.Mesh(

        new THREE.BoxGeometry(6,0.8,2.4),

        new THREE.MeshStandardMaterial({

            color:0x2b2b2b,
            metalness:0.7,
            roughness:0.45

        })

    );

    body.position.set(0,1,0);

    core.add(body);

    // ===========================
    // FRONT PANEL
    // ===========================

    const front=new THREE.Mesh(

        new THREE.BoxGeometry(5.9,0.55,0.06),

        new THREE.MeshStandardMaterial({

            color:0x3d3d3d

        })

    );

    front.position.set(0,1,1.23);

    core.add(front);

    // ===========================
    // VENTILATION
    // ===========================

    for(let i=-2.4;i<=2.4;i+=0.25){

        const vent=new THREE.Mesh(

            new THREE.BoxGeometry(0.15,0.03,0.03),

            new THREE.MeshStandardMaterial({

                color:0x111111

            })

        );

        vent.position.set(i,1.22,1.26);

        core.add(vent);

    }

    // ===========================
    // STATUS LEDS
    // ===========================

    const ledColors=[
        0x00ff00,
        0x00ff00,
        0x00ffff,
        0xffff00
    ];

    for(let i=0;i<4;i++){

        const led=new THREE.Mesh(

            new THREE.SphereGeometry(0.05,16,16),

            new THREE.MeshStandardMaterial({

                color:ledColors[i],
                emissive:ledColors[i],
                emissiveIntensity:1.8

            })

        );

        led.position.set(-2.55+i*0.22,0.82,1.25);

        core.add(led);

    }

    // ===========================
    // 16 ETHERNET PORTS
    // ===========================

    for(let i=0;i<16;i++){

        const port=new THREE.Mesh(

            new THREE.BoxGeometry(0.18,0.12,0.05),

            new THREE.MeshStandardMaterial({

                color:0x111111

            })

        );

        port.position.set(-1.6+i*0.22,0.82,1.24);

        core.add(port);

    }

    // ===========================
    // SIDE HANDLES
    // ===========================

    [-2.95,2.95].forEach(x=>{

        const handle=new THREE.Mesh(

            new THREE.BoxGeometry(0.12,0.45,0.08),

            new THREE.MeshStandardMaterial({

                color:0x555555

            })

        );

        handle.position.set(x,1,1.18);

        core.add(handle);

    });

    // ===========================
    // RUBBER FEET
    // ===========================

    const feet=[

        [-2.6,0.55,-0.9],
        [ 2.6,0.55,-0.9],
        [-2.6,0.55, 0.9],
        [ 2.6,0.55, 0.9]

    ];

    feet.forEach(pos=>{

        const foot=new THREE.Mesh(

            new THREE.BoxGeometry(0.18,0.1,0.18),

            new THREE.MeshStandardMaterial({

                color:0x111111

            })

        );

        foot.position.set(pos[0],pos[1],pos[2]);

        core.add(foot);

    });
scene.add(core);
return core;
}

function createServer(scene, color, z) {
    const server = new THREE.Group();

    // ===========================
    // MAIN BODY
    // ===========================

    const body = new THREE.Mesh(

        new THREE.BoxGeometry(2.4,3.2,2),

        new THREE.MeshStandardMaterial({

            color:0x2b2b2b,
            metalness:0.7,
            roughness:0.45

        })

    );

    body.position.set(0,1.6,z);

    server.add(body);

    const accent = new THREE.Mesh(

    new THREE.BoxGeometry(2.3,0.12,0.05),

    new THREE.MeshStandardMaterial({

        color: color,

        emissive: color,

        emissiveIntensity: 0.8

    })

);

accent.position.set(0,3.0,z+1.04);

server.add(accent);

    // ===========================
    // FRONT PANEL
    // ===========================

    const front = new THREE.Mesh(

        new THREE.BoxGeometry(2.3,3,0.06),

        new THREE.MeshStandardMaterial({

            color:0x3d3d3d

        })

    );

    front.position.set(0,1.6,z+1.03);

    server.add(front);

    // ===========================
    // DRIVE BAYS
    // ===========================

    for(let row=0; row<5; row++){

        for(let col=0; col<2; col++){

            const bay = new THREE.Mesh(

                new THREE.BoxGeometry(0.7,0.28,0.05),

                new THREE.MeshStandardMaterial({

                    color:0x151515

                })

            );

            bay.position.set(

                -0.45 + col*0.9,

                2.5-row*0.55,

                z+1.04

            );

            server.add(bay);

        }

    }

    // ===========================
    // STATUS LEDS
    // ===========================

    const ledColours=[

        color,
        0x00ff00,
        0xffff00

    ];

    for(let i=0;i<3;i++){

        const led = new THREE.Mesh(

            new THREE.SphereGeometry(0.05,16,16),

            new THREE.MeshStandardMaterial({

                color:ledColours[i],
                emissive:ledColours[i],
                emissiveIntensity:2

            })

        );

        led.position.set(

            -0.8+i*0.18,

            0.45,

            z+1.05

        );

        server.add(led);

    }

    // ===========================
    // POWER BUTTON
    // ===========================

    const power = new THREE.Mesh(

        new THREE.CylinderGeometry(0.06,0.06,0.03,20),

        new THREE.MeshStandardMaterial({

            color:0x666666

        })

    );

    power.rotation.x=Math.PI/2;

    power.position.set(

        0.82,

        0.45,

        z+1.05

    );

    server.add(power);

    // ===========================
    // FEET
    // ===========================

    const feet=[

        [-1,0.05,z-0.8],
        [1,0.05,z-0.8],
        [-1,0.05,z+0.8],
        [1,0.05,z+0.8]

    ];

    feet.forEach(pos=>{

        const foot = new THREE.Mesh(

            new THREE.BoxGeometry(0.15,0.1,0.15),

            new THREE.MeshStandardMaterial({

                color:0x111111

            })

        );

        foot.position.set(pos[0],pos[1],pos[2]);

        server.add(foot);

    });
scene.add(server);
return server;
}


function createPC(scene, x, z) {
    const pc = new THREE.Group();

    // Monitor Frame
    const frame = new THREE.Mesh(
        new THREE.BoxGeometry(1.2,0.8,0.08),
        new THREE.MeshStandardMaterial({
            color:0x1b1b1b,
            metalness:0.6,
            roughness:0.4
        })
    );

    frame.position.set(x,1.6,z);
    pc.add(frame);

    // Screen
    const screen = new THREE.Mesh(
        new THREE.BoxGeometry(1.05,0.65,0.02),
        new THREE.MeshStandardMaterial({
            color:0x4fc3f7,
            emissive:0x1565c0,
            emissiveIntensity:0.8
        })
    );

    screen.position.set(x,1.6,z+0.05);
    pc.add(screen);

    // Stand
    const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03,0.03,0.45,16),
        new THREE.MeshStandardMaterial({
            color:0x555555
        })
    );

    stand.position.set(x,1.15,z);
    pc.add(stand);

    // Base
    const base = new THREE.Mesh(
        new THREE.BoxGeometry(0.45,0.05,0.3),
        new THREE.MeshStandardMaterial({
            color:0x333333
        })
    );

    base.position.set(x,0.92,z);
    pc.add(base);
scene.add(pc);
return pc;
}

function createInternet(scene){

    const material = new THREE.MeshStandardMaterial({
        color:0xffffff
    });

    const c1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.7,32,32),
        material
    );

    const c2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.8,32,32),
        material
    );

    const c3 = new THREE.Mesh(
        new THREE.SphereGeometry(0.7,32,32),
        material
    );

    const c4 = new THREE.Mesh(
        new THREE.SphereGeometry(0.6,32,32),
        material
    );

    c1.position.set(-0.8,3,15);
    c2.position.set(0,3.3,15);
    c3.position.set(0.8,3,15);
    c4.position.set(0,2.7,15);

    scene.add(c1);
    scene.add(c2);
    scene.add(c3);
    scene.add(c4);

}

function createCable(scene, x1, y1, z1, x2, y2, z2, color = 0x00ffff) {

    const points = [
        new THREE.Vector3(x1, y1, z1),
        new THREE.Vector3(x2, y2, z2)
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
        color: color
    });

    const cable = new THREE.Line(geometry, material);

    scene.add(cable);

    return cable;
}

function createBentCable(scene, points, color = 0x00ffff) {

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
        color: color
    });

    const cable = new THREE.Line(geometry, material);

    scene.add(cable);

    return cable;
}


// packets //
export function createPacket(scene, x, y, z) {

    const packet = new THREE.Mesh(

        new THREE.SphereGeometry(0.08, 16, 16),

        new THREE.MeshStandardMaterial({

            color: 0x00ffff,
            emissive: 0x00ffff,
            emissiveIntensity: 2

        })

    );

    packet.position.set(x, y, z);

    scene.add(packet);

    return packet;
}

export function createAttackPacket(scene, x, y, z) {

    const packet = new THREE.Mesh(

        new THREE.SphereGeometry(0.12, 16, 16),

        new THREE.MeshStandardMaterial({

            color: 0xff0000,

            emissive: 0xff0000,

            emissiveIntensity: 2

        })

    );

    packet.position.set(x, y, z);

    scene.add(packet);

    return packet;

}

export function createLabel(text, x, y, z) {

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 512;
    canvas.height = 128;

    context.fillStyle = "rgba(0,0,0,0.7)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "Bold 42px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(text, canvas.width / 2, 78);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true
    });

    const sprite = new THREE.Sprite(material);

    sprite.position.set(x, y, z);
    sprite.scale.set(4, 1, 1);

    return sprite;
}


export function createNetwork(scene){

    createInternet(scene);

    createFirewall(scene);

    createRouter(scene);

    createSwitch(scene);

    const icuPC = createPC(scene,10,-10);

    const labPC = createPC(scene,10,-2);

    const pharmacyPC = createPC(scene,10,6);

    const adminPC = createPC(scene,10,14);
    

    createServer(scene, 0x3399ff, -10, -2);

    createServer(scene, 0x9933ff, -15, 2);

    createCable(
    scene,
    0, 3, 15,      // Internet cloud
    0, 1.4, 10     // Firewall
);
// Firewall → Router
createCable(scene,
    0, 1.4, 10,
    0, 1.2, 5
);

// Router → Switch
createCable(scene,
    0, 1.2, 5,
    0, 1.0, 0
);

// Switch → Database Server
createCable(scene,
    0, 1.0, 0,
    0, 1.6, -10
);

// Switch → Backup Server
createBentCable(scene, [

    new THREE.Vector3(0, 1.0, 0),     // Switch

    new THREE.Vector3(-3, 1.0, 0),     // Move right

    new THREE.Vector3(-3, 1.0, -15),   // Go towards backup

    new THREE.Vector3(0, 1.6, -15)    // Enter backup server

]);

// Switch → ICU
createCable(scene,
    0, 1.0, 0,
    10, 1.6, -10
);

// Switch → Laboratory
createCable(scene,
    0, 1.0, 0,
    10, 1.6, -2
);

// Switch → Pharmacy
createCable(scene,
    0, 1.0, 0,
    10, 1.6, 6
);

// Switch → Administration
createCable(scene,
    0, 1.0, 0,
    10, 1.6, 14
);
    

}