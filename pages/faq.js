import Head from "next/head"
import { Component } from 'react'
import { attributes, react as FaqContent } from '../content/faq.md';
import Layout from '../components/Layout'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ImgRow from '../components/ImgRow'

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
            <FaqContent/>
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

          .card-header {
            font-weight: bold;
            color: var(--white-ch);
            border-bottom: 4px solid rgb(0,0,0,0);
          }

          .card-header:hover {
            border-bottom: 4px solid var(--teal-ch);
          }

          .card {
            color: var(--black-ch);
            border: none;
            background-color: rgb(0,0,0,0);
    
          }

          .card-body {
            background-color: var(--white-ch);
            color: var(--black-ch);
            box-shadow: 0 5px 20px var(--black-ch) inset;
            
          }
          
          `
        }

        </style>
      </>
    )
  }
}