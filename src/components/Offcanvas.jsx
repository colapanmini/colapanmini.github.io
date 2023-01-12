import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function OffcanvasMulia(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Button Filter
  function handleFilter(event) {
    const categoryFilterProd = props.obatMulia.filter(element => {
      return (element.categories === event.target.name);
    });
    
    props.setCurrentPage(1);
    props.setProductArray(categoryFilterProd);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function handleClearFilter() {
    props.setCurrentPage(1);
    props.setProductArray(props.obatMulia);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  // Search Bar Filter
  function handleSubmit(event) {
    // console.log(event.target.elements.searchInput.value);
    const searchFilterProd = props.obatMulia.filter(element => {
      return element.name.toLowerCase().includes(event.target.elements.searchInput.value.toLowerCase()) || element.composition.toLowerCase().includes(event.target.elements.searchInput.value.toLowerCase()) || element.type.toLowerCase().includes(event.target.elements.searchInput.value.toLowerCase()) || element.categories.toLowerCase().includes(event.target.elements.searchInput.value.toLowerCase());
    });

    // console.log(searchFilterProd);

    props.setCurrentPage(1);
    props.setProductArray(searchFilterProd);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    event.preventDefault();
  }

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
           <form className="form-inline" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2 search-bar" autoComplete="off" type="search" placeholder="Search" aria-label="Search" name="searchInput"/>
            <button className="btn btn-outline-dark form-control-feedback search-button" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
           </form>
           <br/>
           <button className="btn btn-danger" disabled={props.buttonDisabled} onClick={handleClearFilter}>Clear Filter</button>
         </div>
        <div className="card">
        <ul className="list-group list-group-flush">
          <button name="Antivirus" onClick={handleFilter} className="btn btn-dark list-group-item">Antivirus</button>
          <button name="Anagelsics-Antipyretics" onClick={handleFilter} className="btn btn-dark list-group-item">Anagelsics-Antipyretics</button>
          <button name="Antacids & Antiulcerants" onClick={handleFilter} className="btn btn-dark list-group-item">Antacids & Antiulcerants</button>
        </ul>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasMulia;