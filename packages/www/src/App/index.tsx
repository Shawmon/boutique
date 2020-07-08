import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_ALL_BOOKS = gql`
  query getAllBooks {
    books {
      id
      title
    }
  }
`;

interface Book {
  id: string;
  title: string;
}

export default function App(): JSX.Element {
  const {loading, error, data} = useQuery(GET_ALL_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <ul>
      {data.books.map((book: Book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}
