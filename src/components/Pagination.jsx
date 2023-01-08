import React from "react";

function Pagination(props) {
    const pageNumbers =[];

    for(let i = 1; i <= Math.ceil(props.totalProd / props.prodPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <nav aria-label="Search results pages">
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => {
                    return (
                    <li key={number} className="page-item">
                        <a onClick={() => props.paginate(number)}className="page-link">
                            {number}
                        </a>
                    </li>
                    )
                }
                )}
            </ul>
        </nav>
    )
}

export default Pagination;