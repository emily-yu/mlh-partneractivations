// getRecords.js - Fetches Kintone records, transforms response, & returns array of list items

/**
 * Notes on Kintone responses:
 * record.title.value = value of the Title field
 * record.author.value = value of the Author field
 * record.Record_number.value = value of the Record number field (unique key for the record)
 */

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = 'http://localhost:8000/getData';

export default async function getRecords() {
  const response = await fetch(getRecordsEndpoint);
  const jsonResponse = await response.json();

  console.log(jsonResponse);

  let uniqueKey, title, author;

  // Map (1->1 transform) an array of records from the formatted API response to an array of list items
  const ListItemArray = jsonResponse.records.map(
    record => {
      uniqueKey = record.Record_number.value;
      title = record.title.value;
      author = record.author.value;

      return [title, author]
      // return <li key={uniqueKey}><b>{title}</b> > {author}</li>
    }
  );
  // console.log(ListItemArray)
  return ListItemArray;
};