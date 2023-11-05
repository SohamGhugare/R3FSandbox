import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function Car() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/ganesh_color/scene.gltf"
  );
  
  useEffect(() => {
    gltf.scene.scale.set(0.2, 0.2, 0.2);
    gltf.scene.position.set(0, 2, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 5;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
