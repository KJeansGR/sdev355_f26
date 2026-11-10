import { useFetch } from "../hooks/hooks"
import BookCard from "../components/BookCard.jsx"
import Panel from "../components/Panel.jsx"

export default function Want() {
    const { 
        data: books, 
        setData: setBooks,
        loading, 
        error 
    } = useFetch(`http://localhost:4000/api/books`, [], []);

    function cards(title, books) {
        return (
            <Panel title={title}>
                {books.length > 0 && books.map(book => <BookCard key={book.id} book={book} /> )}
            </Panel>
        )
    }
    const filteredBooks = books.filter(el => el.status === "want");

    return (
    <>
    <div>{cards("Want", filteredBooks)}</div>
    </>
  );
}

