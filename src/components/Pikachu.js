import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import PlayerController from './PlayerController';

export default function Pikachu({ controls, ...props }) {
  const group = useRef();
  const { scene } = useGLTF('/models/Pikachu/source/pikachu.glb');

  return (
    <>
      <primitive
        ref={group}
        object={scene}
        scale={[0.02, 0.02, 0.02]}
        rotation={[0, Math.PI / 1, 0]}
        {...props}
        dispose={null}
      />
      <PlayerController controls={controls} group={group} />
    </>
  );
}

useGLTF.preload('/models/Pikachu/source/pikachu.glb');
