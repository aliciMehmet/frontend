import React, { useEffect } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom';

import "./BusinessHome.css"
import Denem from './ManageItems';

function BusinessHome() {

  useEffect(() => {
    
  }, []);

  return (
    <div>
        <div id='business_header'>
            <Link to={"sdfsdf"}>Manage Items</Link>
            <Link to={"sdfsdf"}>Tables Status</Link>

        </div>
    </div>
  )
}

export default BusinessHome