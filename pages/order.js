import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/order.md';
import Layout from '../components/Layout'
import OrderForm from '../components/OrderForm'

export default class Order extends Component {
  render() {
    let { title, date, cats } = attributes;
    return (
      <>
        <Layout>

          <Head>
            <title>{title} - The Blended Bakery</title>
          </Head>
          <div className="container">
            <h1>{title}</h1>
            <div className="d-flex justify-content-center">
              <OrderForm />
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