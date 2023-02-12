import { Basic_info, Certificates, Eductaion, Other, Projects, Remove, Work } from "../types";

const intitialState = {
    BasicInfo: {}, workexp: []


};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intitialState, action) {
    switch (action.type) {
        case Basic_info:
            return {
                ...state,
                BasicInfo: action.BasicInfo,

            };
        case Work:

            return {

                ...state,
                workexp: action.workexp,

            };
        
        case Projects:
            return {
                ...state,
                ProjectsI: action.form,
            };
        case Eductaion:
            return {
                ...state,
                EductaionI: action.form,
            };
        case Certificates:
            return {
                ...state,
                CertificatesI: action.form,
            };
        case Other:
            return {
                ...state,
                OtherI: action.form,
            };
case Remove:
    const item_index = action.index;
    const new_state = [...state];
    new_state.splice(item_index,1);
   
       return new_state;





        default:
            return state;
    }
}
