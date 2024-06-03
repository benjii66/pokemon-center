import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function PokemonCenter(props) {
  const { nodes, materials } = useGLTF('/models/pokecenter/pokemon_center_emerald.glb');
  const { isEditorMode } = props;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>

            <RigidBody type="fixed">
              <CuboidCollider args={[3.2, 2.1, 0.2]} position={[0.2, -0.2, -0.15]} />
              {isEditorMode && (
                <mesh position={[0.2, -0.2, -0.15]} castShadow receiveShadow>
                  <boxGeometry args={[3.2, 2.1, 0.2]} />
                  <meshBasicMaterial color="blue" wireframe opacity={0.5} transparent />
                </mesh>
              )}
            </RigidBody>

            <RigidBody type="fixed">
              <CuboidCollider args={[3.2, 0.1, 1]} position={[0.2, -1.1, 0.2]} />
              {isEditorMode && (
                <mesh position={[0.2, -1.1, 0.2]} castShadow receiveShadow>
                  <boxGeometry args={[3.2, 0.1, 1]} />
                  <meshBasicMaterial color="teal" wireframe opacity={0.5} transparent />
                </mesh>
              )}
            </RigidBody>

            <RigidBody type="fixed">
              <CuboidCollider args={[3.2, 0.1, 1]} position={[0.2, 0.8, 0.2]} />
              {isEditorMode && (
                <mesh position={[0.2, 0.8, 0.2]} castShadow receiveShadow>
                  <boxGeometry args={[3.2, 0.1, 1]} />
                  <meshBasicMaterial color="red" wireframe opacity={0.5} transparent />
                </mesh>
              )}
            </RigidBody>

            <RigidBody type="fixed">
              <CuboidCollider args={[0.1, 2.2, 1]} position={[1.8, -0.1, 0.2]} />
              {isEditorMode && (
                <mesh position={[1.8, -0.1, 0.2]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 2.2, 1]} />
                  <meshBasicMaterial color="green" wireframe opacity={0.5} transparent />
                </mesh>
              )}
            </RigidBody>

            <RigidBody type="fixed">
              <CuboidCollider args={[0.1, 2.2, 1]} position={[-1.4, -0.1, 0.2]} />
              {isEditorMode && (
                <mesh position={[-1.4, -0.1, 0.2]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 2.2, 1]} />
                  <meshBasicMaterial color="purple" wireframe opacity={0.5} transparent />
                </mesh>
              )}
            </RigidBody>

            <RigidBody type="fixed">
              <CuboidCollider args={[0.7, 0.1, 1]} position={[0.18, 0.32, 0]} />
              {isEditorMode && (
                <mesh position={[0.18, 0.32, 0]} castShadow receiveShadow>
                  <boxGeometry args={[1.4, 0.1, 1]} />
                  <meshBasicMaterial color="yellow" wireframe opacity={0.5} transparent />
                </mesh>
              )}
            </RigidBody>

            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_FloorBedge_0.geometry} material={materials.FloorBedge} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_WallOrange_0.geometry} material={materials.WallOrange} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_Glass_0.geometry} material={materials.Glass} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_CounterTop_0.geometry} material={materials.CounterTop} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_CounterBase_0.geometry} material={materials.CounterBase} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_Cushion_Yellow_0.geometry} material={materials.Cushion_Yellow} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_TableLegsWoodYellow_0.geometry} material={materials.TableLegsWoodYellow} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_MetalWhite_0.geometry} material={materials.MetalWhite} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_Cushion_Red_0.geometry} material={materials.Cushion_Red} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_WoodBrown_0.geometry} material={materials.WoodBrown} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_GeneralBlack_0.geometry} material={materials.GeneralBlack} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_Default_0.geometry} material={materials.Default} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_BooksBlue_0.geometry} material={materials.BooksBlue} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_BooksLighGreen_0.geometry} material={materials.BooksLighGreen} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_BooksLightPurple_0.geometry} material={materials.BooksLightPurple} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_BooksOrange_0.geometry} material={materials.BooksOrange} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_PokeballWhite_0.geometry} material={materials.PokeballWhite} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_PokeballRed_0.geometry} material={materials.PokeballRed} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_GeneralGrey_0.geometry} material={materials.GeneralGrey} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_WallPanelOrange_0.geometry} material={materials.WallPanelOrange} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_FloorTilesBrown_0.geometry} material={materials.FloorTilesBrown} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_PlantGreen_0.geometry} material={materials.PlantGreen} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_GeneralMetalGrey_0.geometry} material={materials.GeneralMetalGrey} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_ScreenBlue_0.geometry} material={materials.ScreenBlue} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_CarpetBlue_0.geometry} material={materials.CarpetBlue} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_ScreenGreen_0.geometry} material={materials.ScreenGreen} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_Material_0.geometry} material={materials.Material} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_MatCounterBaseGrey_0.geometry} material={materials.MatCounterBaseGrey} />
            <mesh castShadow receiveShadow geometry={nodes.PokeCenter_MatCounterWhite_0.geometry} material={materials.MatCounterWhite} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/pokecenter/pokemon_center_emerald.glb');
