import { Link } from "react-router-dom";
export default function Item(props) { 
    const link = props.link;
    const content = props.content
    return(
        <li className="hover:text-gray-300"><Link to={link}>{content}</Link></li>
    )
 }