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
      testimonials
     } = attributes;

    return (
      <>
        <Layout home title={title}>
          <div className="jumbotron fluid test">
            <div className='jumbotron-content'>
              <div className="container-fluid center">
              <img className="logo" src="./assets/hc_logo_white.svg"></img>
              <p className="jtext1">LIVE BY THE CODE</p>
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
            <p className="text-center"><strong>The Hair Code Salon</strong> in Traverse City, Michigan is here to provide you with a superior customer experience and tremendous value. Our goal is for you to walk out the door feeling better and more alive than when you walked in.</p>
            <p className="text-center">Don't just take our word for it. See what our customers have to say...</p>
            
            <h2>Testimonials</h2>
            <div className="star-row d-flex justify-content-center my-5">
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
              <img className="star" src="./assets/star.svg"></img>
            </div>
            
            <div className="d-flex flex-column">
              {testimonials.map( testimonial => 
              <div className="testimonial">
                <p key={testimonial.client}>{testimonial.quote}</p>
                <h4>- <strong>{testimonial.client}</strong>, {testimonial.location}</h4>
              </div>
                )}
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
            min-width: 25px;
            margin: 0 1em;
            filter: drop-shadow(0 40px 10px #000)
          }

          .testimonial {
            border-bottom: 3px solid var(--teal-ch);
            margin: 10px 0;
            padding: 40px;
            font-size: 14pt;
          }

          .testimonial:hover {
            // border: 3px solid var(--teal-ch);
            margin: 10px 0;
            padding: 40px;
          }
          
          .card {
            margin: 20px;
          }

          


         
          
          `
        }

        </style>
      </>
    )
  }
}