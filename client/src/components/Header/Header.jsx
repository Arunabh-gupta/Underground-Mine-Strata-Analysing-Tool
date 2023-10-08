import React from 'react';
import '../Header/Header.css'
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>NAME OF MINE</h1>
        <h2>SCCL</h2>
        <h3>PANEL NUMBER: 53</h3>
      </div>
      <div className="header-right">
        <h3>Brief Information</h3>
        <h3>Panel Length</h3>
        <h4>Width</h4>
        <h3>Pillar Dimensions: 20x22x3</h3>
      </div>
    </header>
  );
}

export default Header;
