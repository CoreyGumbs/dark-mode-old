import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] =  useState(() => {
        //get item via key param from localStorage
        const item = window.localStorage.getItem(key);

        //return Item if present else return initialValue param if no item in localStorage
        return item  ? JSON.parse(item) : initialValue;
    });

    const setValue = value =>{
        //set state
        setStoredValue(value);
        //save to local Storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    
    return [storedValue, setValue];
}
