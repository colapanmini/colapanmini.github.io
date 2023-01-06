import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function OffcanvasMulia() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="d-lg-none offcanvas-toggler" variant="dark" onClick={handleShow}>
      <FontAwesomeIcon icon={faBars} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter By</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="search-wrapper">
           <form className="form-inline">
            <input className="form-control mr-sm-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark form-control-feedback search-button" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
           </form>
         </div>
        <div className="card">
        <ul className="list-group list-group-flush">
          <button className="btn btn-dark list-group-item">Antivirus</button>
          <button className="btn btn-dark list-group-item">Anagelsics-Antipyretics</button>
          <button className="btn btn-dark list-group-item">Antacids & Antiulcerants</button>
        </ul>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasMulia;