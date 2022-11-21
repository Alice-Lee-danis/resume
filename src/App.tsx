import React from 'react';
import RepositoryList from './components/repository-list/repositoryList';
import TechnologyList from './components/technology-list/technologyList';
import classes from './app.module.css'
import Info from './components/info-block/infoBlock';

function App() {
  return (
    <div className={classes.app}>
      <Info ></Info>
      <div className={classes.card}>
        <RepositoryList></RepositoryList>
        <TechnologyList></TechnologyList>
      </div>
    </div>
  );
}

export default App;
