export interface Book {
  id: string;
  title: string;
}

const books: Book[] = [
  {id: 'B001', title: '人类简史'},
  {id: 'B002', title: '未来简史'},
];

export const getAllBook = (): Book[] => books;
export const getBookById = (id: string): Book | null => books.find((book) => book.id === id) || null;
export const addBook = (book: Book): Book => {
  books.push(book);
  return book;
};
