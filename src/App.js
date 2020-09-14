import React, { Component } from 'react';
import {NavPic, NavText} from './components/Navigation';
import up from './images/arrow-white.png';
import styles from "./style/Navigation.module.css";

class App extends Component {
  render() {
  return (
    <>
      <NavPic where='/' pic={up} style={styles.top} />
      <NavText where='/' text='Press if you gay.' type='light' style={"btn-light test2 " + styles.navi}/>
    </>
  );
}
}

export default App;
