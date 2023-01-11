import React from 'react'
import Layout from '../../Layout'
import NewsMain from './NewsMainParent/NewsMain';
import {MarvalsArray} from './NewsMainParent/utill'


const News = () => {
  return (
    <>
    <Layout>
    <NewsMain MarvalsArray={MarvalsArray} />
    </Layout>
    </>
  )
}

export default News