import React from 'react'
import Layout from '../../Layout'
import Banner from './Banner/Banner.js'
import {BannerText} from './Banner/utill'
import Customer from './Customer-service/Customer'
import {serviceCard} from './Customer-service/utill'
import SafeHosting from './SafeHosting/SafeHosting'
import StandredCard from './StanderedCard/StandredCard'
import {mainStandredFun} from './StanderedCard/utill'
import {expactArrFun} from './SafeHosting/utill'


function Home() {
  return (
    <>
    <Layout>
    <Banner  BannerText={BannerText}/>
    <Customer serviceCard={serviceCard} />
    <StandredCard mainStandredFun={mainStandredFun} />
    <SafeHosting expactArrFun={expactArrFun}/>
    </Layout>

    </>
  )
}

export default Home