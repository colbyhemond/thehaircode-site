import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'
import ImgRow from '../components/ImgRow'


export default class Home extends Component {
  render() {
    let { 
      title, 
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
            <div className="body row">
              <div className="col-12 col-sm-7">
                <AboutContent />
              </div>
              <div className="col-12 col-sm-5 text-center">
                <img className="img" src={ image } />
              </div>
            </div>
            
          </div>
        </Layout>

        <style type="text/css"> {
          ` 
          .img {
            max-width: 300px;
            width: 100%;
            height: auto;
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