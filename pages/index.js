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
      jumbotron, 
      jumboText1,
      testimonials,
      featured
     } = attributes;

    return (
      <>
        <Layout home title={title}>
          <div className="jumbotron fluid test">
            <div className='jumbotron-content'>
              <div className="container-fluid center">
              <img className="logo" src="./assets/hc_logo_white.svg"></img>
                <p className="jtext1"><strong>{jumboText1}</strong></p>
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
            <div className="d-flex text-justify container">
             <HomeContent/>
             </div>
            <h2>Testimonials</h2>
            <div className="star-row d-flex justify-content-center">
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
            </div>
            
            <div className="d-flex flex-column">
              {testimonials.map( testimonial => 
              <div className="testimonial" key={testimonial.client}>
                <p >"{testimonial.quote}"</p>
                <h5>- <strong>{testimonial.client}</strong>, {testimonial.location}</h5>
              </div>
                )}
            </div>

            <div className="featured text-center">
              <h2>Fresh Cuts & Colors</h2>
              <div className="d-flex flex-wrap justify-content-center">
                <img src={featured.one} alt={featured.onealt}></img>
                <img src={featured.two} alt={featured.twoalt}></img>
                <img src={featured.three} alt={featured.threealt}></img>
                </div>
            </div>
            <div className="d-flex justify-content-center mx-auto text-center">
              <Button href="/gallery">Gallery</Button>

            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-center mx-auto my-5 text-center">
              <h3 className="mr-3">Feel your best:</h3>
              <SponsoredButton />
            </div>
            
            
          </div>

        </Layout>

        
        <style type="text/css"> {
          `
          

          .jumbotron {
            color: white;
             background-image: url('${jumbotron}');
            // background-image: url('https://images.unsplash.com/photo-1590540178973-02381b349071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80');  
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

          .jumbotron {
            // filter: grayscale(100%);
          }

          .jtext1 {
            font-size: 28pt;
          }

          .logo {
            margin-bottom: 0px;
            filter: drop-shadow(0px 0px 8px #121);
            // height: 200px;
            max-width: 85%;
          }

          .star {
            width: 7%;
            max-width: 75px;
            min-width: 40px;
            margin: 0 2%;
            filter: drop-shadow(0 40px 10px #000)
          }

          .testimonial {
            border-bottom: 3px solid var(--teal-ch);
            padding: 20px 40px 40px 40px;
          }

          .testimonial span {
            font-family: var(--heading-ch);
            font-size: 16pt;
          }
          
          .card {
            margin: 20px;
          }

          .featured {
            padding: 5em 0 0 0;
          }
          
          .featured img {
            height: auto;
            max-height: 225px;
            max-width: 225px;
            margin: 15px;
            box-shadow: 0 0 50px #000;
            border: 5px solid var(--white-ch);
          }

          `
        }

        </style>
      </>
    )
  }
}