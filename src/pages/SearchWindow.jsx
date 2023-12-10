import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from './LoadingSpinner';


const SearchWindow = () => {

    const [showspin, setShowSpin] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setShowSpin(false)
        }, 1000)
    }, [])


    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {

        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`);
            const data = await response.json();
            setSearchResults(data.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



        const [authorQuery, setAuthorQuery] = useState('');
        const [authorResults, setAuthorResults] = useState([]);
      
        const handleAuthorSearch = async () => {
          try {
            const response = await fetch(`https://openlibrary.org/search.json?author=${encodeURIComponent(authorQuery)}`);
            const data = await response.json();
            setAuthorResults(data.docs);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

    return (
        <div>
            <h2 className='mt-4'>Search By Book Name</h2>
            <Form className="d-flex">
                <Form.Control
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                    type="text"
                    placeholder="Book name"
                    defaultValue="Mark"
                    className='me-2'
                />

                <Button onClick={handleSearch} variant="outline-info" >Search</Button>
            </Form>


            {
                showspin ?
                    <LoadingSpinner /> :

                    <div>
                        {
                            searchResults.length > 0 && (
                                <div>
                                    <h3 className='m-5'>Search Results For {searchQuery} </h3>
                                    <ul>
                                        {searchResults &&

                                            searchResults.map((result, index) => (
                                                <li key={index}>
                                                    <strong>Title:</strong> {result.title} | <strong>Author(s):</strong>{' '}
                                                    {result.author_name ? result.author_name.join(', ') : 'N/A'}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )
                        }
                    </div>
            }

            <h2 className='mt-4'>Search By Author Name</h2>
            <Form className="d-flex">
                <Form.Control
                    value={authorQuery}
                    onChange={(e) => setAuthorQuery(e.target.value)}
                    required
                    type="text"
                    placeholder="Author name"
                    defaultValue="Mark"
                    className='me-2'
                />

                <Button onClick={handleAuthorSearch} variant="outline-info" >Search</Button>
            </Form>


      {authorResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {authorResults.map((result, index) => (
              <li key={index}>
                <strong>Title:</strong> {result.title} | <strong>Author(s):</strong>{' '}
                {result.author_name ? result.author_name.join(', ') : 'N/A'}
              </li>
            ))}
          </ul>
        </div>
      )}

        </div>
    );
};

export default SearchWindow;