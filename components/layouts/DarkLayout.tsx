import React, { FC } from 'react'

interface Props {
  children: React.ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(50,50,50,0.2)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h3>Dark-Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}
