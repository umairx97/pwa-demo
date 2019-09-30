import React from 'react'




const SecondComp = (props) => {
    // lets check ke kia props arhe ha is component ma 
    // see on the console ke mere pas ek 
    // props ka object arha ha 

    // agar muje object ke andar property koi access krni hoti ha 
    // to ma dot notation use kruga 
    // see usne ab mera prop print krdia 
    // got it ? ye dot wali chz r phly wali iti same same lagri h 

    // pehle b ham props direct print krwa rhe the 


    // becuase prop basically ek javascript ka object ha jiske andar kuch properties rkhi ha jo hamne bheji h
    // ek object aesa hota ha 


    const myObj = {
        name: "umair",
        age: 22,
        profession: 'Fullstack Developer'
    }

    // ab for example muje apne object ma se sirf name chahie to ma kese pick kruga ?main batari hn na dot kar k 
    // yes isi tarah ham props ma se cheeze pick krte ha 
    // props ek tareek ha ke ham ek component se dusre component ma data pass krte ha 
    // taake ya to ham reusable components bana sken ya kuch check krwake user ko dikha sken

    // ab ma kuch props app.js se bhejuga phr yaaha pr check krwauga 
    // console.log("MY DUMMY PROP", props.myProp)
    return (
        <div>

            {/* my comp :D sahi ? han lkn ap wo mita q ry hn mjhy baad main phr yaad nhi ata h  */}
            {/* app wala code wahi likha hua ha use mitaya nai manersfjkdjhfjdghf wo b likhyn jis se khudi agaya tha  */}
            {/* uske lie extension dalni hoti ha abi aap manually sab likhne ki practice kren  */}
            {/* man component zero se bana kr dikhata hn apko without snippets nhi wo apny pehly banaya tha wo mjhy agaya  */}
            {/* okay */}


            {/* for example ye mera dashboard ka page ho 
or ma chahta hn user pehle login ho phr dashboard pr aye to isi tarah ma props pass krke 
check krwa skta hn ke user ko kia dikhana ha 

got it ? ji

 */}
            {props.isLoggedIn ? "You are logged in" : "Please login first"}
            <br />
            {props.isEligible ? "You are eligible" : "You are not eligible"}
            {/*             

            {myObj.name}

            {props.myProp} */}


        </div>
    )
}

export default SecondComp


// Now Lets study props again 
// Props ko just ap ye smjhen ke kuch properties ha ya kuch data ha jo 
// between components share kia ja skta ha 
// ab ma wapis app.js ma jauga aur second comp ma ek prop pass kruga 


// ab mere pas is component ke andar ek prop agya ha but us prop ko functional component ma 
// as an argument catch krna parta ha 