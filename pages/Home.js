import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuContent from '../components/MenuContent'
import PrincipalContent from '../components/PrincipalContent'



export default function Home(data) {
  return (
    <Fragment>
      <div className='container mt-5'>
        <Header />
        <MenuContent />
        <PrincipalContent />
        <Footer />
      </div>
    </Fragment>
  )
}
