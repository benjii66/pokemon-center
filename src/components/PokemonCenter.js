import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export function PokemonCenter(props) {
    const { scene } = useGLTF('/models/pokecenter/pokemon_center_emerald.glb', true);

    useMemo(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.frustumCulled = true; // Ensure frustum culling is enabled
                child.material = new MeshStandardMaterial({ color: child.material.color });
            }
        });
    }, [scene]);

    return <primitive object={scene} {...props} />;
}
