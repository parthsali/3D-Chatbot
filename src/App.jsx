import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import Scene from "./components/Scene";
import { Leva } from "leva";

const App = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 6],
        fov: 50,
      }}
    >
      <Scene />
    </Canvas>
  );
};

export default App;
