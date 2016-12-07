import React from 'react';
import { Link } from 'react-router';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateCase, removeCase } from '../../../api/cases/methods.js';

const handleUpdateCase = (caseId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateCase.call({
      _id: caseId,
      update: { title },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Case updated!', 'success');
      }
    });
  }
};

const handleRemoveCase = (caseId, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Cette action est irréversible. Êtes ous sûr de vouloir supprimer le dossier ?')) {
    removeCase.call({
      _id: caseId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Case removed!', 'success');
      }
    });
  }
};

export const Case = ({ caseItem }) => (
  <ListGroupItem key={ caseItem._id }>
    <Row>
      <Col xs={ 6 } sm={ 8 }>
        <span style={{color: "#666",marginBottom: "10px", fontSize: "15px",textTransform: "uppercase", fontWeight: "600", lineHeight: "35px"}}>{ caseItem.title }</span>
      </Col>
      <Col xs={ 3 } sm={ 2 }>
        <Link to={"/dossiers/" + caseItem._id }>
          <Button
          bsStyle="success"
          className="btn-block">Ouvrir</Button>
        </Link>
      </Col>
      <Col xs={ 3 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveCase.bind(this, caseItem._id) }>
          Supprimer
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);
