// to limit the string length and display the "..." instead of overflow
export const LimitString = (value:string,length:number)=>{

    return  value.length > length ? `${value.slice(0, length)}...` : value
}

// to check the string whether includ only numbers and letters
export const UsernameInputverify =(value:string)=>{
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value)
}

// to check the string whether includ only numbers , letters and @
export const PasswordInputverify =(value:string)=>{
    const regex = /^[a-zA-Z0-9@]+$/;
    return regex.test(value)
}