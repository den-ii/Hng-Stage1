import React from "react"
import linksData from "./linksData"
import { Link, Switch, Route } from "react-router-dom"
export default function Links() {
    const links = linksData.map(link => 
    <a 
        key={link.id}
        id={link.id_name} 
        href={link.link} 
        className="link">
            {link.title} 
            {link.text && <span>{link.textHead && <h4>{link.textHead}</h4>}
            {link.text}</span>}
    </a>
    )
    return (
        <section className="links">
            {links}
            <div className="link_img">
                <a href="https://app.slack.com/client/T042F7V19Q8" className="slack"><img src="/slack_icon.png" /></a>
                <a href="https://github.com/juicio8" className="git"><img src="/github-icon2.png" /></a>
            </div>
        </section>
    )
}