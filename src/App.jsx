import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import Scene from "./components/Scene";
import { Leva } from "leva";
import { Suspense, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <Canvas
        camera={{
          position: [0, 0.5, 6],
          fov: 50,
        }}
      >
        <Suspense fallback={null}>{start && <Scene />}</Suspense>
      </Canvas>
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  );
};

export default App;
