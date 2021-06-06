import React from 'react'

import { Container } from 'react-bootstrap'

import { Carousel ,  } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=af16ec2ad6a04c9bba074df9be950e96&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  
    return (

    <Container className=" bg-dark p-0" style={{ minHeight:'100vh' }} fluid>

        <nav className="bg-light d-flex justify-content-around align-items-center text-success p-2">
          <em style={{ fontSize:'2rem' }}><b>LoudMusic</b></em>
          <i className="text-secondary">&copy; Copyright Shubham Singh, 2021.</i>
          </nav>

<div className="d-flex justify-content-center mt-1">

<Carousel className="w-75 d-flex justify-content-center">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Listen to the music you want</h3>
      <p>With LoudMusic you can listen to song all day long.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Search music from Spotify</h3>
      <p>Access all songs from enormous list of Spotify.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Be a Premium Subscriber</h3>
      <p>This App is for only Premium Subscribers.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
        <div className="d-flex justify-content-center p-3">
          <div className="card d-flex w-50 p-3">
            <div className="d-flex justify-content-center">
              <a className="btn btn-outline-success btn-lg" href={AUTH_URL}>
            <b>LOGIN NOW</b>
              </a>
            </div>
            <p className="text-center text-primary">*This App works for Spotify Premium Subscribers only.</p>
          </div>
        </div>

    </Container>
    )
}