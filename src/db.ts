// db.ts
import Dexie, { type EntityTable } from 'dexie';

interface Row {
    id?: number;
    title: string;
    summary: string;
    section: string;
    page: number;
    wiki: boolean;
    title_index: number;
    instance_of: string[];
    wikipedia_url: string;
    wikidata_id: string;
}
  
const db = new Dexie('project2025index') as Dexie & {
    items: EntityTable<Row, 'id'>;
  };
  
  // Schema declaration
  db.version(1).stores({
      items: '++id, page, section', // Primary key and indexed fields
  });
  
  // Data loading function
  async function loadData() {
      try {
          const response = await fetch(
              'https://raw.githubusercontent.com/Autonomy-Data-Unit/project-2025-index/refs/heads/main/data/index_items.json'
          );
  
          if (!response.ok) {
              throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
  
          const data: Row[] = await response.json();
  
          await db.items.clear(); // Clear existing data if needed
          await db.items.bulkAdd(data); // Add new data
      } catch (error) {
          console.error('Error loading data:', error);
      }
  }
  
  // Export the database and types
  export type { Row };
  export { db, loadData };
  