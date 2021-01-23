import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/gallery.md';
import Layout from '../components/Layout'

export default class Gallery extends Component {
  render() {

    let { title, images } = attributes;
    
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <div className="d-flex flex-wrap gallery justify-content-center"> 
            {images.map( image =>
                <a key={image.image}><img src={image.image}></img></a>
              )}
            </div>
          </div>
        </Layout>
        
        <style type="text/css"> {
          ` 
          .container {
            max-width: 900px !important;
          }

          .gallery img {
            height: auto;
            width: 250px;
            margin: 20px;
            box-shadow: 0 0 50px #000;
            border: 5px solid var(--white-ch);
          }
          
          `
        }

        </style>
      </>
    )
  }
}