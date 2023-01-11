import React from 'react'
import Layout from '../../Layout'
import MainPArent from './MainParent/MainPArent'
import SubParent from './SubParent/SubParent'
import {addArray} from './SubParent/utill'

const Contact = () => {
  return (
    <>
    <Layout>
    <MainPArent />
    <SubParent addArray={addArray} />
    </Layout>
    </>
  )
}

export default Contact