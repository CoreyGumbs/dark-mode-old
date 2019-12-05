import {useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = ()  => {
   const [enabled, setEnabled] = useLocalStorage('enable');

   useEffect(() => {
        if(window.localStorage.getItem(enabled) === true){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
   }, [enabled]);

   return [enabled, setEnabled];
}