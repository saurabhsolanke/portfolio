'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Techstacks from "./components/Techstacks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import * as THREE from 'three';
import Blogs from "./components/Blogs";
import Contributions from "./components/Contributions";

export default function Home() {
  const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //   const canvas = document.querySelector('#bg');
  //   const renderer = new THREE.WebGLRenderer({ canvas });

  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   camera.position.setZ(30);
  //   camera.position.setX(-3);

  //   // Torus
  //   const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  //   const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  //   const torus = new THREE.Mesh(geometry, material);
  //   scene.add(torus);

  //   // Lights
  //   const pointLight = new THREE.PointLight(0xffffff);
  //   pointLight.position.set(5, 5, 5);
  //   const ambientLight = new THREE.AmbientLight(0xffffff);
  //   scene.add(pointLight, ambientLight);

  //   function addStar() {
  //     const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  //     const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  //     const star = new THREE.Mesh(geometry, material);
  //     const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  //     star.position.set(x, y, z);
  //     scene.add(star);
  //   }

  //   Array(200).fill().forEach(addStar);

  //   // Background
  //   const spaceTexture = new THREE.TextureLoader().load('space.jpg');
  //   scene.background = spaceTexture;

  //   // Avatar
  //   const jeffTexture = new THREE.TextureLoader().load('pro.jpeg');
  //   const jeff = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: jeffTexture }));
  //   scene.add(jeff);

  //   // Moon
  //   const moonTexture = new THREE.TextureLoader().load('moon.jpg');
  //   const normalTexture = new THREE.TextureLoader().load('normal.jpg');
  //   const moon = new THREE.Mesh(
  //     new THREE.SphereGeometry(3, 32, 32),
  //     new THREE.MeshStandardMaterial({
  //       map: moonTexture,
  //       normalMap: normalTexture,
  //     })
  //   );
  //   scene.add(moon);

  //   moon.position.z = 30;
  //   moon.position.setX(-10);
  //   jeff.position.z = -5;
  //   jeff.position.x = 2;

  //   // Scroll Animation
  //   function moveCamera() {
  //     const t = document.body.getBoundingClientRect().top;
  //     moon.rotation.x += 0.05;
  //     moon.rotation.y += 0.075;
  //     moon.rotation.z += 0.05;
  //     jeff.rotation.y += 0.01;
  //     jeff.rotation.z += 0.01;
  //     camera.position.z = t * -0.01;
  //     camera.position.x = t * -0.0002;
  //     camera.rotation.y = t * -0.0002;
  //   }

  //   document.body.onscroll = moveCamera;
  //   moveCamera();

  //   // Animation Loop
  //   function animate() {
  //     requestAnimationFrame(animate);
  //     torus.rotation.x += 0.01;
  //     torus.rotation.y += 0.005;
  //     torus.rotation.z += 0.01;
  //     moon.rotation.x += 0.005;
  //     renderer.render(scene, camera);
  //   }

  //   animate();

  //   // Cleanup on component unmount
  //   return () => {
  //     renderer.dispose();
  //   };
  // }, []);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`${theme}`}>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black transition-colors duration-500">
        <div className="w-full flex justify-center fixed top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-transparent border-b border-zinc-200 dark:border-zinc-900">
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </div>
        
        <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
          <Landing />
        </section>

        {/* <section className="min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
          <Contributions />
        </section> */}

        <section className="min-h-screen pb-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800">
          <Techstacks />
        </section>

        <section className="min-h-screen pb-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
          <Projects />
        </section>

        <section className="min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800">
          <Blogs />
        </section>

        <section className="bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500">
          <Footer />
        </section>
      </main>
    </div>
  );
}
