'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 1024;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isMobile, // Disable antialias on mobile for performance
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    containerRef.current.appendChild(renderer.domElement);

    // PARTICLES - Optimized Count
    const particlesCount = isMobile ? 150 : 350;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const goldColor = new THREE.Color("#d4a017");
    const ivoryColor = new THREE.Color("#fdfcfb");

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = Math.random() > 0.5 ? goldColor : ivoryColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // INPUT TRACKING
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / width - 0.5) * 2;
      mouseY = -(event.clientY / height - 0.5) * 2;
    };
    if (!isMobile) window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // REnder Loop with Throttling
    let frameId: number;
    let lastTime = 0;
    const fpsLimit = isMobile ? 30 : 60; // Throttling on mobile
    const frameInterval = 1000 / fpsLimit;

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);

      const delta = time - lastTime;
      if (delta < frameInterval) return;
      lastTime = time - (delta % frameInterval);

      points.rotation.y += 0.0008;
      points.rotation.x += 0.0004;

      if (!isMobile) {
        points.position.x += (mouseX * 0.3 - points.position.x) * 0.02;
        points.position.y += (mouseY * 0.3 - points.position.y) * 0.02;
      }

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      if (!isMobile) window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Memory Management
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-30 will-change-transform" />;
}
