import Image from 'next/image';
import React from 'react'

const styles = {
  contentMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alingItems: 'center'
  },
};

export default function Header() {
  return (
    <div style={styles.contentMain} className='p-2 card'>
      <div style={{ marginRight: 'auto' }}>
        <span>Server: </span>
        <span style={{ color: 'red', fontWeight: 'bold' }}> hubble_dev</span>
      </div>
      <div>
        <span>No Program Selected | </span>
        <i class="fa-solid fa-circle-user"></i>
      </div>
    </div>
  )
}
