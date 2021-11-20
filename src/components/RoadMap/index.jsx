import React from 'react'
import './roadmap.scss'

const RoadMap = props => {
    return (
        <div className='roadmap'>
            {/* <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            </table> */}
            <div className="roadmap-holder">
                <div className="round-table-top"> 2021</div>
                <div className="roadmap-stick"> 
                    <div className="roadmap-stick-holder">
                        <div className="span-border-line">
                            <div className="dot-map">
                            <div className="map-content">
                                <div className="map-title"> Q4 </div>
                                <div className="map-message"> - Project Development</div>
                                <div className="map-message"> - Single Nfts lunch</div>
                                <div className="map-message"> - Website Development</div>
                                <div className="map-message"> - Cross Continent Collaboration (CNFt) Partnership</div>
                                <div className="map-message"> - Introduction of The Seven Continents</div>
                                <div className="map-message"> - On boarding Artist for The African Continent</div>

                            </div>
                            </div>
                        </div>
                        <div className="map-title-next"> 2022 </div>

                        <div className="span-border-line">
                            <div className="dot-map">
                            <div className="map-content">
                                <div className="map-title"> Q1 </div>
                                <div className="map-message"> - Phrase I Marketing</div>
                                <div className="map-message"> - Token utility Partnership ( African Continent)</div>
                                <div className="map-message"> - Lunch of The African Continen</div>

                            </div>
                            </div>
                        </div>
                        <div className="span-border-line">
                            <div className="dot-map">
                            <div className="map-content">
                                <div className="map-title"> Q2 </div>
                                <div className="map-message"> - Partnerships</div>
                                <div className="map-message"> - Stake and Earn Partnership</div>
                                <div className="map-message"> - Phrase II Marketing</div>
                                <div className="map-message"> - New Nft utility unveil</div>
                                <div className="map-message"> - Cross Community Games</div>

                            </div>
                            </div>
                        </div>
                        <div className="span-border-line">
                            <div className="dot-map">
                            <div className="map-content">
                                <div className="map-title"> Q3 </div>
                                <div className="map-message"> - NFT utilities (Unveil)</div>
                                <div className="map-message"> - Introducing Africa’s First Game (Based on African Mythology) Marketing Phase 3</div>
                                <div className="map-message"> - Gamefi Partnership</div>
                                <div className="map-message"> - Introduction of The Asia Continent</div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="round-table-bottom">2022</div>
                <div id="background">
                    <ul class="container">
                        <li class="backward">R</li>
                        <li class="backward">O</li>
                        <li class="backward">A</li>
                        <li class="backward">D</li>
                        <li class="backward">M</li>
                        <li class="backward">A</li>
                        <li class="backward">P</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default RoadMap
