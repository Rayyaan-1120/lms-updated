const initial_state = {
    message: "",
    error: false,
    loading: false,
    attendance: [],
    attendanceloader: false,
    attendancemarked: false,
    attendancestatus: true,
    singleatt: [],
    toaststate: false
}

const attendancereducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'ADD_ATTENDANCE':
            return { ...state, loading: true }
        case 'ADD_ATTENDANCE_SUCCESS':
            return { ...state, loading: false, attendance: [...state.attendance, action.payload], toaststate: true }
        case 'ADD_ATTENDANCE_ERROR':
            return { ...state, error: true, loading: false }
        case 'GET_ATTENDANCE_SUCCESS':
            return { ...state, attendance: action.payload, loading: false, toaststate: true }
        case 'GET_ATTENDANCE_ERROR':
            return { ...state, error: true, loading: false }
        case 'GET_ATTENDANCE':
            return { ...state, loading: true }
        case 'DELETE_ATTENDANCE_SUCCESS':
            return { ...state, message: action.payload, toaststate: true }
        case 'DELETE_ATTENDANCE_ERROR':
            return { ...state, error: true }
        case 'OPEN_ATTENDANCE':
            return { ...state, attendanceloader: true }
        case 'CLOSE_ATTENDANCE':
            return { ...state, attendanceloader: true }
        case 'CLOSE_ATTENDANCE_SUCCESS':
            return { ...state, attendanceloader: false, toaststate: true }
        case 'OPEN_ATTENDANCE_AGAIN':
            return { ...state, attendanceloader: false, toaststate: true }
        case 'UPDATE_ATTENDANCE':
            return { ...state, attendanceloader: true }
        case 'UPDATE_ATTENDANCE_SUCCESS':
            let ind = state.attendance.findIndex(data => data._id == action.id);
            let arr = [...state.attendance];
            let stdInd = arr[ind].arrOfStudent.findIndex(data => data.rollNo == action.rollNo);
            arr[ind].arrOfStudent[stdInd].status = 'present'
            return { ...state, attendanceloader: false, attendance: arr, toaststate: true }
        case 'UPDATE_ATTENDANCE_ERROR':
            return { ...state, attendanceloader: false, error: true }
        case 'SINGLE_ATTENDANCE':
            const finded = state.attendance.find(state => state._id == action.id)
            // console.log(finded)
            // console.log(finded.arrOfStudent)
            return { ...state, singleatt: finded.arrOfStudent }
        default:
            return state
    }
}

export { attendancereducer }