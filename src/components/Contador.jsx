import React from 'react';
import "../css/Contador.css"

const Contador = ({ numeroClics }) => {
    return (
        <div className='contador'>
            {numeroClics}
        </div>
    );
};

export default Contador;