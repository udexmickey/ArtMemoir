import React from 'react'
import HeadBadge from '../../components/HeaderBadge'
import { Link, useHistory, useParams } from 'react-router-dom'
import './whitepaper.scss'
// import ButtonDirections from '../../components/ButtonDirections/btn-directions';
// import DropDown from '../../components/DropDowns/DropDown';
import DropDowns from '../../components/DropDowns/DropDown'
import content from './content2'
// import {FiDownload} from 'react-icons/all'
export default function WhitePaper() {
  // const [selected, setSelected] = useState('Abstract')
  const { content: type } = useParams()
  const history = useHistory()

  return (
    <div className='whitePaper'>
      <div className='whitepaper-badge'>
        <HeadBadge name='WhitePaper' />
        <div className='white-paper-download white-paper-download-top'>
          Thank you for your interest in Art Memoir! Please find detailed
          information about our company below.
          <Link
            to='/files/ArtMem WP 2.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
          >
            <span> (download here) </span>
          </Link>
        </div>
      </div>
      <div className='whitepaper-holder'>
        <div className=''>
          <div className='whitepaper-title'>
            <DropDowns
              selected={type || 'Abstract'}
              setSelected={d => history.push(`/whitepaper/${d}`)}
            />
          </div>

          <div
            style={{ marginBottom: '3rem' }}
            className='whitepaper-content-holder'
          >
            <div className='whitepaper-content'>
              {content[type || 'Abstract'].map((d, i) => (
                <div key={i}>
                  <p>{d}</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
          {/* <ButtonDirections /> */}
          <div className='white-paper-download'>
            Thank you for your interest in Art Memoir! Please find detailed
            information about our company below.
            <Link
              to='/files/ArtMem WP 2.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              <span> (download here) </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
