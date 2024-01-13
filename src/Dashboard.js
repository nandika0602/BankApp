import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div>
                <nav className="nav">
                    <Link to="/">
                    <button>Logout</button>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Dashboard;