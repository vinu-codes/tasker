import React from 'react'
import cat from './cat.jpg'

const Workout = () => {
  return (
    <li className="list-none flex flex-row border + list-item">
      <div className="bg-red-500 grow-1">
        <div
          className="image bg-no-repeat w-10 h-10 bg-contain"
          style={{ backgroundImage: `url(${cat})` }}
        ></div>
        <span>Standing Shoulder Extension</span>
      </div>
      <div className="bg-green-500 grow">
        <span>tags</span>
        <div>
          <button>star</button>
          <button>delete</button>
        </div>
      </div>
    </li>
  )
}

export { Workout }
