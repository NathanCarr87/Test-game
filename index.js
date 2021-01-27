// Import stylesheets
import "./style.css";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

var createScene = function() {
  var scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    3,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  return scene;
};

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
// Add your code here matching the playground format
const scene = createScene(); //Call the createScene function
const ground = BABYLON.MeshBuilder.CreateGround("ground", {
  width: 10,
  height: 10
});

const importObj = function() {
  // BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
  BABYLON.SceneLoader.Append("/assets/", "chr_sword.obj", scene, scene => {
    console.log("Mesh Loaded");
  });
};

importObj();
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function() {
  engine.resize();
});
