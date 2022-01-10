import React from 'react'
import './roadmap.scss'

const RoadMap = props => {
  return (
    <div className='roadmap'>
      <div className='roadmap-holder'>
        <div className='round-table-top'> 2022</div>
        <div className='roadmap-stick'>
          <div className='roadmap-stick-holder'>
            <div className='span-border-line'>
              <div className='dot-map'>
                <div className='map-content'>
                  <div className='map-title'> Q1 </div>
                  <div className='map-message'> - Introducing the seven continents</div>
                  <div className='map-message'> - Token utility Partnership ( African Continent)</div>
                  <div className='map-message'> - On boarding the African Continent Artists</div>
                  <div className='map-message'>
                    {' '}
                    - Lunch of <strong>The African Continent</strong>
                  </div>
                  {/* <div className='map-message'>
                    {' '}
                    - Introduction of The Seven Continents
                  </div>
                  <div className='map-message'>
                    {' '}
                    - On boarding Artist for The African Continent
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div className='map-title-next'> 2022 </div> */}

            {/* <div className='span-border-line'>
              <div className='dot-map'>
                <div className='map-content'>
                  <div className='map-title'> Q1 </div>
                  <div className='map-message'> - Phrase I Marketing</div>
                  <div className='map-message'>
                    {' '}
                    - Token utility Partnership ( African Continent)
                  </div>
                  <div className='map-message'>
                    {' '}
                    - Lunch of The African Continen
                  </div>
                </div>
              </div>
            </div> */}
            <div className='span-border-line'>
              <div className='dot-map'>
                <div className='map-content'>
                  <div className='map-title'> Q2 </div>
                  <div className='map-message'> - Partnerships</div>
                  <div className='map-message'>
                    {' '}
                    - Stake and Earn Partnership
                  </div>
                  <div className='map-message'> - 
                    Introducing Africa’s First Game (Based on African Mythology)
                  </div>
                  <div className='map-message'> - Phase - One Marketing</div>
                  {/* <div className='map-message'> - Cross Community Games</div> */}
                </div>
              </div>
            </div>
            <div className='span-border-line'>
              <div className='dot-map'>
                <div className='map-content'>
                  <div className='map-title'> Q3 </div>
                  <div className='map-message'> - Gamefi Development Updates</div>
                  <div className='map-message'>
                    {' '}
                    - NFT utilities (Unveil)
                  </div>
                  <div className='map-message'> - Marketing Phase 2</div>
                  <div className='map-message'>
                    {' '}
                    - Introduction of The Asia Continent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='round-table-bottom'>2022</div>
        <div id='background'>
          <ul class='container'>
            <li class='backward'>R</li>
            <li class='backward'>O</li>
            <li class='backward'>A</li>
            <li class='backward'>D</li>
            <li class='backward'>M</li>
            <li class='backward'>A</li>
            <li class='backward'>P</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RoadMap;