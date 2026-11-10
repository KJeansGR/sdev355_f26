import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <p>Thanks for stopping by.</p>
            <p>Here is the shelf: <Link to="/books">books</Link></p>
        </>
    )
}