// to limit the string length and display the "..." instead of overflow
export const LimitString = (value:string,length:number)=>{

    return  value.length > length ? `${value.slice(0, length)}...` : value
}