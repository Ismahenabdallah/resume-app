import { Basic_info, Certificates, Eductaion, Other, Projects, Work } from "../types";
export function AddToBasic_info(BasicInfo){
    return{
        type:Basic_info,
        BasicInfo
    }  
}
export function AddToWork(workexp ){
    return{
        type:Work,
        workexp
    }  
}
export function AddToProjects(form ){
    return{
        type:Projects,
        form
    }  
}
export function AddToEductaion(form ){
    return{
        type:Eductaion,
        form
    }  
}
export function AddToCertificates(form ){
    return{
        type:Certificates,
        form
    }  
}
export function AddToOther(form ){
    return{
        type:Other,
        form
    }  
}
