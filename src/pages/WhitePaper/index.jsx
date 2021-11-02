import React, { useState } from 'react';
import HeadBadge from '../../components/HeaderBadge';
import './whitepaper.scss';
import ButtonDirections from '../../components/ButtonDirections/btn-directions';
// import DropDown from '../../components/DropDowns/DropDown';
import DropDowns from '../../components/DropDowns/DropDown';
import content from './content';

export default function WhitePaper() {
  const [selected, setSelected] = useState('Abstract');

  return (
    <div className="whitePaper">
      <div className="whitepaper-badge">
        <HeadBadge name="WhitePaper" />
      </div>
      <div className="whitepaper-holder">
        <div className="">
          <div className="whitepaper-title">
            <DropDowns selected={selected} setSelected={setSelected} />
          </div>

          <div className="whitepaper-content-holder">
            <div className="whitepaper-content">{content[selected]}</div>
          </div>
          <ButtonDirections />
        </div>
      </div>
    </div>
  );
}
