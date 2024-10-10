import {useState} from 'react'
export default function Car() {
    const [choiceColor, setChoiceColor] = useState("")

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "Red"
    });
    const updateColor = (colorChoice) => {
        setCar(previousState => {
            return {...previousState, color: colorChoice }
        });
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
        <div className='h-52 flex flex-col justify-around bg-slate-100 w-64 px-3 py-3 shadow-md rounded-sm'>
            <h1 className='font-bold'>My brand: <span className='font-normal'>{car.brand}.</span></h1>
            <p className='font-bold'>Color: <span className={car.color === "Red" ? 'font-normal text-red-500' : 'font-normal text-blue-500'}>{car.color}.</span></p>
            <p className='font-bold'>Model: <span className='font-normal'>{car.model}.</span></p>
            <p className='font-bold'>Year: <span className='font-normal'>{car.year}.</span></p>
            <div className='flex w-full justify-start'>
                <h1 className='font-bold'>Choice Color:</h1>
                <div className='flex w-1/2 justify-around'>
                <button onClick={() => {setChoiceColor("Red")}} className='px-1.5 py-0.5 bg-red-400 rounded-xl hover:bg-red-500 text-sm' type='button'>Red</button>
                <button onClick={() => {setChoiceColor("Blue")}} className='px-1.5 py-0.5 bg-blue-400 rounded-xl hover:bg-blue-500 text-sm' type='button'>Blue</button>
                </div>
            </div>
            <div className='flex w-full justify-center mt-2'>
            <button className='bg-slate-50 px-2 py-1 w-2/3 shadow-md hover:bg-slate-200' type="button" onClick={() => updateColor(choiceColor)}>Update color</button>
            </div>
        </div>
        </div>
    )
}
