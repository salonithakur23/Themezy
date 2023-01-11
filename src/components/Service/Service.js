import React from 'react'
import Layout from '../../Layout'
import CardService from './CardService/CardService'
import Mainservice from './Mainservice/Mainservice'
import SubService from './SubService/SubService'

const Service = () => {
  return (
    <>
    <Layout>
    <Mainservice />
    <SubService />
<CardService />
    </Layout>
    </>
  )
}

export default Service