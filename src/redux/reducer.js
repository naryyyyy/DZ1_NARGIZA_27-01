const initialState={
    title:'old title',
    paragraphs:[]
}

export default function reducer(state=initialState, action){
if(action.type==='CHANGE_TITLE'){
    return{...state,title:action.payload}
   // return{title:action.payload}
    //////////
} else if(action.type==="ADD_P"){
    console.log(state,action)
    const newParagraphs = [...state.paragraphs]
    newParagraphs.push(action.payload)
    return{...state,paragraphs:newParagraphs }
} else if(action.type==="HANDLE_MENU"){
    return{...state,menu: !state.menu}
} else if(action.type.value){
    return{value:action.payload}
}

    return state
}