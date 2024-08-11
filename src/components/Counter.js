import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  // because wrap reducer in another object;
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=> state.counter.showCounter)

  // console.log(counter.counter);

  // const show = useSelector((state) => state.showCounter);
  // const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {
    // dispatch({type: "toggle"})
    dispatch(counterAction.toggle());

    // console.log(show);
    // dispatch()
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  function handleIncrement(text) {
    console.log(text);
    // dispatch({ type: "increment" });
    dispatch(counterAction.increment());
    // console.log(counter);
  }
  const increamentBy5Handler = () => {
    // dispatch({type: "increment5", payload: 5})
    dispatch(counterAction.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => handleIncrement("abc")}>increment</button>
        <button onClick={increamentBy5Handler}>increament by 5</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
