import React from 'react'

type GetDisplayName = <P>(x: React.ComponentType<P>) => string

export const getDisplayName: GetDisplayName = (Component) => Component.displayName || Component.name || 'Component'
