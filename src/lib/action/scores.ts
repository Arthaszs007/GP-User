// receive a ids of scores string, and return a average score
export const scoreAverage=(ids:string)=>{
    const _ids = ids.split("/");
    let result =0;

    _ids.forEach((item)=>(
        result += Number(item)
    ))
    const average = result/_ids.length;
    // limit .1 to the return number
    return String(parseFloat(average.toFixed(1))) ;
}

// receive a ids of scores string, a index from 0 to 3, and retrun the score 
export const GetScores=(ids:string,index:number)=>{
    const _ids = ids.split("/");

    return _ids[index]
}