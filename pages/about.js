import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'
import ImgRow from '../components/ImgRow'


export default class Home extends Component {
  render() {
    let { 
      title, 
      stylists
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            {/* <div className="body">
              <div className="col-12">
                <AboutContent />
              </div>
            </div> */}
            <div className="body">
                { stylists.map( stylist => 
                  <div key={stylist.name} className="row stylistRow">
                    <div className='col-12 col-sm-5 stylistImg'>
                      <img key={stylist.name} src={stylist.image}></img>
                    </div>
                    <div className='col-12 col-sm-7'>
                      <h2 key={stylist.name} className="">{stylist.name}</h2>
                      <p key={stylist.name}>{stylist.title}</p>
                      <p key={stylist.name}>{stylist.about}</p>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </Layout>

        <style type="text/css"> {
          ` 
          // .img {
          //   max-width: 300px;
          //   width: 100%;
          //   height: auto;
          // }

          .stylistImg img {
            height: 300px;
            width: auto;
          }

          .stylistRow {
            min-height: 400px
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