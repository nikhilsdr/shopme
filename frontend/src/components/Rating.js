import React from 'react';

const rating=(props)=>{
    const { rating, numreviews } = props;

    function startRating(rating){
       if(rating <=1 ){
            return (<div><span><i className="fa fa-star"></i> </span></div>)
       }
       else if (rating <=2 ){
            return (<div><span><i className="fa fa-star"></i> </span>
            <span><i className="fa fa-star"></i> </span></div>)
       }
       else if (rating <=3 ){
            return (<div><span><i className="fa fa-star"></i> </span>
            <span><i className="fa fa-star"></i> </span><span><i className="fa fa-star"></i> </span></div>)
        }
        else if (rating <=4 ){
            return (<div><span><i className="fa fa-star"></i> </span>
            <span><i className="fa fa-star"></i> </span><span><i className="fa fa-star"></i> </span>
            <span><i className="fa fa-star"></i> </span></div>)
            }
        else if (rating <=5 ){
            return (<div><span><i className="fa fa-star"></i> </span>
            <span><i className="fa fa-star"></i> </span><span><i className="fa fa-star"></i> </span>
            <span><i className="fa fa-star"></i> </span><span><i className="fa fa-star"></i> </span></div>)
            }
    }

    return(
        <div className="rating"> 
                     
                     { startRating(rating) }
                     
                    ({ numreviews } reviews)
         </div> 
    )



}

export default rating;