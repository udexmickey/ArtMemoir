import React, { useState } from 'react';
import HeadBadge from '../../components/HeaderBadge';
import { Link } from 'react-router-dom';
import './whitepaper.scss';
// import ButtonDirections from '../../components/ButtonDirections/btn-directions';
// import DropDown from '../../components/DropDowns/DropDown';
import DropDowns from '../../components/DropDowns/DropDown';
import content from './content';
import {FiDownload} from 'react-icons/all'
export default function WhitePaper() {
  const [selected, setSelected] = useState('Abstract');

  return (
    <div className="whitePaper">
      <div className="whitepaper-badge">
        <HeadBadge name="WhitePaper" />
      </div>
      <div  className="whitepaper-holder">
        <div className="">
          <div className="whitepaper-title">
            <DropDowns selected={selected} setSelected={setSelected} />
          </div>

          <div style={{marginBottom: "3rem"}} className="whitepaper-content-holder">
            <div className="whitepaper-content">{content[selected]}</div>
          </div>
          {/* <ButtonDirections /> */}
          <div className="white-paper-download">
            <Link to='/files/Art Memoir.pdf' target="_blank" download>
                Click here to download the whitepaper <span> <FiDownload /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
