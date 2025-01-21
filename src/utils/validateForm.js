import { object, string, number } from "yup";

let userInfo = object({
    fullname: string().required("Es obligatorio completar el campo de Nombre"),
    email: string().email().required("Es obligatorio completar el campo de Email"),
    confirmEmail: string().email(),
    phone: number().required("Es obligatorio completar el campo de Teléfono").min(11999999, "Asegurese que este número de teléfono exista").max(6001199999999, "Asegurese que este número de teléfono exista"),
})

const validateForm = async(dataForm) => {
    try{
        await userInfo.validate(dataForm)
        return {status: "success", message: "Pasó la validación"}
    } catch(error){
        return {status: "error", message: error.message}
    }
}

export default validateForm