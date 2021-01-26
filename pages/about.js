import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'
import ImgRow from '../components/ImgRow'

import SponsoredButton from '../components/SponsoredButton'

export default class Home extends Component {
  render() {
    let { 
      title,
      apptText, 
      stylists
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
                { stylists.map( stylist => 
                  <div key={stylist.name} className="stylistRow d-flex flex-wrap align-items-center">
                    <div className='col-sm-4 stylistImg text-center'>
                      <img key={stylist.name} src={stylist.image}></img>
                    </div>
                    <div className="col-1"></div>
                    <div className='col-sm-7 stylistInfo'>
                      <h3 key={stylist.nameFirst} className="">{stylist.nameFirst} {stylist.nameLast}</h3>
                      <p><strong>{stylist.title}</strong></p>
                      <p>{stylist.about}</p>
                      
                      <p>{apptText} {stylist.nameFirst}</p>
                  
                      <SponsoredButton/>
                    </div>
                  </div>
                )}
          </div>
        </Layout>

        <style type="text/css"> {
          ` 

          .stylistImg img {
            height: auto;
            width: 100%;
            max-width: 250px;
            box-shadow: 0 0 75px #000;  
            margin-top: 25px;
            margin-bottom: 25px; 
            filter: grayscale(1);
          }

          .stylistInfo {
            padding: 25px;
            box-shadow: 0 0 75px #000;  
            margin-top: 25px;
            margin-bottom: 25px; 
          }

          .stylistRow {
            // min-height: 400px
            height: 100%;
            width: 100%;
            margin-bottom: 50px;
            
          }
          
          `
        }

        </style>
      </>
    )
  }
}