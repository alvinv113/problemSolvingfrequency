const ranDOmpass=(password)=>{
    let regex=/^([a-z0-9]{3}[0-9][A-Z]{2})$/;
    if(!password.match(regex)) {
        let newStr= ''
       for( let i=0;i<password.length;i++){
       newStr+= password.charCodeAt(i);
       
       }
       return  newStr;
       
    }
   
}
function storingJson(name,password){
    const obj={}
      obj[password]= name;
      console.log(obj);

    };
    


storingJson('alvin',ranDOmpass('alvinv295'));
storingJson('daivik',ranDOmpass('yuvi295'));




  

    
   
  
// by using this operator            ">>"  we can append the content in file



 
