const initial_state = {
  message: "",
  error: false,
  loading: false,
  assignments: [],
  toaststate: false,
  singleassignment: [],
  adminassignment: [],
  adminsingleassignment: [],
  filteredassignment:[],
  toaststate:false
};

const assignmentreducer = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_ASSIGNMENT":
      return { ...state, loading: true };
    case "ADD_ASSIGNMENT_SUCCESS":
      return { ...state, loading: false };
    case "ADD_ASSIGNMENT_ERROR":
      return { ...state, error: true, loading: false };
    case "STD_GET_ASSIGNMENT":
      return { ...state, loading: true };
    case "STD_GET_ASSIGNMENT_SUCCESS":
      return { ...state, loading: false, assignments: action.payload };
    case "STD_GET_ASSIGNMENT_ERROR":
      return { ...state, loading: false, error: true };
    case "GET_SINGLE_ASSIGNMENT":
      let singleatt = state.assignments.find(
        (state) => state._id === action.id
      );
      let arr = singleatt;
      return { ...state, singleassignment: arr };
    case "UPDATE_STD_ASSIGNMENT":
      return { ...state, loading: true };
    case "UPDATE_STD_ASSIGNMENT_SUCCESS":
      return { ...state, loading: false };
    case "UPDATE_STD_ASSIGNMENT_ERROR":
      return { ...state, loading: false, error: true };
    case "GET_ADMIN_ASSIGNMENT":
      return { ...state, loading: true };
    case "GET_ADMIN_ASSIGNMENT_SUCCESS":
      console.log(state.adminassignment);
      return { ...state, adminassignment: action.payload, loading: false };
    case "GET_ADMIN_ASSIGNMENT_ERROR":
      return { ...state, error: true, loading: false };
    case "GET_ADMIN_SINGLE_ASSIGNMENT":
      let stdarr = state.adminassignment.find(
        (state) => state._id === action.id
      );
      return { ...state, adminsingleassignment: stdarr };
    case "FILTER_ASSIGNMENTS":
      let adminfilterassign = [...state.adminassignment];
      console.log(adminfilterassign);
      adminfilterassign = state.adminassignment.filter(
        (entry) =>
          entry.institute === action.institute &&
          entry.city === action.city &&
          entry.course === action.course &&
          entry.batch === action.batch &&
          entry.time === action.time
      );
      console.log(adminfilterassign);
      return { ...state, filteredassignment: adminfilterassign }
    case 'EMPTY_ASSIGNMENTS':
        return {...state,filteredassignment:[]}
    case 'GIVE_STD_MARKS':
        return {...state,loading:true}
    case 'GIVE_STD_MARKS_SUCCESS':
          return {...state,loading:false,toaststate:true}
          case 'GIVE_STD_MARKS_ERROR':
            return {...state,loading:false,error:true,toaststate:true}
    default:
      return { ...state };
  }
};

export { assignmentreducer };
