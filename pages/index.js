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
      card1Img, card1Title, card1Text, card1ButtonText, buttonLink1, 
      card2Img, card2Title, card2Text, card2ButtonText, buttonLink2,
      card3Img, card3Title, card3Text, card3ButtonText, buttonLink3
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
                  <Button variant="primary" href={ buttonLink1 }>{ card1ButtonText }</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ card2Img } />
                <Card.Body>
                  <Card.Title>{ card2Title }</Card.Title>
                  <Card.Text>
                    { card2Text }
                  </Card.Text>
                  <Button variant="primary" href={ buttonLink2 }>{ card2ButtonText }</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ card3Img } />
                <Card.Body>
                  <Card.Title>{ card3Title }</Card.Title>
                  <Card.Text>
                    { card3Text }
                  </Card.Text>
                  <Button variant="primary" href={ buttonLink3 }>{ card3ButtonText }</Button>
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
            background-color: var(--ch-button);
            border-color: var(--ch-button);
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