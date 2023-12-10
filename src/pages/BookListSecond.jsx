import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'


const BookListFirst = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=4'
                );
                const data = await response.json();
                setBookData(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className='mt-5'>

            <h1>Harry Potter</h1>
            

            <Row >
            {bookData.map((book, index) => (
                <Col key={index}>
                    <Card style={{ width: '18rem' }}>
                        {book.volumeInfo.imageLinks && (
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
    
                        )}
    
                        <Card.Body>
                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            <Card.Text>
                                <strong>Author:</strong>{' '}
                                {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </Card>

                </Col>
                    ))}
            </Row>

            

             
        </div>
    );
};

export default BookListFirst;