import React from "react"

export default function Profile() {
    return (
        <section className="profile">
            <img className="share--button" src="/share_button.png"/>
            <div className="profile--img__container">
                <img id="profile__img" src="/profile__img.png" />
            </div>
            <p id="twitter" className="profile--username__twitter">
            juicio_w
            </p>
            <p id="slack" className="profile--username__slack">juicio</p>
        </section>
    )
    
}