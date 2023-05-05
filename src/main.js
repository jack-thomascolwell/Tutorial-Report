import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from 'three';

const container = document.getElementById('scene-container');
const scene = new Scene();

scene.background = new Color('skyblue');

// camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; //near clipping
const far = 100; //far clipping
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

// create cube
const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);

// renderer
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);

// render
renderer.render(scene, camera);