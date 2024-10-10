export default function Item(props) { 
    const link = props.link;
    const content = props.content
    return(
        <li className="hover:text-gray-300"><a href={link}>{content}</a></li>
    )
 }