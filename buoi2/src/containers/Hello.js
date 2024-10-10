export default function Hello() {
    const hiAll = () => {
        alert("Hello Everyone")
    }
    const hiYou = (name) => {
        alert("Hello " + name)
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <span className="flex flex-col h-24 justify-between">
                <h2>Button alert</h2>
                <button className="bg-slate-100 px-2 py-1 shadow-md hover:bg-slate-200" onClick={hiAll}>Hi All</button>
                <button className="bg-slate-100 px-2 py-1 shadow-md hover:bg-slate-200" onClick={() => hiYou("Khang Vo")}>Hi you</button>
            </span>
        </div>
    )
}
