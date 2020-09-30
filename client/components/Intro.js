import React from 'react'

export default function Intro() {
    return (
        <section className='intro' id='home'>
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>FarDean</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Front-end dev</p>
            <img src="https://images.unsplash.com/photo-1600247991021-36282872cc5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" className="intro__img"/>
        </section>
    )
}
