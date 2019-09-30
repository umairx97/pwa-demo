import React from 'react';
import SecondComp from './SecondComp';

// This is a simple class based component 
// also called as the stateful component 
// i'll tell you later on the benefits of the 
// class based component

// ma ye code github pr push krduga dekhlega
// with all the comments 



// ok 
// so ab JSX likhne ke b kuch rules ha 
// 1. ham jsx jab b likhenge to round brackets ke andar likhenge 
// 2. dusra rule ye ha ke jab b ham html likhege use ek parent element ke andar wrap krenge 
// means ke for example mere pas 2 div ha to ma 2 div alag nai likh skta 
// un 2 div ko wrap krna parega muje 
// wait i'll show you mere pas JSX ka error aega ek 
// See mere pas error arha ha ke dono divs ko ek parent ke andar rkho to uske lie ek hal ye ha 
// ke ma apna pura content ek div ma daldu 
// lekin agar aap ek extra div nai bnana chahte wrap krne ke lie then uska ek aur solution ha 
// React Fragment blkl ek div ki tarah behave krta ha lekin apke DOM pr new div nai banaega runtime pr
// understood ? yp
// Ham react fragment bs isi lie use krte ha ke JSX ko wrap krden taake error nai aye 


// ye 2 main rules ha bs in rules ko follow krna hota ha kahi b jsx likhte hue 
// Ab jsx ke beech ma hame agar javascript likhni ha to wo kese likhe ? 
// wo ham {} braces ke andar likhte ha 
// isi tarah ham koi b Javascript beech ma likh skte ha apni JSX ke

// jese ye App ka component ha ye React.Component ki class ko extend kr rha h to iske pas render 
// function mojuud ha 
// normal functional components extend nai krte class so unke pas extra methods nai hote react ke
// got it ? ji
// aur b differences ha dono ma like functional component ma state nai hoti lifecycle methods nai hote 
// but wo bd kee bat ha 
// ab ma ek new component bana kr usme kam krleta hn isme kaafi comments hogaye ha 
class App extends React.Component {

    // understood ?han
    // ab jese he man {} braces lagata hn react smjh jata ha ke ma javascript likhuga 
    // islie wo variables ya functions ko use krta ha rather than ke myName hee likhdeta 
    // agar ma brackets hatauga to wo myName ko html ka text smjhega 


    // ab normal class based components aur functional components ma kia farq ha ? 
    // farq ye ha ke normal functional components ko ham javascript ka function b kehte ha 
    // and usme render ka function nai hota ham chahe direct jsx return krdete ha 



    // Render function in class based component
    render() {
        // Variable initialization
        const myName = "Umair";
        return ( // Round bracket start 
            <React.Fragment>
                {/* see ke agar bhale mera component bana hua ho but use na ho wo render nai hoga  */}
                {/* ab for example ma logged in ko false krdu to muje different result dikhaega */}
                <SecondComp myProp="This is a dummy prop" isLoggedIn={false} isEligible={false} />
            </React.Fragment>
        ) //Round bracket end 
    }
}

// agar hum {} braces use krege react will see it as just plain javascript to wo error dega 

// This is a functional component 
// React ko ap as a library smjhe ke just wo javascript ko hee extend krti ha 
// agar muje javascript ma koi arrow function bnana hota ha to wo b ma isi tareeke se banata hn 
// fark sirf ye ha ke normal JS ke function ma ma JSX nai likh skta tha kiunke mera browser usko 
// understand nai krta 
// JSX Yad  ha kia hota ha ? kuch kuch 
// Normally ham pehle apps banate the usme html alag hota tha and javascript alag right ? 
// ham ek hee file ma likh skte the link <script> ke tag ma
// but with react ham chahie to within javascript html b likh skte ha jise ham JSX kehte ha 

// Look below ye ek simple javascript ka arrow function ha and uske andar hee man html likh rha hn






export default App