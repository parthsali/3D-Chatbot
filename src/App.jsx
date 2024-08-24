import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";

const App = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 4],
        fov: 50,
      }}
    >
      <OrbitControls />

      <Avatar position={[0, -4.5, 2]} scale={3} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default App;
