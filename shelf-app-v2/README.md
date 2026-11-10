# shelf-w62

The Shelf at the end of **w6.2 Dynamic Routes + Navigation**: one book per
URL, a missing book that says so, navigation from code, and an old address
that still works. Built on `demos/355/shelf-w61`.

**This is a historical state, kept on purpose.** A locked deck's screenshots can
only ever be re-shot from the app they show, and `demos/355/shelf` is the living
app, which has moved on.

```bash
npm install
cd ../shelf-api && npm run dev      # REQUIRED: http://localhost:4000
npm run dev                         # or: npm run build:single
```

## What arrived this session

| | |
|---|---|
| `App.jsx` | `books/:id` → BookDetail, and `shelf` → OldShelf. `books/reading`, `books/want` and `books/done` route to one StatusList (the practice) and still win over `books/:id`: a static segment outranks a dynamic one, wherever it is written |
| `BookDetail.jsx` | no `id` prop: `useParams()` reads it from the URL. `useFetch(\`${API}/${id}\`, null)`, otherwise unchanged. An unknown id still matches `books/:id`; the API's 404 lands in the existing `error` screen |
| `BookCard.jsx` | an eighth prop, `id`; the title is `<Link className="card-open" to={\`/books/${id}\`}>` |
| `Shelf.jsx`, `StatusList.jsx` | pass `id={book.id}`. Shelf no longer renders BookDetail under the banner; `currentId` stays for NowReading |
| `StatusList.jsx` | the practice "one component for every status": `StatusList({ status, title })` replaces FinishedList and WantList; App routes `/books/reading`, `/books/want` and `/books/done` (status `finished`) to it, and Nav links to all three |
| `JumpToBook.jsx` | `notFound`, a boolean cleared on every keystroke; the message reads `q` |
| `JumpToBook.jsx` | in the Nav: type part of a title, Go → `navigate(\`/books/${hit.id}\`)` |
| `OldShelf.jsx` | `<Navigate to="/books" replace />`: /shelf keeps working, and Back still returns to the page before it |
| `NotFound.jsx` | a real page for URLs no route matches |

A book added with Add gets a `crypto.randomUUID()` id the API has never seen, so
its title link opens "Could not open it: the server answered 404." until week 8
saves books to the API.

## Changed 2026-10-25

Rebuilt from the new `shelf-w61` after the w6.2 review. The previous state had
`selectedId` in Shelf, `useFetch(url)` with `data ?? []`, `error` changed to an
Error object (which broke every caller that printed it), and the whole-`book`
BookCard prop that the new w5.1 never introduces.
