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
                  <p key={service.service} className="service"><strong>{service.service}</strong></p>
                </div>
                <h2>/</h2><h3>/</h3>
                <div className='col d-flex align-self-center'>
                  <p key={service.service} className="price">{service.price}</p>
                </div>
              </div>
              )}
            </div>
            <div className="my-5">
                <SponsoredButton/>
                </div>
          </div>
        </Layout>
        

        <style type="text/css"> {
          ` 
          .service {
            font-size: 16pt;
          }

          .price {
            font-size: 14pt;
          }
          
          `
        }

        </style>
      </>
    )
  }
}