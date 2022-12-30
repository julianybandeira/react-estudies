import {useState} from 'react';

const ManageData = () => {

    const [number, setNumber] = useState(20);

    return (
        <div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => {
                    setNumber(25)
                }}>Mudar state</button>
            </div>
        </div>
    )
}

export default ManageData