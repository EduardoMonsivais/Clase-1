import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Counter({ datos }) {
    const [contador, setContador] = useState(0);
    console.log ({contador})

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <Button variant="primary" onClick={incrementarContador}>CLICK</Button>
            <p>Contador: {contador}</p>
            {datos.map((dato) => (
                <h1>{dato}</h1>
            ))}
        </div>
    );
}

export default Counter;