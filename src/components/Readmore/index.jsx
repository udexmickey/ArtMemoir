import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Readmore(props) {

            return (
                <ReactReadMoreReadLess
                    charLimit={150}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                >
                     erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum 
                     augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed 
                     ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.

                </ReactReadMoreReadLess>
            );

}
