import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Plane } from '@react-three/drei';
import PokemonCenter from './components/PokemonCenter_shadow';
import Pikachu from './components/Pikachu';
import * as THREE from 'three';
import { EffectComposer, SSAO } from '@react-three/postprocessing';

function App() {
  const controlsRef = useRef();

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.setClearColor(0xffcc99, 1);
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 10, 7.5]}
        intensity={1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
      <Environment preset="sunset" />
      <PokemonCenter position={[0, -1, 0]} />
      <Pikachu position={[0, -1.3, 1]} controls={controlsRef} />
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 4, 0]}
        args={[10, 10]}
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#ffcc99" />
      </Plane>
      <EffectComposer>
        <SSAO
          samples={31}
          radius={20}
          intensity={30}
          luminanceInfluence={0.6}
          color="black"
        />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
