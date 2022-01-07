import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
// import ReadMoreReact from 'read-more-react';
import './readmore.scss'
export default function Readmore(props) {

            return (
                <div className="readmore">
                    <ReactReadMoreReadLess
                        charLimit={`${props.length}`}
                        // readMoreText={"Read More ▼"}
                        // readLessText={"Read Less ▲"}

                        readMoreText={`${props.readMore}`}
                        readLessText={`${props.readLess}`}
                        style={{whiteSpace: "nowrap", textDecoration: "none", color: "green"}}
                    >
                        {`${props.content}`}
                    </ReactReadMoreReadLess>
                </div>
            );

// }



        // return (
        //     <ReadMoreReact 
        //         text={`
        //             ${props.content}`}
        //         min={20}
        //         ideal={70}
        //         max={500}
        //         readMoreText="Read More"/>
        // ) 
    
}