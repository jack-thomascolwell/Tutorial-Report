import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';
const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'purple' });
    const cube = new Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.8);
    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };
    return cube;
}

export { createCube };