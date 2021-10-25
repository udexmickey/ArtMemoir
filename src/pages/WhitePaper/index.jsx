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
                            Viverra non dignissim iaculis amet. Malesuada accumsan, quis sed ac. At malesuada feugiat in maecenas mauris egestas. Et mauris turpis dignissim vulputate. Non venenatis dictum pellentesque consequat. A egestas orci elementum, fermentum, lorem. Laoreet odio pulvinar pellentesque sit etiam ac vitae.
                            Ut vitae tempus, sapien, nulla accumsan ut ante luctus diam. Porta enim auctor arcu massa gravida at vestibulum. Amet, faucibus nunc sed at nunc arcu nibh. Suspendisse tortor purus pellentesque non enim facilisi. Felis scelerisque ultricies vel ut dui semper. Faucibus pellentesque fermentum tempus, montes, pellentesque. Sed iaculis donec sed phasellus sodales commodo sed. Maecenas pulvinar est ac accumsan sit donec mattis pellentesque. Vitae dolor facilisis tincidunt vulputate. Tincidunt vulputate aliquet faucibus ornare neque. Nisi eu ac ut sed tristique. Enim facilisi eleifend sagittis, turpis. Odio sit massa euismod platea non felis.
                            Ipsum suspendisse urna eget ac vitae. Mauris venenatis mus adipiscing ultrices donec. Risus tellus enim viverra scelerisque venenatis malesuada ipsum. Pulvinar blandit mi, interdum pellentesque in in amet neque. Cursus gravida convallis netus eu lectus sed sociis. Diam leo augue arcu varius at id risus adipiscing. Sit felis, orci ante quam cras natoque vitae. Aliquet vestibulum ipsum quis facilisi. Ullamcorper pellentesque consectetur elit nibh mi lorem. Nibh nisl rhoncus, posuere pulvinar et.
                            Tristique elit leo, non integer dui, cras bibendum sagittis. Egestas placerat vitae blandit viverra ultrices ac vel. Id aliquam scelerisque libero, convallis mauris semper curabitur et non. Sit nulla cursus at orci fermentum dolor. Ornare ornare lacinia convallis platea. Sed viverra mus cursus urna, risus nunc, vestibulum velit.
                            Urna turpis proin quis at. Placerat eu posuere porttitor sit orci egestas aliquam. Amet integer id suspendisse porttitor mi enim. A in lobortis viverra consequat. Ultrices vitae sit gravida lacinia. Leo duis scelerisque integer tincidunt consectetur id sagittis eu pellentesque. Vitae sem sodales sollicitudin est nulla mauris. Morbi tincidunt amet, pharetra tempor augue dignissim pellentesque massa hac. Mattis nunc massa sed amet, enim. Dui cras imperdiet malesuada etiam malesuada arcu. Elementum id id proin ac at urna. Purus ut donec ante et orci rhoncus. Tellus phasellus facilisis fames aenean nec mauris.
                            Posuere lectus justo, neque rhoncus sodales. Nibh scelerisque suspendisse mauris, mattis feugiat est ut. Enim sed sed donec sed et congue adipiscing. Sollicitudin velit, gravida ultrices cras at ac ipsum egestas libero. Ut faucibus volutpat ultricies fermentum. Dolor aliquet senectus venenatis eget amet id diam. Tempus blandit justo, vestibulum quam laoreet. Tempus et lectus bibendum duis. Viverra gravida habitasse dolor donec condimentum tincidunt lorem. In vitae bibendum amet, elementum dolor, in quam magna purus.
                            Pulvinar vitae, vitae pellentesque ut non nunc. Non enim fringilla quam eget aliquam, sit convallis pretium ullamcorper. Pharetra, dignissim ac quis adipiscing consectetur nunc nunc, placerat. Convallis odio viverra ipsum donec vitae cursus. Est morbi consectetur sit enim auctor fermentum quis.
                            Id tincidunt diam non nulla consequat. Cras risus, tempor pharetra laoreet sed. Tincidunt rutrum eu diam eu ut eleifend lobortis massa. Id diam massa, nisl augue vestibulum. Integer morbi elementum nisl leo ut.
                            Turpis et et nisl sapien. Turpis in tempor non viverra. Purus leo pellentesque sollicitudin id nulla at eu. Egestas ultricies integer ultrices enim id. 
                        </div>
                    </div>
                    <ButtonDirections />
                </div>
            </div>
        </div>
    )
}
