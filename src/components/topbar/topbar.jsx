import './topbar.scss'

export default function Topbar(props) {
    const {components, setComponent} = props
    return (

        <nav> 
            <ul>
                <li onClick = {()=>setComponent(components[0])}>About Me</li>
                <li onClick = {()=>setComponent(components[1])}>Portfolio</li>
                <li onClick = {()=>setComponent(components[3])}>Contact Info</li>
                <li onClick = {()=>setComponent(components[2])}>Resume</li>
            </ul>
        </nav>
    )
}

