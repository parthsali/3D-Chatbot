import React from "react";
import { Billboard, Html, Text } from "@react-three/drei";
import { useStore } from "../store";

import * as THREE from "three";
const Button = () => {
  const handleClick = () => {
    useStore.setState({ sayHello: true });

    setTimeout(() => {
      useStore.setState({ sayHello: false });
    }, 4670);
  };
  return (
    <Billboard position={[-0.6, -1.5, 0]}>
      <Html>
        <button onClick={handleClick} className="pushable">
          <span className="front">Hello!</span>
        </button>
      </Html>
    </Billboard>
  );
};

export default Button;
