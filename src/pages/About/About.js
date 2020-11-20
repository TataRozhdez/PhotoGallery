import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './About.scss'

export const About = () => {
  return (
    <>
      <Navbar step3 />
      <div className='about-screen'>
        <h3>About App</h3>
        <p>
          This app is created using create-react-app, hooks, css-preprocessor
          and deployed on Firebase.
        </p>
        <p>
          You can find code of this project on{' '}
          <a href='https://github.com/TataRozhdez/PhotoGallery'>GitHub</a>.
        </p>
      </div>
    </>
  )
}
