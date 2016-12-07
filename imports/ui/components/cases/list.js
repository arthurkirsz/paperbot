import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Case } from './item.js';

export const CasesList = ({ cases }) => (
  cases.length > 0 ? <ListGroup className="cases-list">
    {cases.map((caseItem) => (
      <Case key={ caseItem._id } caseItem={ caseItem } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">Vous n'avez pas encore créé de dossier.</Alert>
);

CasesList.propTypes = {
  cases: React.PropTypes.array,
};
