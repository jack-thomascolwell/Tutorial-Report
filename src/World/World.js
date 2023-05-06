import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { loadBirds } from './components/birds/birds.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

let camera, renderer, scene, loop, controls;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        controls = createControls(camera, renderer.domElement);

        const lights = createLights();
        scene.add(lights);

        loop.updatables.push(controls);

        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {
        const birds = await loadBirds();
        controls.target.copy(birds.position);
        scene.add(birds);
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }
    
    stop() {
        loop.stop();
    }
}

export {World};