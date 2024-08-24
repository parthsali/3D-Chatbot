import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import Scene from "./components/Scene";

const App = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 4.5],
        fov: 50,
      }}
    >
      <Scene />
    </Canvas>
  );
};

export default App;
