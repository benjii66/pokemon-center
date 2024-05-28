import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function PokemonCenter(props) {
  const { nodes, materials } = useGLTF('/models/pokecenter/pokemon_center_emerald.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
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
  )
}

useGLTF.preload('/models/pokecenter/pokemon_center_emerald.glb')
