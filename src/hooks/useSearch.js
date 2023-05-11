// const { useState, useRef, useMemo } = require("react");

// export const useSearch = () => {
//     const [search, setSearch] = useState('');
//     const searchInputEl = useRef(null);
//     const query = 'hard coded query with corresponding params';

//     const params = useMemo(() => ({ 
//       // query params with values
//     }), [search]);

//     const {
//         loading, result: results, error, clear,
//     } = useSearch(search, query, params, sanityConfig);

//     const clearSearch = () => {
//         setSearch('');
//         clear();
//         searchInputEl.current.focus();
//     };
// }