import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './index.scss';

const Game = () => (
  <Grid fluid className="game-container">
    <Row>
      <Col className="game-item" xs={12} sm={3} md={2} lg={1} />
      <Col className="game-item" xs={12} sm={3} md={2} lg={1} />
      <Col className="game-item" xs={12} sm={3} md={2} lg={1} />
    </Row>
  </Grid>
);

export default Game;
