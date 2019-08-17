import { errorMessages } from './const';
import { validations } from './validationRules';

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
        let validationName = validator.includes(":") ? validator.split(":")[0] : validator;
        let validateTo = validator.includes(":") ? validator.split(":")[1] : null;
        let validationResult = validateTo ? validations[validationName](fieldValue, validateTo) : validations[validationName](fieldValue);

        if(!validationResult) {
            toReturn = {
                errors: {
                    [fieldName]: errorMessages[validationName]
                }
            }
            break;
        }

    }
    
    return toReturn;
}