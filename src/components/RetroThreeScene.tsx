import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface RetroThreeSceneProps {
  className?: string
  showPolyhedron?: boolean
}

export const RetroThreeScene: React.FC<RetroThreeSceneProps> = ({
  className = '',
  showPolyhedron = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Scene setup
    const scene = new THREE.Scene()
    // Deep dark fog for infinite horizon depth
    scene.fog = new THREE.FogExp2(0x05070c, 0.035)

    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.set(0, 3, 14)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // 2. Wireframe Horizon Cyber Terrain Grid
    const gridWidth = 48
    const gridDepth = 48
    const segmentsX = 40
    const segmentsZ = 40
    const terrainGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, segmentsX, segmentsZ)
    terrainGeo.rotateX(-Math.PI / 2)

    // Store original vertex positions to undulate waves
    const posAttr = terrainGeo.attributes.position
    const vertexCount = posAttr.count
    const originalPositions = new Float32Array(vertexCount * 3)
    for (let i = 0; i < vertexCount * 3; i++) {
      originalPositions[i] = posAttr.array[i]
    }

    // Custom dark cyber wireframe material with phosphor emerald / cyan tint
    const terrainMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan wireframe
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    })
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat)
    terrainMesh.position.set(0, -2.5, -4)
    scene.add(terrainMesh)

    // Secondary sub-grid with amber phosphor accent lines
    const subGridGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, 10, 10)
    subGridGeo.rotateX(-Math.PI / 2)
    const subGridMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b, // Amber lines
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const subGridMesh = new THREE.Mesh(subGridGeo, subGridMat)
    subGridMesh.position.set(0, -2.52, -4)
    scene.add(subGridMesh)

    // 3. Floating Cyber Polyhedron (Core Node)
    let polyhedronGroup: THREE.Group | null = null
    if (showPolyhedron) {
      polyhedronGroup = new THREE.Group()

      // Outer wireframe icosahedron
      const icoGeo = new THREE.IcosahedronGeometry(2.2, 1)
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0x10b981, // Emerald green phosphor
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      })
      const icoMesh = new THREE.Mesh(icoGeo, icoMat)
      polyhedronGroup.add(icoMesh)

      // Inner glowing geometric core
      const innerGeo = new THREE.OctahedronGeometry(1.2, 0)
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0xfbbf24, // Warm amber core
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      })
      const innerMesh = new THREE.Mesh(innerGeo, innerMat)
      polyhedronGroup.add(innerMesh)

      // Vertex point lights/nodes
      const pointCount = icoGeo.attributes.position.count
      const pointsGeo = new THREE.BufferGeometry()
      pointsGeo.setAttribute('position', icoGeo.attributes.position)
      const pointsMat = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.12,
        transparent: true,
        opacity: 0.85,
      })
      const points = new THREE.Points(pointsGeo, pointsMat)
      polyhedronGroup.add(points)

      polyhedronGroup.position.set(5.5, 1.8, 4)
      scene.add(polyhedronGroup)
    }

    // 4. Digital Starfield / Particle Dust
    const starsCount = 450
    const starPositions = new Float32Array(starsCount * 3)
    const starColors = new Float32Array(starsCount * 3)

    const colorPalette = [
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0xf59e0b), // Amber
      new THREE.Color(0x94a3b8), // Slate
    ]

    for (let i = 0; i < starsCount; i++) {
      const idx = i * 3
      starPositions[idx] = (Math.random() - 0.5) * 40
      starPositions[idx + 1] = Math.random() * 20 - 2
      starPositions[idx + 2] = (Math.random() - 0.5) * 35

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      starColors[idx] = c.r
      starColors[idx + 1] = c.g
      starColors[idx + 2] = c.b
    }

    const starsGeo = new THREE.BufferGeometry()
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starsGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

    const starsMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    })
    const starField = new THREE.Points(starsGeo, starsMat)
    scene.add(starField)

    // 5. Interaction variables (Mouse Parallax & Scroll reaction)
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    let scrollY = 0
    let targetScrollY = 0
    let isVisible = true

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX = (e.clientX / innerWidth - 0.5) * 2
      mouseY = (e.clientY / innerHeight - 0.5) * 2
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Pause rendering if tab hidden or off-screen to save battery
    const handleVisibility = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    let observer: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting
      })
      observer.observe(container)
    }

    // 6. Handle resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener('resize', handleResize)

    // 7. Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isVisible) return

      const elapsed = clock.getElapsedTime()

      // Smooth lerp for mouse parallax
      targetX += (mouseX - targetX) * 0.04
      targetY += (mouseY - targetY) * 0.04

      // Smooth lerp for scroll
      targetScrollY += (scrollY - targetScrollY) * 0.05
      const scrollFactor = Math.min(targetScrollY / 1000, 1.5)

      // Camera responds to mouse & scroll
      camera.position.x = targetX * 1.8
      camera.position.y = 3 - targetY * 1.2 - scrollFactor * 1.2
      camera.position.z = 14 - scrollFactor * 3
      camera.lookAt(0, 0.5 - scrollFactor * 0.8, 0)

      // Undulate cyber terrain grid
      const positions = terrainGeo.attributes.position.array as Float32Array
      for (let i = 0; i < vertexCount; i++) {
        const idx = i * 3
        const x = originalPositions[idx]
        const z = originalPositions[idx + 2]
        // Traveling cyber wave
        const wave =
          Math.sin(x * 0.25 + elapsed * 1.4) * 0.45 +
          Math.cos(z * 0.25 + elapsed * 1.1) * 0.45 +
          Math.sin((x + z) * 0.15 + elapsed * 0.8) * 0.3
        positions[idx + 1] = wave
      }
      terrainGeo.attributes.position.needsUpdate = true

      // Rotate polyhedron core
      if (polyhedronGroup) {
        polyhedronGroup.rotation.x = elapsed * 0.35 + targetY * 0.5
        polyhedronGroup.rotation.y = elapsed * 0.45 + targetX * 0.5
        polyhedronGroup.rotation.z = elapsed * 0.15

        // Hover float up and down
        polyhedronGroup.position.y = 1.8 + Math.sin(elapsed * 1.2) * 0.3
      }

      // Starfield subtle rotation & drift
      starField.rotation.y = elapsed * 0.03
      starField.rotation.x = targetY * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // 8. Cleanup & Disposal
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (observer) observer.disconnect()

      // Dispose Three.js objects
      terrainGeo.dispose()
      terrainMat.dispose()
      subGridGeo.dispose()
      subGridMat.dispose()
      starsGeo.dispose()
      starsMat.dispose()

      if (polyhedronGroup) {
        polyhedronGroup.traverse((child) => {
          if (child instanceof THREE.Mesh || child instanceof THREE.Points) {
            child.geometry.dispose()
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }

      renderer.dispose()
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [showPolyhedron])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    />
  )
}
