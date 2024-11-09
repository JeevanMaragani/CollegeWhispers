import React, { useState } from 'react';
import ConfessionForm from '../ConfessionForm';


const ConfessionFormPage = () => {
    const [confessions, setConfessions] = useState([]);

    // This function will add the new confession to the list
    const addConfession = (newConfession) => {
        setConfessions([...confessions, newConfession]);
    };

    return (
        <div>
            <ConfessionForm addConfession={addConfession} />
            
        </div>
    );
};

export default ConfessionFormPage;
