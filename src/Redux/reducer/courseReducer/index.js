const initial_state={
    message:"",
    error:"",
    loading:false,
    allCourseMessage:"",
    allCourseLoading:false,
    allCoursesData:[]
}

const courseReducer=(state=initial_state,action)=>{
    switch(action.type){
case "COURSE_DATA_REQUEST":
    return {...state,loading:true}
    
    case "COURSE_DATA_SUCCESS":
        return {...state,message:action.payload.message,loading:false}

    case "COURSE_DATA_FAIL":
        return {...state,message:'Course Not Annoucement Added succesfully',loading:false}
    case 'EMPTY_MESSAGE':
        return {...state,message:''}
    case "GETTING_COURSES":
        return {...state,allCourseLoading:true}
    case "ALL_COURSES_REQUEST":
        return {...state,allCoursesData:action.payload,allCourseLoading:false}
    case "COURSES_NOT":
        return {...state,allCoursesData:[],allCourseMessage:action.payload,allCourseLoading:false}
        default:
        return state;
}
}

export {courseReducer}