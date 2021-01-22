import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ServicesContent } from '../content/services.md';
import Layout from '../components/Layout'
import SponsoredButton from '../components/SponsoredButton'
import ImgRow from '../components/ImgRow'


export default class Home extends Component {
  render() {
    let { 
      title, 
      services
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
              {services.map( service =>
              <div key={service.service} className="row">
                <div className='col d-flex  align-self-center justify-content-end'>
                  <h5 key={service.service} className="">{service.service}</h5>
                </div>
                <h2>/</h2>
                <div className='col d-flex align-self-center'>
                  <h6 key={service.service}>{service.price}</h6>
                </div>
              </div>
              )}
            </div>
                <SponsoredButton/>
          </div>
        </Layout>
        

        <style type="text/css"> {
          ` 
          
          `
        }

        </style>
      </>
    )
  }
}