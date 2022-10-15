import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../../store/slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.value);
  return(
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())}></Button>
      <Text style={{alignSelf: 'center'}}>{counter}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())}></Button>
    </View>
  )
}

export default Counter;