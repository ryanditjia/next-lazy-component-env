'use client'

// this needs to be a client component because it has interactivity

export default function DevTools() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: 'lightblue',
      }}
    >
      LANDMARK_DEVTOOLS
    </div>
  )
}
