import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counterSlice'

export default function Counter(){
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(incrementByAmount(5))}}>Increment By 5</button>
        </div>
    )
}