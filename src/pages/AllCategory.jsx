

import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AllCategory = () => {
  const [query, setQuery] = useState('ficition');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://openlibrary.org/search.json?q=${query}`
      );
      const results = response.data.docs;
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div>
      <div className='d-flex flex-column text-center justify-content-center mb-5'>

        <h2>Category</h2>
        <p>Category is a broad term referring to general aspects of the book's content and audience, such as fiction, non-fiction, children's, or YA books. Genre is a type of sub-category which tells you more precisely about the book's content, examples being science fiction, crime, history, memoir, and so on.</p>
      </div>
      <h1>Search Category</h1>
      <div>
        <Form className="d-flex">
          <Form.Control
            value={query}
            onChange={handleInputChange}
            required
            type="text"
            placeholder="Book name"
            defaultValue="Mark"
            className='me-2'
          />

          <Button onClick={handleSearch} variant="outline-info" >Search</Button>
        </Form>

      </div>
      <div>
        <h2>{query}</h2>
        <ul>
          {searchResults.map((book) => (
            <li key={book.key}>{book.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategory;