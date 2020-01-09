import React, { Component } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 10% 4em 10%;
  background-color: rgb(236,238,239);
  & h1 {
    text-align: center;
    padding: 1em 0;
    font-size: 2em;
  }
  & .inner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    gap: 1em;
  }
  & .card-inGrid {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 10em;
    border-radius: 4px;
    padding: 1em;
    background-color: white;
    border-radius: 5px;
  }
  & .date {
    margin-bottom: 1em;
    font-size: 0.8em;
    font-weight: 200;
  }
  & .title {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export default class RSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount = () => {
    // axios.get('https://cors-anywhere.herokuapp.com/https://www.lianatech.com/resources/blog.rss')
    // .then( res => {
    //   console.log(JSON.stringify(res));
    // })
    const Feed = require( 'rss-to-json' );
    Feed.load( 'https://cors-anywhere.herokuapp.com/https://www.lianatech.com/resources/blog.rss', ( err, rss ) => {
      // console.log( rss );
      // console.log( typeof rss.items );
      // for ( let i = 0; i < rss.items.length; i++ ) {
      //   console.log( rss.items[i].title );
      //   console.log( rss.items[i].url );
      //   console.log( rss.items[i].pubDate.slice(5, 16) );
      //   console.log( rss.items[i] );
      // }
      this.setState( { items: rss.items } )
      // console.log(this.state.items)
    });
  }

  render() {
    return (
      <Section>
        <h1>Latest news</h1>
        <div className = 'inner-grid'>
          { this.state.items.map( ( list ) => {
            let date = new Date(list.pubDate);
            let dd = String(date.getDate()).padStart(2, '0');
            let mm = String(date.getMonth() + 1).padStart(2, '0');
            let yyyy = date.getFullYear();
            date = dd + '.' + mm + '.' + yyyy
            return (
              <a href = { list.url } target = '_blank' rel='noopener noreferrer' key = { list.url } >
                <div className = 'card-inGrid' key = { list.title }>
                  <p className = 'date'>{ date }</p>
                  <p className = 'title'>{ list.title }</p>
                </div>
              </a>
            );
          }) }
        </div>
      </Section>
    );
  }
}
