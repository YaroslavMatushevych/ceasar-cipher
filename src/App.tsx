
import React from 'react';
import CaesarCipher from './components/CaesarCipher/CaesarCipher';
import styles from './App.module.css';

const App: React.FC = () => {
    return (
        <div className={styles.appContainer}>
            <CaesarCipher />
        </div>
    );
}

export default App;
