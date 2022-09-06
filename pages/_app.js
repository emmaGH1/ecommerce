import React from 'react'

import { Layout } from '../components'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => (
   <Layout>
   <Component {...pageProps} />
   </Layout>
)

export default MyApp
