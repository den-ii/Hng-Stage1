import React from "react"

export default function Links() {
    return (
        <section className="links">
            <a id="btn__zuri" className="link" href="https://training.zuri.team/">Twitter Link</a>
            <a id="books" className="link" href="http://books.zuri.team">Zuri Team</a>
            <a id="book__python" className="link" href="">Zuri Books</a>
            <a id="pitch" className="link" href="https://background.zuri.team">Python Books</a>
            <a id="book__design" className="link" href="https://books.zuri.team/design-rules">Background Check for Coders</a>
            <div className="link_img">
                <a href="" className="slack"><img src="/slack_icon.png" /></a>
                <a href="" className="git"><img src="/github-icon2.png" /></a>
            </div>
        </section>
    )
}