import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function PlayerController({ controls, group }) {
    const [moveDirection, setMoveDirection] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
    });

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

    useFrame((state, delta) => {
        const speed = 2;
        if (group.current) {
            const translation = group.current.translation();

            if (moveDirection.forward) translation.z -= speed * delta;
            if (moveDirection.backward) translation.z += speed * delta;
            if (moveDirection.left) translation.x -= speed * delta;
            if (moveDirection.right) translation.x += speed * delta;

            group.current.setTranslation(translation, true);

            if (controls && controls.current) {
                controls.current.target.copy(translation);
                controls.current.update();
            }
        }
    });

    return null;
}
