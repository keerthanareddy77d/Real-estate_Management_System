import React, { useEffect } from "react"; 
 
function GoogleMap(){ 
    useEffect(()=>{ 
        const ifameData=document.getElementById("iframeId") 
        ifameData.src='https://api.razorpay.com/v2' 
    }) 
    return( 
        <div> 
            <iframe id="iframeId" height="500px" width="100%"></iframe> 
        </div> 
    ); 
} 
export default GoogleMap;