import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/faq.md';
import Layout from '../components/Layout'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class Home extends Component {
  render() {
    let { 
      title,
      faqs
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <Accordion>
              {faqs.map( faq =>
              <Card key={faq.question}>
                <Accordion.Toggle as={Card.Header} eventKey={faq.question}>
                  {faq.question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={faq.question}>
                  <Card.Body>{faq.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
              )}
            </Accordion>
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

          .card-header {
            font-weight: bold;
          }

          .card-header:hover {
            background-color: #EEE;
          }
          
          `
        }

        </style>
      </>
    )
  }
}