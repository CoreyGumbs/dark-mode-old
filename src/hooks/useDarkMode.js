import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = ()  => {
   const [darkMode, setDarkMode] =  useLocalStorage('dark');

    useEffect(() => {
        const body = document.querySelector('body').classList;
        
        if(darkMode){
            body.add('dark-mode');
        }else{
            body.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}