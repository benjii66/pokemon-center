import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Pikachu({ controls, ...props }) {
  const group = useRef();
  const { scene } = useGLTF('/models/Pikachu/source/pikachu.glb');
  const [moveDirection, setMoveDirection] = useState({ forward: false, backward: false, left: false, right: false });

  // Écouter les événements de clavier pour le mouvement
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'z':
          setMoveDirection((prev) => ({ ...prev, forward: true }));
          break;
        case 's':
          setMoveDirection((prev) => ({ ...prev, backward: true }));
          break;
        case 'q':
          setMoveDirection((prev) => ({ ...prev, left: true }));
          break;
        case 'd':
          setMoveDirection((prev) => ({ ...prev, right: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'z':
          setMoveDirection((prev) => ({ ...prev, forward: false }));
          break;
        case 's':
          setMoveDirection((prev) => ({ ...prev, backward: false }));
          break;
        case 'q':
          setMoveDirection((prev) => ({ ...prev, left: false }));
          break;
        case 'd':
          setMoveDirection((prev) => ({ ...prev, right: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Mettre à jour la position de Pikachu en fonction de la direction du mouvement
  useFrame((state, delta) => {
    const speed = 2;
    if (group.current) {
      if (moveDirection.forward) group.current.position.z -= speed * delta;
      if (moveDirection.backward) group.current.position.z += speed * delta;
      if (moveDirection.left) group.current.position.x -= speed * delta;
      if (moveDirection.right) group.current.position.x += speed * delta;

      // Mettre à jour la caméra pour suivre Pikachu
      if (controls && controls.current) {
        controls.current.target.copy(group.current.position);
        controls.current.update();
      }
    }
  });

  return <primitive ref={group} object={scene} scale={[0.02, 0.02, 0.02]} rotation={[0, Math.PI / 1, 0]} {...props} dispose={null} />;
}

useGLTF.preload('/models/Pikachu/source/pikachu.glb');
