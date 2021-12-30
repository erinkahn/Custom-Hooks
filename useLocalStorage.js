import React, { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue = '') => {
    const [state, setState] = useState(
        () => window.localStorage.getItem('key') || defaultValue,
    )

    useEffect(() => {
        window.localStorage.setItem('key', state)
    }, [state])

    return [state, setState]
}


// use this in a component
// export default function ComponentName() {
//     const [name, setName] = useLocalStorage('name')

//     const handleChange = event => setName(event.target.value);

//     return (
//         <div>
//             <form>
//                 <label htmlFor="name">Name: </label>
//                 <input type="text" value={name} onChange={handleChange} id="name" />
//             </form>
//             {name ? <strong>Hi {name}</strong> : 'Please type your name'}
//         </div>
//     )
// }