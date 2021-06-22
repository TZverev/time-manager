import { useState, useEffect } from "react";
import setRandomColor from '@/features/random-color.js';

const useAddActivity = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState(setRandomColor());
    const [activity, setActivity] = useState({});
    useEffect(() => {
        setActivity({
            activity: name,
            color: color,
            id: Date.now().toString()
        })
    }, [name, color])

    return { name, setName, color, setColor, activity }
}

export default useAddActivity;