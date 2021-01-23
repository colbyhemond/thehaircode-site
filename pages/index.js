import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout'
import SponsoredButton from '../components/SponsoredButton'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
          <div className="jumbotron fluid test">
            <div className='jumbotron-content'>
              <div className="container-fluid center">
              <img className="logo" src="./assets/hc_logo_white.svg"></img>
              <h1>{ jumboText1 }</h1>
              <p>{ jumboText2 }</p>
              </div>
              <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-6">
                    <Button href="/services">Services</Button>
                  </div>
                  <div className="col-12 col-sm-6">
                    <SponsoredButton />
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="container">
            <p className="text-center">The Hair Code Salon in Traverse City, Michigan is here to provide you with a superior customer experience and tremendous value. Our goal is for you to walk out the door feeling better and more alive than when you walked in.</p>
            <p className="text-center">Don't just take our word for it. See what I customers have to say.</p>
            <div className="star-row d-flex justify-content-center">
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
            </div>
            <div className="d-flex flex-column">
              <p>After searching for a stylist who was up-to-date on the latest trends and techniques, I was pleased to find Chad! His recommendations, precision and eye for perfection ensure my hair is always looking its best.</p>
              <p>Harth Goulette, Traverse City</p>
            </div>
            
          </div>

        </Layout>

        
        <style type="text/css"> {
          `
          

          .jumbotron {
            color: white;
            // background-image: url('${jumbotron}');
            
            // background-image: url('https://images.unsplash.com/photo-1598887142487-3c854d51eabb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
            // background-image: url('https://thehaircodesalon.com/wp-content/uploads/2016/07/cropped-IMG_2788.jpg');
            
            // background-image: url('https://images.unsplash.com/photo-1561889053-c22fe12cce8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1618&q=80');

            background-image: url('https://images.unsplash.com/photo-1590540178973-02381b349071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80');

            
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
            
            // filter: grayscale(100%);
          }

          .jumbotron {
            // filter: grayscale(100%);
          }
          
          .card {
            margin: 20px;
          }

          .logo {
            margin-bottom: 50px;
            filter: drop-shadow(0px 0px 8px #121);
            // height: 200px;
            max-width: 85%;
          }

          

         .star-row {
            margin: 20px 0;
         }

         .star {
           width: 10%;
           max-width: 75px;
           margin: 0 20px;
           filter: drop-shadow(0 40px 10px #000)
         }
          
          `
        }

        </style>
      </>
    )
  }
}