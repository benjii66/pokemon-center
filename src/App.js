import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Plane, softShadows } from '@react-three/drei';
import PokemonCenter from './components/PokemonCenter_shadow'; // Assurez-vous que le chemin est correct
import * as THREE from 'three';
import { EffectComposer, SSAO } from '@react-three/postprocessing';

// Active les ombres douces
softShadows();

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      gl={{
        antialias: true, // Activer l'anti-aliasing pour une meilleure qualité visuelle
        powerPreference: 'high-performance',
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.setClearColor(0xffcc99, 1); // Couleur de fond pour un effet de coucher de soleil
      }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[10, 10, 10]}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
      <Environment preset="sunset" />
      <PokemonCenter position={[0, -1, 0]} />
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
