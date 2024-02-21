'use client'

import { createContext } from 'react'

const Context = createContext({})

export const Providers = ({ children }: { children?: React.ReactNode }) => (
  <Context.Provider value={{}}>{children}</Context.Provider>
)
