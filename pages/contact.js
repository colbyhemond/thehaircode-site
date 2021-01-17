import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/contact.md';
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import ImgRow from '../components/ImgRow'

export default class Home extends Component {
  render() {
    let { title,
          img1,
          img2,
          img3 } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <div className="body d-flex justify-content-center">
              <ContactForm />
            </div>
            
          </div>
        </Layout>
      

        <style type="text/css"> {
          ` 
          
          .container {
            max-width: 700px;
          }

          .btn {
            background-color: var(--bb-pink);
            border-color: var(--bb-pink);
            padding: 5px 30px;
          }

          .btn:hover {
            background-color: var(--bb-pink-hover);
            border-color: var(--bb-pink-hover);
          }
          
          `
        }

        </style>
      </>
    )
  }
}