import { Canvas } from '@react-three/fiber'
import {
	AccumulativeShadows,
	RandomizedLight,
	Plane,
	OrbitControls,
} from '@react-three/drei'

const RotatingCard = () => {
	return (
		<group>
			{/* Front Side of the Card */}
			<Plane
				args={[2, 3]} // Width and height of the card
				position={[0, 0.21, 0]} // Slightly above the ground
				rotation={[Math.PI / 2, 0, 0]} // Upright orientation
				castShadow
			>
				<meshStandardMaterial color="lightblue" />
			</Plane>
			{/* Back Side of the Card */}
			<Plane
				args={[2, 3]}
				position={[0, 0.22, 0]}
				rotation={[Math.PI / 2, Math.PI, 0]}
				castShadow
			>
				<meshStandardMaterial color="lightblue" />
			</Plane>
		</group>
	)
}

const Scene = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 20, 5], fov: 10 }}
			style={{ background: 'white' }} // Set background to white
		>
			{/* Basic Lighting */}
			<ambientLight intensity={0.9} />

			{/* Accumulative Shadows */}
			<AccumulativeShadows
				// temporal
				frames={30} // Higher frame count for smoothness
				alphaTest={0.4} // Smoother shadows
				scale={10} // Size of the shadow plane
				position={[0, 0, 0]} // Shadow plane position
				color="#e8e8e8"
			>
				<RandomizedLight
					amount={12} // More light sources for a diffused effect
					intensity={1} // Brightness
					position={[10, 40, 0]} // Light source position
					radius={8} // Size of the light source
					bias={0.005} // Prevent shadow acne
				/>
			</AccumulativeShadows>

			{/* Rotating Card */}
			<RotatingCard />

			{/* Orbit Controls */}
			<OrbitControls />
		</Canvas>
	)
}

export default Scene
