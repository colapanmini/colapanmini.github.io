import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div>
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
      </div>
  )
}

export default Sidebar;