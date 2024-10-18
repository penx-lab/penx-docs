import React from 'react'

export const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <img style={{ height: 28 }} className="" src="/images/logo.png" alt="" />
      <span
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        PenX
      </span>
    </div>
  )
}
