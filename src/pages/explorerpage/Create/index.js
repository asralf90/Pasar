/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Search as SearchIcon } from '@material-ui/icons';
import logoHeader from 'assets/svgs/logo_header.svg';
import Header from 'components/header';
import HeaderActions from 'actions/header.actions';
import FilterActions from 'actions/filter.actions';
import styles from './styles.module.scss';
import Board from 'components/Board';

const PasarExplorer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderActions.toggleSearchbar(false));
    dispatch(FilterActions.updateCategoryFilter(null));
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.explorerlogo}>
        <Link to="/">
          <img src={logoHeader} alt="logo" />
        </Link>
        <h1>Pasar Explorer</h1>

        <div className={styles.searchbar}>
          {/* <SearchIcon className={styles.searchicon} /> */}
          <input
            placeholder="Search by contract/address/tx hash/name"
            className={styles.searchinput}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Board />
        </div>
        <div className={styles.column}>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default PasarExplorer;
