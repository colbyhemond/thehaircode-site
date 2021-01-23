import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/gallery.md';
import Layout from '../components/Layout'

let url2 = 'https://thehaircodesalon.com/wp-content/uploads/2017/04/hc_4-676x676.jpg'
let url1 = './assets/Chad1_300x400.jpg'


export default class Order extends Component {
  render() {
    let { title, images } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <div className="d-flex flex-wrap gallery justify-content-center"> 
            {images.map( image =>
                <a><img src={image}></img></a>
              )}
              
              
              
              <a ><img ></img></a>
              <a ><img src={url1}></img></a>
              <a ><img src={url1}></img></a>
              <a ><img src={url2}></img></a>
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