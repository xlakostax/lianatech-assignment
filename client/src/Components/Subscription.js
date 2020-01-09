import React, { Component } from 'react';

import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 0 10% 4em 10%;
  background-color: rgb(255,255,255);
  border-top: 1px rgb(235, 235, 235) solid;
  & h1 {
    text-align: center;
    padding: 1em 0;
    font-size: 2em;
  }
  & .description {
    width: 25%;
    font-weight: 200;
    text-align: center;
    padding-bottom: 2em;
    @media (max-width: 768px) {
      width: 45%;
    }
    @media (max-width: 425px) {
      width: 65%;
    }
  }
`;

const Form = styled.form`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1em;
    width: 100%;
  }
  @media (max-width: 435px) {
    grid-template-columns: 1fr;
  }
  & input {
    height: 2em;
    border-radius: 4px 4px;
    font-size: 1.2em;
    font-weight: 400;
    outline: none;
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
  & input:first-child {
    width: 30em;
    /* margin-right: 0.5em; */
    padding: 0 1em;
    border: 1px rgb(235, 235, 235) solid;
    @media (max-width: 1024px) {
      width: auto;
    }
  }
  & input:last-child {
    /* padding: 0 1em; */
    border: 1px rgb(76, 137, 48) solid;
    background-color: rgb(76, 137, 48);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export default class Subscription extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      email: '',
      showModalSuccess: false,
      showModalError: false,
      display: 'none'
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleCloseModalSuccess = this.handleCloseModalSuccess.bind( this );
    this.handleCloseModalError = this.handleCloseModalError.bind( this );
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name: */
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const email = this.state.email;
    axios
    .post('/send', {
      data: {
        email: email
      }
    })
    .then( ( res ) => {
      if ( res.data.msg === 'success' ) {
        this.resetForm();
        this.setState( {display: 'none', showModalSuccess: true} );
      } else if ( res.data.msg === 'fail' ) {
        this.setState( {display: 'none', showModalError: true} );
      }
    })
  }

  resetForm = (event) => {
    this.setState({
      email: ''
    });
  }

  handleCloseModalSuccess = () => {
    this.setState( { showModalSuccess: false } )
  }

  handleCloseModalError = () => {
    this.setState( { showModalError: false } )
  }

  componentDidMount = () => {
    Modal.setAppElement('body');
  }

  render() {
    return(
      <Section>
      <Modal
        isOpen = { this.state.showModalSuccess }
        contentLabel = 'onRequestClose'
        onRequestClose = { this.handleCloseModalSuccess }
        className = 'Modal'
        overlayClassName = 'Overlay'
        shouldCloseOnOverlayClick = { false }
      >
        <i className='fas fa-times' onClick = { this.handleCloseModalSuccess }  style = { { cursor: 'pointer', margin: '10px' } }></i>
        <p>Your message was sent <span>successfully</span>.</p>
      </Modal>
      <Modal
        isOpen = { this.state.showModalError }
        contentLabel = 'onRequestClose'
        onRequestClose = { this.handleCloseModalError }
        className = 'Modal'
        overlayClassName = 'Overlay'
        shouldCloseOnOverlayClick = { false }
      >
        <i className='fas fa-times' onClick = { this.handleCloseModalError }  style = { { cursor: 'pointer', margin: '10px' } }></i>
        <p><span>Error.</span> Your message was not sent. Please check your connection or firewall settings.</p>
      </Modal>

        <h1>Subscribe to our newsletter</h1>
        <p className = 'description'>Follow our story and get the latest promotonial news about our products and events.</p>
        <Form method='post' onSubmit = {this.onSubmitHandler}>
          <input id = 'email' type = 'email' name = 'email' value = {this.state.email} onChange = { this.onChangeHandler } placeholder = 'Your email address' required/>
          <input type = 'submit' value = 'Subscribe' name = 'send'/>
        </Form>
      </Section>
    )
  }
}
