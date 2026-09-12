import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <div className="brand-mark">S</div>
                <h2>Student Task Portal</h2>
            </div>
            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/add-task">Add Task</Link>
            </div>
        </nav>
    );
}

export default Navbar;