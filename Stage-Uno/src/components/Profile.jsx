import React from "react"

export default function Profile() {
    return (
        <section className="profile">
            <a className="share--button sm" ><img src="/share_button.png"/><span className="share-title">Share Link</span></a>
            <a className="share--button bg"><img src="/a_share_btn.png"/><span className="share-title">Share Link</span></a>
            <div className="profile--img__container">
                <img id="profile__img" src="/profile.jpg" />
                <span></span>
            </div>
            <p id="twitter" className="profile--username__twitter">
            juicio_w
            </p>
            <p id="slack" className="profile--username__slack">juicio</p>
        </section>
    )
    
}