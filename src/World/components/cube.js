import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader } from 'three';
const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = createMaterial();
    const cube = new Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.8);
    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };
    return cube;
}

function createMaterial() {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('/assets/textures/uv-test-bw.png');

    const material = new MeshStandardMaterial({ map: texture });
    return material;
}

export { createCube };