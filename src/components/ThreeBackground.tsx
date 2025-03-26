import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Center } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, rotation, color }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.2}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>
    </Float>
  );
}

function CodeSphere() {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      ref={sphereRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#1a1a1a"
        metalness={0.5}
        roughness={0.2}
        wireframe
        transparent
        opacity={0.8}
        emissive={hovered ? '#4a90e2' : '#000000'}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  const codeElements = Array.from({ length: 10 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ],
    color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
  }));

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Center>
          <CodeSphere />
        </Center>

        {codeElements.map((element, index) => (
          <FloatingShape
            key={index}
            position={element.position}
            rotation={element.rotation}
            color={element.color}
          />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}