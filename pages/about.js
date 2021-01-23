import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'
import ImgRow from '../components/ImgRow'

import SponsoredButton from '../components/SponsoredButton'

function test(text) {
  if (text == null) {
    return "Set up an appointment with"
  }
  return text
}

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
                      <h2 key={stylist.nameFirst} className="">{stylist.nameFirst} {stylist.nameLast}</h2>
                      <p><strong>{stylist.title}</strong></p>
                      <p>{stylist.about}</p>
                      
                      <p>{test(apptText)} {stylist.nameFirst}</p>
                  
                      <SponsoredButton/>
                    </div>
                  </div>
                )}
          </div>
        </Layout>

        <style type="text/css"> {
          ` 

          .stylistImg img {
            height: 300px;
            width: auto;
            box-shadow: 0 0 75px #000;  
            margin-top: 25px;
            margin-bottom: 25px; 
                     
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