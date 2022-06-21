import { useState } from 'react';

export const AddLeague = ( { onNewLeague } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue  = inputValue.trim();
        if( newInputValue.length < 1) return;
        // setLeagues(leagues =>  [inputValue, ...leagues]);
        onNewLeague(newInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Search league'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
