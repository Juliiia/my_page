import React from 'react';
// @ts-ignore
import { Document} from 'react-pdf/dist/esm/entry.webpack';
// @ts-ignore
import bilder from "../assets/bilderliste.pdf"

const Bilderliste = () => {
    return (
        <div>
            Test
            <Document file={bilder}/>
        </div>
    );
}

export default Bilderliste;