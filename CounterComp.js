import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment} from './redux/Count'

const CounterComp = () => {

    const counter1= useSelector((value) => value.counter.counter)
    const dispatch= useDispatch()

    const add = () => {
        dispatch(increment())
    }

    const sub = () => {
        dispatch(decrement())
    }



  return (
    
    <View style={{flex:1,backgroundColor:'white',paddingTop:300}}>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Button title='+' onPress={add} ></Button>
            
        <Text style={{fontSize:20,color:'black',alignSelf:'center',marginHorizontal:10}}>{counter1}</Text>
            <Button title='-' onPress={sub}></Button>
        </View>
    </View>
  )
}

export default CounterComp
