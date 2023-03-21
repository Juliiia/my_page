import React from 'react';
import { Document} from 'react-pdf/dist/esm/entry.webpack';
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