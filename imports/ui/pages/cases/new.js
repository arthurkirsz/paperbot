import React from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { insertCase } from '../../../api/cases/methods.js';

const handleInsert = (status) => {
  insertCase.call({status: status}, (error, id) => {
    console.log(error);
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/dossiers/'+id);
    }
  });
}

const renderChoices = () => {
  let statuses = [
    {
      "title": "Salarié CDI",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type" : "id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type" : "",
        },
        {
          "title": "Bulletin de salaire Décembre",
          "type" : "",
        },
        {
          "title": "Bulletin de salaire Novembre",
          "type" : "",
        },
        {
          "title": "Bulletin de salaire Octobre",
          "type" : "",
        },
        {
          "title": "Contrat de travail ou à défaut Attestation employeur",
          "type" : "",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type" : "quittance",
        },
      ],
    },
    {
      "title": "Etudiant",
      "seed": [
        {
          "title":"Pièce d'identité",
          "type": "id_card",
        },
        {
          "title":"Justificatif du statut élève/ étudiant / apprenti",
          "type": "",
        },
        {
          "title":"Quittance de loyer ou taxes foncières",
          "type": "quittance",
        },
      ],
    },
    {
      "title": "Non salarié",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type": ""
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type": ""
        },
        {
          "title": "Bilan / compte de résultats / attestation comptable de bénéfice",
          "type": ""
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type": "quittance"
        },
        {
          "title": "Kbis, Avis d'inscription RCS ou répertoire des métiers",
          "type": ""
        },
      ],
    },
    {
      "title": "Retraité",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type": "id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type": "",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type": "quittance",
        },
        {
          "title": "Dernier bulletin de pension",
          "type": "",
        },
      ],
    },
    {
      "title": "Sans emploi",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type": "id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type": "",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type": "quittance",
        },
        {
          "title": "Justificatifs des 3 derniers paiements de Pôle-emploi",
          "type": "",
        },
        {
          "title": "Attestation Pôle emploi justifiant des indemnités restantes",
          "type": "",
        },
      ],
    },
    {
      "title": "Intermittent du spectacle",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type": "id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type": "",
        },
        {
          "title": "Bulletin de salaire ",
          "type": "",
        },
        {
          "title": "Bulletin de salaire juillet",
          "type": "",
        },
        {
          "title": "Bulletin de salaire juin",
          "type": "",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type": "quittance",
        },
        {
          "title": "Justificatifs des 3 derniers paiements de Pôle-emploi",
          "type": "",
        },
      ],
    },
    {
      "title": "Salarié CDD",
      "seed": [
        {
          "title":"Pièce d'identité",
          "type":"id_card",
        },
        {
          "title":"Avis d'imposition 2016 sur le revenu 2015",
          "type":"",
        },
        {
          "title":"Bulletin de salaire ",
          "type":"",
        },
        {
          "title":"Bulletin de salaire juillet",
          "type":"",
        },
        {
          "title":"Bulletin de salaire juin",
          "type":"",
        },
        {
          "title":"Contrat de travail ou à défaut Attestation employeur",
          "type":"",
        },
        {
          "title":"Quittance de loyer ou taxes foncières",
          "type":"quittance",
        },
      ],
    },
    {
      "title": "Intérimaire",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type":"id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type":"",
        },
        {
          "title": "Bulletin de salaire ",
          "type":"",
        },
        {
          "title": "Bulletin de salaire juillet",
          "type":"",
        },
        {
          "title": "Bulletin de salaire juin",
          "type":"",
        },
        {
          "title": "Contrat de travail ou à défaut Attestation employeur",
          "type":"",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type":"quittance",
        },
        {
          "title": "Attestation de garantie FASTT",
          "type":"",
        },
      ],
    },
    {
      "title": "Fonctionnaire",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type":"id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type":"",
        },
        {
          "title": "Bulletin de salaire ",
          "type":"",
        },
        {
          "title": "Bulletin de salaire juillet",
          "type":"",
        },
        {
          "title": "Bulletin de salaire juin",
          "type":"",
        },
        {
          "title": "Contrat de travail ou à défaut Attestation employeur",
          "type":"",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type":"quittance",
        },
      ],
    },
    {
      "title": "Assistante maternelle",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type": "id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type": "",
        },
        {
          "title": "Contrat de travail ou à défaut Attestation employeur",
          "type": "",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type": "quittance",
        },
        {
          "title": "3 derniers relevés mensuels Pajemploi",
          "type": "",
        },
        {
          "title": "Justificatif annuel Pajemploi N-1",
          "type": "",
        },
        {
          "title": "Justificatif annuel Pajemploi N-2",
          "type": "",
        },
      ],
    },
    {
      "title": "Gérant salarié",
      "seed": [
        {
          "title": "Pièce d'identité",
          "type":"id_card",
        },
        {
          "title": "Avis d'imposition 2016 sur le revenu 2015",
          "type":"",
        },
        {
          "title": "Bulletin de salaire ",
          "type":"",
        },
        {
          "title": "Bulletin de salaire juillet",
          "type":"",
        },
        {
          "title": "Bulletin de salaire juin",
          "type":"",
        },
        {
          "title": "Bilan / compte de résultats / attestation comptable de bénéfice",
          "type":"",
        },
        {
          "title": "Contrat de travail ou à défaut Attestation employeur",
          "type":"",
        },
        {
          "title": "Quittance de loyer ou taxes foncières",
          "type":"quittance",
        },
        {
          "title": "Kbis, Avis d'inscription RCS ou répertoire des métiers",
          "type":"",
        },
      ],
    }
  ];

  return <ListGroup>
    { statuses.map((status, i) => (
      <ListGroupItem key={status + '_' + i} onClick={ handleInsert.bind(this, status) }>{ status.title }</ListGroupItem>
    ))}
  </ListGroup>

}
export const CaseNew = () => (
  <div className="full-popup">
    <Row>
      <Col xs={ 12 } sm={ 8 } md={ 8 } className="card">
        <h2 style={{textAlign: "center", fontSize:"23px"}}>Nouveau dossier</h2>
        <p style={{ textAlign:"center", color:"#aaa"}}>Etape 1 sur 1 : Votre situation</p>
        <Alert bsStyle="warning">
          Dans cette démo, seul le dossier de location est disponible
        </Alert>
        <h4 className="page-header">Situation</h4>
        <Alert bsStyle="success">
          En fonction de votre situation, les éléments requis pour la location peuvent différer
        </Alert>
        { renderChoices() }
      </Col>
    </Row>
  </div>
);
