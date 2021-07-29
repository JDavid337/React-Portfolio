import './portfolio.scss'
import Work from '../works/works'
export default function Portfolio() {
    const projects = ['myTripr', 'LyricFinder', 'ClosetOrganizer']
    return (
        <div className="portfolio">
        <h1>portfolio</h1>
        {
            projects.map(project => (
                <Work project = {project}/>
            ))
        }
        </div>
    )
}

