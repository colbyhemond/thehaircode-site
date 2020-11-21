import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import navButtons from "../config/buttons";

export default class Home extends Component {
  
  render() {
    
    let { 
      title, 
      jumbotron, jumboText1, jumboText2,
      card1Img, card1Title, card1Text, card1ButtonText,
      card2Img, card2Title, card2Text, card2ButtonText,
      card3Img, card3Title, card3Text, card3ButtonText
     } = attributes;
    return (
      <>
        <Layout home title={title}>
          <div className="jumbotron fluid">
            <div className='center body'>
              <h1>{ jumboText1 }</h1>
              <p>{ jumboText2 }</p>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ card1Img } />
                <Card.Body>
                  <Card.Title>{ card1Title }</Card.Title>
                  <Card.Text>
                    { card1Text }
                  </Card.Text>
                  <Button variant="primary">{ card1ButtonText }</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ card2Img } />
                <Card.Body>
                  <Card.Title>{ card2Title }</Card.Title>
                  <Card.Text>
                    { card2Text }
                  </Card.Text>
                  <Button variant="primary">{ card2ButtonText }</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ card3Img } />
                <Card.Body>
                  <Card.Title>{ card3Title }</Card.Title>
                  <Card.Text>
                    { card3Text }
                  </Card.Text>
                  <Button variant="primary">{ card3ButtonText }</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

        </Layout>
        
        <style type="text/css"> {
          ` .jumbotron {
            color: white;
            background-image: url('${jumbotron}');
            background-size: cover;
            height: 75vh;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .card {
            margin: 20px;
          }

          .btn {
            background-color: var(--bb-pink);
            border-color: var(--bb-pink);
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