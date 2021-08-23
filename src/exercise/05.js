// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>

function Box({ className = '', size, style, children }) {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div className={`box ${sizeClassName} ${className}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function Box2({ className = '', size, style, ...children }) {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div className={`box ${sizeClassName} ${className}`} style={{fontStyle: 'italic', ...style}} {...children} />
  )
}

function App() {
  return (
    <div>
      {/* <div className="box box--small">{smallBox}</div>
      <div className="box box--medium">{mediumBox}</div>
      <div className="box box--large">{largeBox}</div> */}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box2 size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box2>
      <Box2 size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box2>
      <Box2 size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box2>
    </div>
  )
}

export default App
