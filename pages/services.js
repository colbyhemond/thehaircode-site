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
      services,
      note
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
              <ServicesContent />
              {services.map( service =>
              <div key={service.service} className="row service-row">
                <div className='col text-right d-flex align-items-center justify-content-end my-0'>
                  <p key={service.service} className="service"><strong>{service.service}</strong></p>
                </div>
                <h3>/</h3><h4>/</h4>
                <div className='col d-flex align-items-center'>
                  <p key={service.service} className="price">{service.price} <span>{service.note}</span> </p>
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
          // .service {
          //   font-size: 1rem;

          // }

          // .price {
          //   font-size: 12pt;
          // }

          .service-row {
            margin: 5px 0;
          }
          
          `
        }

        </style>
      </>
    )
  }
}