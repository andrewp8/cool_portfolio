import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGE IN PRODUCTION
const data = [
    {
        id:1,
        image:IMG1,
        title:'Widgets library for dashboards and presentations',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/15090451-Widgets-library-for-dashboards-and-presentations'
    },
    {
        id:2,
        image:IMG2,
        title:'Charts templates & infographics in Figma',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17557610-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id:3,
        image:IMG3,
        title:'Figma dashboard UI kit for data design web apps',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/12077924-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id:4,
        image:IMG4,
        title:'Maintaining tasks and tracking progress',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17419881-Task-Tracking-Dashboard'
    },
    {
        id:5,
        image:IMG5,
        title:'Figma dashboard UI kit for data design web apps',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id:6,
        image:IMG6,
        title:'Game streaming templates',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/16811926-Game-streaming-templates'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className="btn" target="_blank">Github</a>
                                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;
