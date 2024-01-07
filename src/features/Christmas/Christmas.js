import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Lights } from './Lights'
import { Tree } from './Tree'

const Snow = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    var canvasTwoDimensional = canvas.getContext('2d')
    var particles = {}
    var particleIndex = 0
    var particleNum = 1
    var vy = 1.5
    var vx = Math.random()
    var mlife = 350

    canvasTwoDimensional.fillStyle = 'black'
    canvasTwoDimensional.fillRect(0, 0, canvas.width, canvas.height)

    function Particle() {
      this.x = Math.floor(Math.random() * canvas.width - 100)
      this.y = -20
      this.vx = vx
      this.vy = vy
      this.size = Math.floor(Math.random() * 3) + 1
      this.gravity = 0.02
      if (this.size > 2) {
        this.vy += 0.2
      } else if (this.size < 2) {
        this.vy -= 0.2
      }
      particleIndex++
      particles[particleIndex] = this
      this.id = particleIndex
      this.life = 0
      this.maxLife = mlife
    }

    Particle.prototype.draw = function (r, v) {
      r = Math.floor(Math.random() * 100)
      v = 50
      this.x += this.vx
      this.y += this.vy
      if (r < v) {
        this.vx -= Math.random() * 1 - 0.5
        this.vy += this.vy / 1000
      }
      if (this.y >= 600) {
        this.vy = 0
        this.vx = 0
        this.size += 1 / 10
      }
      this.vy += this.gravity
      this.life++
      if (this.life >= this.maxLife) {
        delete particles[this.id]
      }

      canvasTwoDimensional.fillStyle = 'rgba(255, 255, 255, 0.5)'
      canvasTwoDimensional.beginPath()
      canvasTwoDimensional.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
      canvasTwoDimensional.fill()
    }

    setInterval(function () {
      canvasTwoDimensional.fillStyle = 'rgba(0, 0, 0, 0.9)'
      canvasTwoDimensional.fillRect(0, 0, canvas.width, canvas.height)
      for (var i = 0; i < particleNum; i++) {
        new Particle()
      }

      for (var i in particles) {
        particles[i].draw()
      }
    }, 15)
  }, [])

  return 'hi'
}

const MountainContainer = styled.div`
  position: absolute;
  bottom: 0;

  .mountain-one {
    position: absolute;
    bottom: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 180px solid #7ac1e4;
    z-index: 1;
  }
  .mountain-top1 {
    position: absolute;
    right: -65px;
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 77px solid #fffafa;
    z-index: 1;
  }
  .mountain-cap1 {
    position: absolute;
    left: -55px;
    top: 70px;
    border-left: 35px solid transparent;
    border-right: 20px solid transparent;
    border-top: 25px solid #fffafa;
  }
  .mountain-two {
    position: absolute;
    bottom: -20px;
    left: 80px;
    opacity: 0.35;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 180px solid #7ac1e4;
    z-index: 0;
  }
  .mountain-top2 {
    position: absolute;
    right: -65px;
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 77px solid slategray;
    z-index: 0;
  }
  .mountain-cap2 {
    position: absolute;
    left: -25px;
    top: 70px;
    border-left: 35px solid transparent;
    border-right: 20px solid transparent;
    border-top: 25px solid slategray;
  }

  .mountain-three {
    position: absolute;
    bottom: -10px;
    opacity: 0.5;
    left: -60px;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 180px solid #7ac1e4;
    z-index: 0;
  }

  .mountain-top3 {
    position: absolute;
    right: -65px;
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 77px solid #fffafa;
    z-index: 0;
  }
  .mountain-cap3 {
    position: absolute;
    left: -25px;
    top: 70px;
    border-left: 35px solid transparent;
    border-right: 20px solid transparent;
    border-top: 25px solid #fffafa;
  }
`

const Mountain = () => {
  return (
    <MountainContainer>
      <div class="mountain-one">
        <div class="mountain-top1">
          <div class="mountain-cap1"></div>
        </div>
      </div>
      <div class="mountain-two">
        <div class="mountain-top2">
          <div class="mountain-cap2"></div>
        </div>
      </div>

      <div class="mountain-three">
        <div class="mountain-top3">
          <div class="mountain-cap3"></div>
        </div>
      </div>
    </MountainContainer>
  )
}

const Christmas = () => {
  return (
    <div>
      <Snow />
      <Mountain />
      <Lights />
      <Tree />
    </div>
  )
}

export { Christmas }
