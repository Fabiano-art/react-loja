import react from "react"
import "./Location.css"

export default function Location(props) {
    return (
        <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7501130264695!2d-46.61863248559696!3d-23.541488466742496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58e1e65912cb%3A0xc5414fde6d75fb0c!2sLargo%20da%20Concordia%2C%20126%20-%20Br%C3%A1s%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003012-010!5e0!3m2!1sen!2sbr!4v1628822684793!5m2!1sen!2sbr" allowfullscreen="" loading="lazy"></iframe>          
        </div>
    )
}