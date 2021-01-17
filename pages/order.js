import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/order.md';
import Layout from '../components/Layout'
import OrderForm from '../components/OrderForm'

export default class Order extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <div className="body d-flex justify-content-center pb-3"> 
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
            background-color: var(--ch-button);
            border-color: var(--ch-button);
            padding: 5px 30px;
          }

          .btn:hover {
            background-color: var(--ch-button-hover);
            border-color: var(--ch-button-hover);
          }

       
          
          `
        }

        </style>
      </>
    )
  }
}