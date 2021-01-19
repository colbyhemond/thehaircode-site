import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import navButtons from "../config/buttons";

const hover = function (element) {
  // console.log(element);
  // element.setAttribute('src', './assets/hc_logo_closed_white.svg');
}

function unhover(element) {
  // element.setAttribute('src', './assets/hc_logo_white.svg');
}

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
            <div className=''>
              <div className="container-fluid center">
              <img className="logo" src="./assets/hc_logo_white.svg"></img>
              <h1>{ jumboText1 }</h1>
              <p>{ jumboText2 }</p>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Button>Book Now</Button>
                  </div>
                  <div className="col-12 col-sm-6">
                    <Button>Services</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <p>The Hair Code Salon in Traverse City, Michigan is here to provide both a superior customer experience and tremendous value. Each client will walk out the door after seeing the hair stylist feeling better and more alive than when they walked in.</p>
            <div className="star-row d-flex justify-content-center">
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
            </div>
            
          </div>

        </Layout>
        
        <style type="text/css"> {
          ` .jumbotron {
            color: white;
            // background-image: url('${jumbotron}');
            
            // background-image: url('https://images.unsplash.com/photo-1598887142487-3c854d51eabb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
            // background-image: url('https://thehaircodesalon.com/wp-content/uploads/2016/07/cropped-IMG_2788.jpg');
            
           background-color: #DDD !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 5em;
          }
          
          .card {
            margin: 20px;
          }

          .logo {
            margin-bottom: 50px;
            filter: drop-shadow(0 0px 5px #111);
            max-width: 85%;
          }
         .star-row {
      
         }

         .star {
           width: 10%;
           max-width: 75px;
           margin: 0 20px;
         }
          
          `
        }

        </style>
      </>
    )
  }
}