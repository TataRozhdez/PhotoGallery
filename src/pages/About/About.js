import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './About.scss'

export const About = () => {
  return (
    <>
      <Navbar step3='disabled' />
      <div className='about-screen'>
        <h3>About App</h3>
        <p>
          This app is created using create-react-app, hooks, css-preprocessor
          and deployed on Firebase.
        </p>
        <p>
          You can find code of this project on{' '}
          <a
            href='https://github.com/TataRozhdez/PhotoGallery'
            rel='noreferrer'
            target='_blank'
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Reference to project construction conditions{' '}
          <a
            href='https://gist.github.com/soul-wish/4526980820bbdf410c64b5edb100b52c'
            rel='noreferrer'
            target='_blank'
          >
            here
          </a>
        </p>
      </div>
    </>
  )
}
