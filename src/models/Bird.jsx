import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const bird = useGLTF(birdScene);
  const ref = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (ref.current.position.x > camera.position.x + 10) {
      // if the bird is behind the camera
      ref.current.rotation.y = Math.PI; // turn it around
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0; // move it forward
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={ref}>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
