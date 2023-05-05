import { AmbientLight, DirectionalLight, HemisphereLight, Group } from 'three';

function createLights() {
    const light = new DirectionalLight('white', 8);
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        5, // intensity
    );

    const mainLight = new DirectionalLight('white', 5);
    mainLight.position.set(10, 10, 10);

    const lights = new Group();
    lights.add(ambientLight);
    lights.add(mainLight);

    return lights;
}

export { createLights };