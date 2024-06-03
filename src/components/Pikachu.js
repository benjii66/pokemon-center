import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody, CapsuleCollider } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import PlayerController from './PlayerController';

export default function Pikachu({ controls, isEditorMode, ...props }) {
  const group = useRef();
  const { scene } = useGLTF('/models/Pikachu/source/pikachu.glb');

  useFrame(() => {
    if (group.current) {
      const rotation = group.current.rotation();
      rotation.x = 0;
      rotation.z = 0;
      group.current.setRotation(rotation);

      const position = group.current.translation();
      position.y = props.position[1];
      group.current.setTranslation(position);
    }
  });

  return (
    <RigidBody
      ref={group}
      colliders={false}
      position={props.position || [0, -1.28, 1]}
      type="dynamic"
      mass={10}
      angularDamping={50}
      linearDamping={50}
      friction={5}
      restitution={0.1}
    >
      <CapsuleCollider args={[0.1, 0.2]} position={[0, 0.9, 0]} />
      {isEditorMode && (
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.8, 0.5]} />
          <meshBasicMaterial color="cyan" wireframe opacity={0.5} transparent />
        </mesh>
      )}
      <primitive
        object={scene}
        scale={[0.02, 0.02, 0.02]}
        rotation={[0, Math.PI / 1, 0]}
        dispose={null}
      />
      <PlayerController controls={controls} group={group} />
    </RigidBody>
  );
}

useGLTF.preload('/models/Pikachu/source/pikachu.glb');
