import React, {useState} from 'react'
import HeadBadge from '../../components/HeaderBadge';
import './whitepaper.scss'
import ButtonDirections from '../../components/ButtonDirections/btn-directions';
// import DropDown from '../../components/DropDowns/DropDown';
import DropDowns from '../../components/DropDowns/DropDown';

export default function WhitePaper() {
    const [selected, setSelected] = useState("Overview");
    return (
        <div className='whitePaper'>
            <div className="whitepaper-badge">
                <HeadBadge name='WhitePaper' />
            </div>
            <div className="whitepaper-holder">
                <div className="">
                    <div className="whitepaper-title">
                        <DropDowns selected={selected} setSelected={setSelected} />
                    </div>
                    
                    <div className="whitepaper-content-holder">
                        <div className="whitepaper-content">
                            We are a group of artists and digital creators that creates arts of various cultures, Tribes, and indifferent art spaces minted in NFTs. Our Focus is on the Exploration of Art beyond just beautification through NFTs.
                            As great lovers of art and supporters of artists. We are promoting various cultures/tribes of the world through our arts, but not limited to popular tribes or cultures.
                            Our NFTs have been sectioned into single NFTs and Collection NFTs, all of which have value to our Investors, Partners, Community, and the World of Art globally.
                            Having various artists at heart, our single NFT is mainly to support the artists while our collection NFTs are designed to give our investors and partners value that can be used in real-time.
                            These NFTs will be used as a medium of transactions, stakes, shares, and lots more. Here art won’t just be used only for beatifications and preserving the cultural heritage of the people or the art they represent but will also be used in
                            real-time situations without being controlled by a centralized organization or a third party, this will be achieved through the use of Blockchain.
                            ArtMemoir is a mix between a blockchain startup and an art gallery. We provide physical, tangible, immutable artwork on our platform to those looking for cultural representation from around the world as well as help with auctioning off some of the most popular pieces. We are your best choice.
                            In today's economy, it can often be difficult to find someone or something that speaks to one's own heritage- ArtMemoir ensures this experience with every item we sell. Providing an opportunity for artists in all genres has been proven time and again to be a way of celebrating life in its fullest sense while at the same time helping spread and educate cultures across our global society.
                            In showcasing artists from all corners of the globe, ArtMemoir offers the opportunity for collectors to amass a diverse portfolio of artwork - while also supporting burgeoning talent and enabling entrepreneurship in some of the neediest economies.
                            Copyright © 2021 - ArtMemoir
                        </div>
                    </div>
                    <ButtonDirections />
                </div>
            </div>
        </div>
    )
}
