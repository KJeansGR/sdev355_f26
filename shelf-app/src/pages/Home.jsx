import { Link } from "react-router";
import Header from "../layout/Header";

export default function Home() {
    return (
        <>
            <p>Thanks for stopping by.</p>
            <p>Here is the shelf: <Link to="/books">books</Link></p>
        </>
    )
}