import React from "react"

export default function Links() {
    return (
        <section className="links">
            <a id="twitter_link" className="link" href="https://twitter.com/juicio_w">
                Twitter Link
            </a>
            <a id="btn__zuri" className="link" href="https://training.zuri.team/">
                Zuri Team
            </a>
            <a id="books" className="link" href="http://books.zuri.team">
                Zuri Books
                <span><h4>Find books here</h4> get coding and design books</span>
            </a>
            <a id="book__python" className="link" href="https://books.zuri.team/python-for-beginners?ref_id=Juicio">
                Python Books
                <span>Master the basic aspects of python with this book</span>
            </a>
            <a id="pitch" className="link" href="https://background.zuri.team">
                Background Check for Coders
                <span>Run background checks, hire the best coders</span>
            </a>
            <a id="book__design" className="link" href="https://books.zuri.team/design-rules">
                Design Books
                <span>Improve your design skill with zuri's free design book</span>
            </a>
            <div className="link_img">
                <a href="https://app.slack.com/client/T042F7V19Q8" className="slack"><img src="/slack_icon.png" /></a>
                <a href="https://github.com/juicio8" className="git"><img src="/github-icon2.png" /></a>
            </div>
        </section>
    )
}