import { errorMessages } from './const';

const EMAIL_REG = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const validate = (fields, values) => {
    let toReturn = {
        errors: {},
        isFormValid: true
    };
    for(let fieldName in fields) {
        let fieldValue = values[fieldName];
        let validateObj = validateField(fields[fieldName], fieldName, fieldValue);
        if(validateObj.errors[fieldName] !== "") {
            toReturn.isFormValid = false;
        }
        toReturn = {
            ...toReturn,
            errors: {
                ...toReturn.errors,
                ...validateObj.errors
            }
        }
    }
    return toReturn;
}

export const validateField = (fieldObj, fieldName, fieldValue) => {
    let { validators } = fieldObj;
    let toReturn = {
        errors: {
            [fieldName]: ""
        }
    };
    for(let validator of validators) {
        if(validator === "isRequired" && fieldValue === "") {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validator]
                }
            }
            break;
        }
        else if(validator.split(":")[0] === "min" && fieldValue.length < parseInt(validator.split(":")[1])) {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validator.split(":")[0]]
                }
            }
            break;
        }
        else if(validator.split(":")[0] === "max" && fieldValue.length > parseInt(validator.split(":")[1])) {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validator.split(":")[0]]
                }
            }
            break;
        }
        else if(validator === "isEmail" && !EMAIL_REG.test(fieldValue)) {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validator]
                }
            }
            break;
        }
        else if(validator === "isNumber" && isNaN(fieldValue)) {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validator]
                }
            }
            break;
        }
        else if(validator.split(":")[0] === "isExact" && fieldValue.length !== parseInt(validator.split(":")[1])) {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validator.split(":")[0]]
                }
            }
            break;
        }
    }
    return toReturn;
}