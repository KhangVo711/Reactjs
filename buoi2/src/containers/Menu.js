import Information from "./Information";
import Item from "./Item";
import { useContext } from "react";
import { Context } from "./Context";
export default function Menu(props) {

    const list = [
        { link: "/login", content: "Login" },
        { link: "/hello", content: "Hello" },
        { link: "/car", content: "Car" },
        { link: "/add", content: "Add" },
    ]
    const {isData} = useContext(Context);
    const nameUser = isData.username;

    const renderItem = list.map((ls) => <Item key={ls} link={ls.link} content={ls.content} />)

    return (
        <div className="flex justify-around bg-slate-700 text-white w-full h-12 items-center">
            <div>
                <Information nameUsers={nameUser} />
            </div>
            <div className="w-64">
                <ul className="flex w-full justify-between">
                    {renderItem}
                </ul>
            </div>
        </div>
    )
}