import Iloveyou from '../../lottie/iloveyou.png'

import Good from '../../lottie/ok.png'
import Hello from '../../lottie/hi.png'
import Yes from '../../lottie/Yes.jpg'




function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
const rand=(tasks)=>{
  let random = Math.floor(3 * Math.random())
 return tasks.filter((task) => {
    return task.index !== random
  })
}

const generateState=()=>{
  let tasks = [
    { name: 'Yes', done: false, index: 0, src: Yes },
    { name: 'Good', done: false, index: 1, src: Good },
    { name: 'Iloveyou', done: false, index: 2, src: Iloveyou },
    { name: 'Hello', done: false, index: 3, src: Hello },
  ]

 

  let newtasks =  rand(tasks)

console.log(newtasks)

  let lasttasks = shuffle(newtasks)
  console.log(lasttasks)
  return lasttasks

}


const INITIAL_STATE = {
  tasks : generateState()
};

const update=(state,name)=>{
let newTasks=[...state]

newTasks.map(task=>{
if(task.name==name){
  task.done=true
}


})

return newTasks


}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setTick":
      return {
        ...state,
        tasks: update(state.tasks,action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
