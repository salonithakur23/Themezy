import React from 'react'
import Layout from '../../Layout'
import AboutBanner from './AboutBanner/AboutBanner'
import {NullaArray} from './AboutBanner/utill'
import AboutCards from './AboutCards/AboutCards'
import EndParent from './EndParent/EndParent'
import SubAbout from './SubAbout/SubAbout'
import {mainInterArray} from './SubAbout/utill'
import {DoneArray} from './EndParent/utill'




const AboutUs = () => {
  return (
    <>
    <Layout>
      <AboutBanner NullaArray={NullaArray}/>
      <SubAbout mainInterArray={mainInterArray} />
      <AboutCards />
      <EndParent DoneArray={DoneArray} />
    </Layout>
    </>
  )
}

export default AboutUs