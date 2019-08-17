const EMAIL_REG = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const validations = {
    isRequired: (value) => {
        return value !== "";
    },
    min: (value, min) => {
        return value.length >= parseInt(min);
    },
    max: (value, max) => {
        return value.length <= parseInt(max);
    },
    isEmail: (value) => {
        return EMAIL_REG.test(value);
    },
    isNumber: (value) => {
        return !isNaN(parseInt(value));
    },
    isExact: (value, exactLength) => {
        return value.length === parseInt(exactLength);
    }
};