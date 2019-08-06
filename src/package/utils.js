import { errorMessages } from './const';

const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validate = (fields, values) => {
    let toReturn = {
        errors: {},
        isValid: true
    };
    for(let fieldName in fields) {
        let validators = fields[fieldName].validators;
        let fieldValue = values[fieldName];
        for(let validator of validators) {
            if(validator === "isRequired" && fieldValue === "") {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: errorMessages[validator]
                    }
                }
                break;
            }
            else if(validator.split(":")[0] === "min" && fieldValue.length < parseInt(validator.split(":")[1])) {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: errorMessages[validator.split(":")[0]]
                    }
                }
                break;
            }
            else if(validator.split(":")[0] === "max" && fieldValue.length > parseInt(validator.split(":")[1])) {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: errorMessages[validator.split(":")[0]]
                    }
                }
                break;
            }
            else if(validator.split(":")[0] === "isExact" && fieldValue.length !== parseInt(validator.split(":")[1])) {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: errorMessages[validator.split(":")[0]]
                    }
                }
                break;
            }
            else if(validator === "isEmail" && !EMAIL_REG.test(fieldValue)) {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: errorMessages[validator]
                    }
                }
                break;
            }
            else if(validator === "isNumber" && isNaN(fieldValue)) {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: errorMessages[validator]
                    }
                }
                break;
            }
            else {
                toReturn = {
                    ...toReturn,
                    errors: {
                        ...toReturn.errors,
                        [fieldName]: ""
                    }
                }
            }
        }
    }
    return toReturn;
}