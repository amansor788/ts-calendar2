import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
    const [health, setHealth] = useState('');

    useEffect(() => {
        axios.get('/api/health')
            .then(response => setHealth(response.data.status))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>{health}</h1>
        </div>
    );
};

export default App;
