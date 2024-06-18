
export default function HomePage() {
    return <div className="children home">
        <h1 className="title">Welcome to THE NotesApp</h1>

        <p className="description">
            Because who doesn't need more ways to procrastinate? Start managing your thoughts now!
        </p>
        <div className="content">
            <div className='grid'>
                <div className="card">
                    <h3>Why Notes?</h3>
                    <p>Because trying to remember everything is like trying to catch a fish with your bare hands.</p>
                </div>

                <div className="card">
                    <h3>How It Works</h3>
                    <p>Simply jot down your genius ideas before they vanish into the void of forgotten dreams.</p>
                </div>

                <div className="card">
                    <h3>About Us</h3>
                    <p>We're a bunch of forgetful developers who thought organizing chaos might be fun.</p>
                </div>
            </div>
            <div className="media">
                <img src=".../../public/giphy.webp" />
            </div>
        </div>
    </div>
}