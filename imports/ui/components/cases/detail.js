import React from 'react';
import ReactTooltip from 'react-tooltip';
import ReactFilepicker from 'react-filepicker';

import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Panel, Table, Row, Col } from 'react-bootstrap';
import { _ } from 'meteor/underscore';

import { Files } from '../../../api/files/files';
import { insertFile } from '../../../api/files/methods';
import { updateAttachment } from '../../../api/attachments/methods';


const File = ({ fid }) => {
  let file = Files.findOne(fid);
  return <button className="button green"><a href={file.url} target="_blank" title={file.filename} style={{color:"#FFF"}}>OUVRIR</a></button>
}


const saveFile = (_id, response)=> {
  let file = {
    client:response.client,
    filename:response.filename,
    filepickerId:response.id,
    isWriteable:response.isWriteable,
    mimetype:response.mimetype,
    size:response.size,
    url:response.url
  };

  insertFile.call({ "file": file }, (error, id) => {
    console.log(error);
    updateAttachment.call({
      _id: _id,
      fid: id
    }, (error)=> {
      console.info(error);
    })
  });


}

// Obsolete Component. Might be used later :p
const renderSuccess = (attachments) => {
    let incomplete = _.find(attachments, function (a, i) {
      return !a.fid;
    });

    if(!incomplete) {
      return <div>
        <h1 style={{textAlign: "center", color: "#da5347", fontSize: "30px", margin: "40px"}}>Votre dossier est complet. Bravo !</h1>
        <button className="button red block" style={{margin: "20px auto 50px"}}>TOUT IMPRIMER</button>
      </div>
    }
}

export const CaseDetail = ({ files, caseItem, pid, attachments }) => (
  <Row>
    <Col xs={ 12 } sm={ 12 } md={ 12 }>
      { renderSuccess(attachments) }
    </Col>
    <Col xs={ 12 }>
      <h4 className="page-header" data-tip="Compléter votre dossier pour continuer">
        Votre dossier de location pour { caseItem.title } ( { attachments.length } pièces )
      </h4>
      <ReactTooltip />
    </Col>
    <Col xs={ 12 } sm={ 12 } md={ 12 }>
      <ul className="list-table">
        {attachments.map(({ _id, title, fid }) => {
          if(!fid) {
            return <li key={ _id }>
              <h3>{ title }</h3>
              <ReactFilepicker apikey={ "A3WbFdwPToqAc2XIRB4hgz" }
                defaultWidget={ false }
                onSuccess={ saveFile.bind(this, _id) }
                options={{
                  language: 'fr',
                  buttonText: 'Envoyer un fichier',
                  buttonClass: 'button blue',
                  services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'SKYDRIVE']
                }}/>
            </li>
          }
          else {
            return <li key={ _id }>
              <h3><strike>{title}</strike></h3>
              <File fid={ fid }/>
            </li>
          }
        })}
      </ul>
    </Col>
  </Row>
)
