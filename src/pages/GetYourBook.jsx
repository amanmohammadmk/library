import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GetYourBook = () => {
  const [bookName, setBookName] = useState('');
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const searchResponse = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`
      );
      const searchData = await searchResponse.json();

      if (searchData.docs && searchData.docs.length > 0) {
        const firstBook = searchData.docs[0];

        if (firstBook.key) {
          const detailsResponse = await fetch(`https://openlibrary.org${firstBook.key}.json`);
          const detailsData = await detailsResponse.json();

          setBookDetails(detailsData);
          setError(null);
        } else {
          setError('Book details not found.');
        }
      } else {
        setError('Book not found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div>
      <div className='d-flex flex-column text-center justify-content-center mb-5'>

        <h2>Description</h2>
        <p>A good book description is a detailed, descriptive copy that is good for public display, used for your book marketing, book discovery, and for sales purposes. It helps potential buyers find and understand your book. It's your pitch. Your chance to get people interested.</p>

      </div>
      <h2>Search Book Description By Name</h2>

      <Form className="d-flex">
        <Form.Control
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
          type="text"
          placeholder="Enter book name"
          className="me-2"
        />

        <Button onClick={handleSearch} variant="outline-info">
          Search
        </Button>
      </Form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {bookDetails && (
        <div>
    


          <h4 className='mt-4'>Description</h4>
          <p>{bookDetails.description.value}</p>

          {/* <h4>Starts with</h4>
          <p>{bookDetails.first_sentence.value}</p> */}

          {/* <h4>Published</h4>
          <p>{bookDetails.created.value}</p>

          <h4>Last modified</h4>
          <p>{bookDetails.last_modified.value}</p> */}
        </div>
      )}
    </div>
  );
};

export default GetYourBook;




