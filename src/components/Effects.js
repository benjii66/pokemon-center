import React, { useRef, useEffect } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { N8AO } from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';

extend({ RenderPass });

function Effects() {
    const composer = useRef();
    const { scene, camera, gl, size } = useThree();

    useEffect(() => {
        if (composer.current) {
            composer.current.setSize(size.width, size.height);
        }
    }, [size]);

    useFrame(() => {
        if (composer.current) {
            composer.current.render();
        }
    }, 1);

    return (
        <EffectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" args={[scene, camera]} />
            <N8AO
                attachArray="passes"
                args={[scene, camera]}
                samples={31}
                radius={20}
                intensity={30}
                luminanceInfluence={0.6}
                color="black"
            />
        </EffectComposer>
    );
}

export default Effects;
