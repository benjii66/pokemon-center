// src/components/Ceiling.js
import React from 'react';
import { Plane } from '@react-three/drei';

const Ceiling = ({ position }) => {
    return (
        <Plane
            rotation={[Math.PI / 2, 0, 0]}  // Rotate the plane to be horizontal
            position={position}  // Adjust this position to set the height of the ceiling
            args={[10, 10]}  // Adjust the size if necessary
            receiveShadow
        >
            <meshStandardMaterial attach="material" color="#ffcc99" />
        </Plane>
    );
};

export default Ceiling;
