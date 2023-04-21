import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const Paginate = ({ totalPAge, name = "page" }) => {
  const [search, setSearch] = useSearchParams();
  const currentPAge = parseInt(search.get(name) || 1);
  const { pathname } = useLocation();
  const _search = new URLSearchParams(search);
  const renderItem = () => {
    const list = [];
    let start = currentPAge - 2;
    let end = currentPAge + 2;

    if (start < 1) {
      start = 1;
      end = start + 4;
    }
    if (end > totalPAge) {
      end = totalPAge;
      start = end - 4;

      if (start < 1) start = 1;
    }
    for (let i = start; i <= end; i++) {
      _search.set(name, i);
      list.push(
        <li key={i} className="page-item">
          <a className="page-link" href={`${pathname}?${_search.toString()}`}>
            {i}
          </a>
        </li>
      );
    }
    return list;
  };

  _search.set(name, currentPAge - 1);
  const preLink = `${pathname}?${_search.toString()}`;
  _search.set(name, currentPAge + 1);
  const nextLink = `${pathname}?${_search.toString()}`;

  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        {currentPAge > 1 && (
          <li className="page-item">
            <Link className="page-link page-link-arrow" to={preLink}>
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        )}
        {renderItem()}
        {currentPAge < totalPAge - 2 && (
          <li className="page-item">
            <Link className="page-link page-link-arrow" to={nextLink}>
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
