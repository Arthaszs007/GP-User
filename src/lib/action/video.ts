// split the string, front part is src of video, second part is src of cover
export const getVideoSrc =(value:string)=>{
    const result = value.split("|");

    if(result.length>0)
        return result[0];
    return undefined
}

export const getVideoCover =(value:string)=>{
    const result = value.split("|")

    if(result.length>1)
        return result[1];
    return undefined
}