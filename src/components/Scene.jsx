import { OrbitControls, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import * as THREE from "three";

const Scene = () => {
  const texture = useTexture("textures/first.jpg");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls
        maxAzimuthAngle={THREE.MathUtils.degToRad(10)}
        minAzimuthAngle={-THREE.MathUtils.degToRad(10)}
        maxPolarAngle={THREE.MathUtils.degToRad(85)}
        minPolarAngle={THREE.MathUtils.degToRad(75)}
      />
      <Avatar position={[0, -4.5, 2]} scale={3} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width * 1.5, viewport.height * 1.5]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Scene;
