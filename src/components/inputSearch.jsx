import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import '../css/inputSearch.css';

const InputSearch = (props) => {
  const inputRef = useRef(null);

  const searchHandler = (event) => {
    event.preventDefault();
    props.sendKeyword(inputRef.current.value);
  };
  return (
    <div className="container">
      <form action="" className="form">
        <input
          type="text"
          className="search-input"
          id="search"
          autoComplete="off"
          ref={inputRef}
          placeholder="Search Location"
        />
        <button onClick={searchHandler} className="btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
