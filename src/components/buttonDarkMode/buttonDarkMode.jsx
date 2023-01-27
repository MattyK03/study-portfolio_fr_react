import { useEffect } from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './Sun.png';
import moon from "./Moon.png";

import "./buttonDarkMode.css";

const ButtonDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {

        if (darkMode === 'dark') {
            document.body.classList.add('night__mode');
        } else {
            document.body.classList.remove('night__mode');
        }

    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            })
    })

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }
    
    const buttonNormal = "dark__mode";
    const buttonActive = "dark__mode active";

    return (  
        <button className={darkMode === 'dark' ? buttonActive : buttonNormal} onClick={toggleDarkMode}>
            <img className="dark__mode-btn__icon" src={sun} alt="Light mode" />
            <img className="dark__mode-btn__icon" src={moon} alt="Dark mode" />
        </button>
    );
}
 
export default ButtonDarkMode;