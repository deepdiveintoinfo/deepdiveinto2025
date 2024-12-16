
import { useEffect, useState } from 'react';
import { db, type Row } from '@/db';

export const useIndex = () => {
    const [items, setItems] = useState<Row[]>([]); // State to store query results

    useEffect(() => {
        const fetchData = async () => {    
            // Query the database
            const queriedItems = await db.items
                .where('section')
                .equals('White House Office') // Query condition
                .toArray();
            setItems(queriedItems); // Store results in state
        };
    
        fetchData().catch(console.error); // Handle errors
    }, []); // Empty dependency array: run only once when component mounts

    return [items, setItems];
}
