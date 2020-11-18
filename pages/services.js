import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ServicesContent } from '../content/services.md';
import Layout from '../components/Layout'
import ImgRow from '../components/ImgRow'


export default class Home extends Component {
  render() {
    let { 
      title, 
      services, 
      image,
      img1,
      img2,
      img3
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
              <img className="img-align-right" src={ image } />
                {services.map( service => 
                  <div key={service.service}>
                    <h2 key={service.service}>{service.service}</h2>
                    <p key={service.service}>{service.description}</p>
                  </div>
                )}
            </div>
            <ImgRow img1={ img1 } img2={ img2 } img3={ img3 } />
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