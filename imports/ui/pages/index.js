import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
  <Jumbotron className="text-center" style={{ marginTop: "50px" }}>
    <h2>PaperBot</h2>
    <p>L'appli pour monter des dossiers administratifs sans se faire chier.</p>
    <p>
      <Link to="/dossiers/nouveau">
        <button className="button green">
          Monter un dossier
        </button>
      </Link>
    </p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Actuellement en version v0.9.0</p>
  </Jumbotron>
);
