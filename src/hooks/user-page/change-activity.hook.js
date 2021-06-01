import { useEffect, useState } from "react";

const useChangeActivity = (item) => {
    const [isСhanging, setIsChanging] = useState(false);
    const [color, setColor] = useState(item.color);
    const [name, setName] = useState(item.activity);
    const [activity, setActivity] = useState(item);
    const [error, setError] = useState(null);
    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }
    const handleChangeName = (e) => {
        setName(e.target.value)
        setError(null)
    }
    const cancelChanging = () => {
        setColor(item.color)
        setName(item.activity)
        setError(null)
        setIsChanging(false)
    }
    useEffect(() => {
        setActivity({
            activity: name,
            color: color,
            id: item.id
        })
    }, [color, name])

    return {
        isСhanging,
        setIsChanging,
        color,
        name,
        handleChangeColor,
        handleChangeName,
        cancelChanging,
        activity,
        error,
        setError
    }
}

export default useChangeActivity;