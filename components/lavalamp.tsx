import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MarchingCubes, MarchingCube, MeshTransmissionMaterial, Environment, Bounds, Text } from "@react-three/drei";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";

function MetaBall({ color, vec = new THREE.Vector3(), ...props }) {
    const api = useRef();
    useFrame((state, delta) => {
        delta = Math.min(delta, 0.1);
        if (api.current) {
            api.current.applyImpulse(
                vec
                    .copy(api.current.translation())
                    .normalize()
                    .multiplyScalar(delta * -0.05),
            );
        }
    });
    return (
        <RigidBody ref={api} colliders={false} linearDamping={4} angularDamping={0.95} {...props}>
            <MarchingCube strength={0.4} subtract={6} color={color} />
            <BallCollider args={[0.1]} type="dynamic" />
        </RigidBody>
    );
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef();
    useFrame(({ pointer, viewport, clock }) => {
        const { width, height } = viewport.getCurrentViewport();
        const elapsedTime = clock.getElapsedTime();

        const frequency = 0.3; // Change this value between 0 and 10 to adjust the frequency
        const oscillatingY = Math.cos(elapsedTime * frequency) / 0.5; // Adjust the multiplier for desired amplitude
        console.log(oscillatingY);
        vec.set(pointer.x * (width / 2), oscillatingY, 0);
        if (ref.current) {
            ref.current.setNextKinematicTranslation(vec);
        }
    });
    return (
        <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
            <MarchingCube strength={1} subtract={15} color="white" />
            <BallCollider args={[0.1]} type="dynamic" />
        </RigidBody>
    );
}

export default function LavaLamp() {
    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: "-100" }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                <ambientLight intensity={10} />
                <Physics gravity={[0, 4, 0]}>
                    <MarchingCubes resolution={80} maxPolyCount={20000} enableUvs={false} enableColors>
                        <meshStandardMaterial vertexColors thickness={15} roughness={0} />
                        <MetaBall color="white" position={[0.2, 0.2, 0.2]} />
                        <MetaBall color="white" position={[-0.2, -0, -0]} />
                        <MetaBall color="#3d5aa4" position={[0.4, 0.2, 0.5]} />
                        <MetaBall color="white" position={[0.4, -0.2, 0.4]} />
                        <MetaBall color="white" position={[-0.2, -0.4, -0]} />
                        <MetaBall color="white" position={[0.2, 0, 0.4]} />
                        <MetaBall color="white" position={[-0.2, -0.4, -0.5]} />
                        <Pointer />
                    </MarchingCubes>
                </Physics>
                {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
                <Bounds fit clip observe margin={1}>
                    <mesh visible={false}>
                        <boxGeometry />
                    </mesh>
                </Bounds>
            </Canvas>
        </div>
    );
}
