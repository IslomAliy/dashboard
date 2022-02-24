
import "./Pagination.css";
import { NavLink } from 'react-router-dom'

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const navLinkStyles = ({isActive}) => {
      return {
        backgroundColor: isActive ? '#4094f7' : '',
        borderRadius: isActive ? '11.4px' : '',
        color: isActive ? 'white' : ''
      }
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <NavLink
              onClick={() => paginate(number)}
              to={() => false}
              style={navLinkStyles}
              className="a-pagination"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;