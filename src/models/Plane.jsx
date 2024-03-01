import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';

import planeScene from '../assets/3d/plane.glb';
import { useFrame } from '@react-three/fiber';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  // make the plane move forward
  const radius = 3; // Radius of the circle
  const speed = 0.8; // Speed of the plane
  const height = 2; // Height above the ground

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Calculate circular path
    ref.current.position.x = Math.cos(elapsedTime * speed) * radius;
    ref.current.position.z = Math.sin(elapsedTime * speed) * radius;
    ref.current.position.y = height;

    // Adjust plane rotation to face forward along the path
    ref.current.rotation.y = -elapsedTime * speed;
  });

  return (
    <mesh {...props}>
      <primitive object={scene} ref={ref} />
    </mesh>
  );
};

export default Plane;
