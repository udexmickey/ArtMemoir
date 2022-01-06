import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
// import ReadMoreReact from 'read-more-react';
export default function Readmore(props) {

            return (
                <ReactReadMoreReadLess
                    charLimit={`${props.length}`}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                >
                     {`${props.content}`}
                </ReactReadMoreReadLess>
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