import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/order.md';
import Layout from '../components/Layout'
import OrderForm from '../components/OrderForm'

export default class Order extends Component {
  render() {
    let { title, date} = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <div className="d-flex justify-content-center"> 
              <OrderForm />
            </div>
            <div className="d-flex justify-content-center">

            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=N2VvOGNiZHQ1aDgyZGZydWp2Mm9tcHRuaGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0&amp;mode=MONTH"  width="100%" height="500" frameborder="0" scrolling="no"></iframe>
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