import React from 'react'

const Pagination = ({ page, totalPages, onChange }) => {

    const getPages = () => {
        const pagination = []

        for (let i = 0; i < totalPages; i++) {
            let pageN = i + 1

            pagination.push(
                <li key={i} onClick={() => onChange(pageN)}
                    className={page === pageN ? 'active page-link' : 'page-link'}>

                    {pageN}
                </li >
            )
        }


        return pagination
    }

    return (
        <nav aria-label="Page navigation example ">
            <ul className="pagination">

                {/* <li className="page-item"><a className="page-link" href="#!" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span></a></li> */}

                {getPages()}


                {/* <li className="page-item"> <a className="page-link" href="#!" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span></a></li> */}
            </ul>
        </nav>
    )
}

export default Pagination