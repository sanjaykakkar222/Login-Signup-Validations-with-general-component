import React from 'react';


export const Errfrm = ({Errfrm}) =>


  

  <div >
    {
      
      Object.keys(Errfrm).map((value, i) => {

      if(Errfrm[value].length > 0){


        return (
          <p key={i}>{value} {Errfrm[value]}</p>
        )        
      } else {


        return ' ';
      }

    }
    )
    }
</div>