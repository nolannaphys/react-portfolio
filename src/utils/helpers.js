export function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export function validateMessage(message){
    const re = /[a-zA-Z\-0-9]/;
    return re.test(String(message));
}
export function validateName(name){
    const re = /[a-zA-Z\-0-9]/;
    return re.test(String(name));
}