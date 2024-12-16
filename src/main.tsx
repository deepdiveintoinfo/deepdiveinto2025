import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/client'
import { pdfjs } from 'react-pdf';
// import { db, loadData } from './db';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


// (async () => {
//     // Load data into the database
//     await loadData();

//     // Example query: Fetch items within a page range
//     const items = await db.items
//         .where('section')
//         .equals("White House Office") // Inclusive range
//         .toArray();

//     console.log('Items in range:', items);
// })();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
