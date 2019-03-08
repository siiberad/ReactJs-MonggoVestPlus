import React from 'react';
import { Link } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import '../assets/scss/_back.scss';

const Back = ({ lastLocation }) => (
    lastLocation && <a className="button-prev"> <Link to={lastLocation || '/'}>Kembali</Link> </a>
  );
  
  export default withLastLocation(Back);