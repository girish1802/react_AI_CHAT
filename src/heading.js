export const  checkHeadig =(str)=>{
    return /^(\*)(\*)(.*)\*$/.test(str)

   }
 export const  replacestar =(str)=>{
    return str.replace(/^(\*)(\*)|(\*)*$/g,'')

   }