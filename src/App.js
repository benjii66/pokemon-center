import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import PokemonCenter from './components/PokemonCenter_shadow';
import Pikachu from './components/Pikachu';
import * as THREE from 'three';
import { EffectComposer, SSAO } from '@react-three/postprocessing';
import HeightSlider from './components/HeightSlider';

function App() {
  const controlsRef = useRef();
  const pikachuRef = useRef();
  const [pikachuHeight, setPikachuHeight] = useState(-1.28);
  const [isEditorMode, setIsEditorMode] = useState(false);

  const handleHeightChange = (value) => {
    setPikachuHeight(value);
    if (pikachuRef.current) {
      pikachuRef.current.setTranslation({ x: pikachuRef.current.translation().x, y: value, z: pikachuRef.current.translation().z });
    }
  };

  const toggleEditorMode = () => {
    setIsEditorMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'b') {
        toggleEditorMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
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
          minDistance={1}
          maxDistance={10}
        />
        <Environment preset="sunset" />
        <Physics>
          <PokemonCenter position={[0, -1, 0]} isEditorMode={isEditorMode} />
          <Pikachu ref={pikachuRef} position={[0, pikachuHeight, 1]} controls={controlsRef} isEditorMode={isEditorMode} />
        </Physics>
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
      {isEditorMode && (
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
          <HeightSlider
            label="Pikachu Height"
            min={-3}
            max={3}
            step={0.01}
            value={pikachuHeight}
            onChange={handleHeightChange}
          />
          <div style={{ color: 'black', marginTop: '10px' }}>
            <div>Pikachu Rotation:</div>
            <div>X: {pikachuRef.current ? pikachuRef.current.rotation().x.toFixed(2) : 0}</div>
            <div>Y: {pikachuRef.current ? pikachuRef.current.rotation().y.toFixed(2) : 0}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
