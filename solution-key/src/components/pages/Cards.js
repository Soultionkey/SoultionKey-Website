import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Player } from 'video-react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import './Cards.css';
const Example = (props) => {
  return (
          // <div className="blog-vedio">
          //   <Player
          //     playsInline
          //     poster="/assets/poster.png"
          //     src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          //   />
          //   <span className="blog-text">vedio</span>
          // </div>
      <CardDeck >
      <Card >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This is a wider card with supporting text below</CardText>
        </CardBody>
      </Card>
      <Card style={{height:'300px'}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This is a wider card with supporting text below</CardText>
        </CardBody>
      </Card>
      <Card style={{height:'300px'}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This is a wider card with supporting text below</CardText>
        </CardBody>
      </Card>
      
    </CardDeck>
  );
};

export default Example;