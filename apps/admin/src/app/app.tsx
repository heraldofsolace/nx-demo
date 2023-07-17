// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Header } from '@myorg/common-components';
import { useEffect, useState } from 'react';

import axios from 'axios';

export function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/admin').then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <div>
      <Header text="Welcome to admin!" />
      <p>{message}</p>
    </div>
  );
}

export default App;
