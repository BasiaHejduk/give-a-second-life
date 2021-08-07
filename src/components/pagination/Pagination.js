import './Pagination.scss';

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='pagination__item'>
              <p onClick={() => paginate(number)} className='pagination__link'>
                {number}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;