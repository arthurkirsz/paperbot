import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CasesContainer from '../../containers/cases/list.js';

export const CasesList = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Mes dossiers</h4>
      <CasesContainer />
    </Col>
  </Row>
);
