import React from 'react';
import {NavText} from '../components/Navigation';


const Landing = (props) => {
  return (
    <section id='landing'>
      <div className='container-fluid d-flex align-middle justify-content-center'>
        <div className='row'>
          <div className='col'>
            <NavText where='sec1' style='btn-primary' text='This is section 1' />
          </div>
          <div className='col'>
            <NavText where='sec1' style='btn-primary' text='This is section 2' />
          </div>
          <div className='col'>
            <NavText where='sec1' style='btn-primary' text='This is section 3' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;

