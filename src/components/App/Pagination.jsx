import React from 'react';
import { usePage, useDispatch } from '../../hooks/appContext';

const Pagination = () => {

  const page = usePage();
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'NEXT_PAGE' });
  const decrement = () => dispatch({ type: 'LAST_PAGE' });

  const pageButtons = (
    <section>
      <button disabled={ page === 1 } name='previous' onClick={decrement}>Previous</button>
      {page}
      <button name='next' onClick={increment}>Next</button>   
    </section>
  );

  return (
    pageButtons
  );
};

export default Pagination;
