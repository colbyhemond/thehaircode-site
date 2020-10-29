import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'


export default class Home extends Component {
  render() {
    let { 
      title, 
      image 
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body row">
              <div className="col-sm-12">
                <AboutContent />
              </div>
              <div className="col-sm-12">
                <img className="img-align-right" src={ image } />
              </div>
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