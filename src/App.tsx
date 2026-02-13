import './App.css'
import {List} from "./List/List.tsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import LazyImages from "./LazyImages/LazyImages.tsx";
import {Memoization} from "./Memo/Memoization.tsx";
import {UseMemoDemo} from "./useMemo/useMemoDemo.tsx";
import {UseCallbackDemo} from "./useCallback/useCallbackDemo.tsx";
import {CodeSplitting} from "./CodeSplitting/CodeSplitting.tsx";


function App() {

    return (
        <Router>
            <nav style={{
                position: 'absolute',
                top: 10,
                left: 10,
                zIndex: 1000,
                display: "flex",
                gap: "10px",
            }}>
                <Link to="/">Virtualna lista</Link> |{" "}
                <Link to="/ljene-slike">Ljene slike</Link> |{" "}
                <Link to="/memo">Memoization</Link>|{" "}
                <Link to="/use-memo">useMemo Demo</Link>|{" "}
                <Link to="/use-callback">useCallback Demo</Link>|{" "}
                <Link to="/code-splitting">Code splitting Demo</Link>
            </nav>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/ljene-slike" element={<LazyImages/>}/>
                <Route path="/memo" element={<Memoization/>}/>
                <Route path="/use-memo" element={<UseMemoDemo/>}/>
                <Route path="/use-callback" element={<UseCallbackDemo/>}/>
                <Route path="/code-splitting" element={<CodeSplitting/>}/>
            </Routes>
        </Router>
    )
}

export default App
