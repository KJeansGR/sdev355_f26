import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Shelf from './pages/Shelf.jsx'
import About from './pages/About.jsx'
import Layout from './layout/Layout.jsx'
import Finished from './pages/Finished.jsx'
import Want from './pages/Want.jsx'
import StatusShelf from './components/StatusShelf.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="books" element={<Shelf />} />

                    <Route path="about" element={<About />} />
                    
                    <Route path="/books/finished" element={<StatusShelf status="finished"  title="Finished Books"/>} />  
                    
                    <Route path="/books/want" element={<Want />} />  

                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>, 
)
