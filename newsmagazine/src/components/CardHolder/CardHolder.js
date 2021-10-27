import React from 'react'
import "./CardHolder_style.scss"

function CardHolder() {

    let getdata = () =>{
        fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-10-23&sortBy=popularity&apiKey=602e440998c64b46b70a5c06593ffb8e")
        .then(data => data.json())
        .then(dt => console.log(dt))
    }

   

    return (
        <div className="container cont_cdhold">
        <button onClick={ getdata}>Get Data</button>

            <div class="row">
                <div className="col">
                    <div className="card_holder">
                        <div className="img"><img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></div>
                        <div className="tag">Travel</div>
                        <div className="details">
                            <div className="title">
                                Best Place to live
                            </div>
                            <div className="subtitle">
                                lroem travel money lroem travel money lroem travel money lroem travel money lroem travel money lroem travel money
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                  
                </div>
                <div className="col">
                   

                </div>
            </div>

           

        </div>
    )
}

export default CardHolder


