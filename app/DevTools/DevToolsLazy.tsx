import dynamic from 'next/dynamic'

export const DevToolsLazy = dynamic(() => {
  if (process.env.ENABLE_DEVTOOLS === 'true') {
    console.log('ENABLE_DEVTOOLS') // doesn’t log
    return import('./DevTools') // but still makes it to the layout-hash.js
  }
  return Promise.resolve(() => null)
})
