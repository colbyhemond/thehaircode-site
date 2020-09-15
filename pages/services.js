import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/services.md';
import Layout from '../components/Layout'


export default class Home extends Component {
  render() {
    let { 
      title, 
      body,
      services, 
      image 
    } = attributes;
    return (
      <>
        <Layout>

          <Head>
            <title>{title} - The Blended Bakery</title>
          </Head>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
              <img className="img-align-left" src={ image } />
                {services.map( service => 
                  <div>
                    <h2 key={service.service}>{service.service}</h2>
                    <p key={service.service}>{service.description}</p>
                  </div>
                )}
            </div>
          </div>
        </Layout>
        

        <style type="text/css"> {
          ` 
          
          .img-align-right {
            max-width: 300px;
          }

          .container {
            max-width: 700px;
          }
          
          `
        }

        </style>
      </>
    )
  }
}