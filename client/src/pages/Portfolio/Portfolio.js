import React, { Component } from "react";
import Navbar from '../../components/Nav';
import ProjectCard from '../../components/ProjectCard'

import './Portfolio.css';

const projects = [
    {
        projectName: "HAPPENIN'",
        gitHub: "https://github.com/walidbillel/project1-WABD-",
        appLink: "https://walidbillel.github.io/project1-WABD-/",
        gif: "https://www.diocesefl.org/media/11267/ed-web-mission-youth-762x302_happening.jpg"
    },

    {
        projectName: "Vriend",
        gitHub: "https://github.com/walidbillel/vfriend-book-heroku",
        appLink: "https://vfriend-book.herokuapp.com/",
        gif: "https://cdn-images-1.medium.com/max/1279/1*0IpquI0xSAap0jeUItwaVg.png"
    },

    {
        projectName: "Vriend 2",
        gitHub: "https://github.com/Cbutler64/Vfriend-Videos",
        appLink: "https://fathomless-dawn-58912.herokuapp.com/",
        gif: "https://www.cmo.com/content/dam/CMO_Other/articles/1046x616-video.png"
    },

    {
        projectName: "Burger",
        gitHub: "https://github.com/walidbillel/burger",
        appLink: "https://burger-eater0.herokuapp.com/",
        gif: "https://theultralinx.com/.image/t_share/MTM1MTU4MDA2NjY4MTE4MDI2/boigerpng.png"
    },

    {
        projectName: "Clicky Game",
        gitHub: "https://github.com/walidbillel/Clicky-Game-Heros",
        appLink: "https://clicky-game-walid.herokuapp.com/",
        gif: "https://img.freepik.com/free-vector/illustration-of-touch-screen-hand-gesture_53876-5608.jpg?size=338&ext=jpg"
    },


    {
        projectName: "Friend Finder",
        gitHub: "https://github.com/walidbillel/FriendFinder",
        appLink: "https://friend-finder-wb.herokuapp.com/",
        gif: "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_630/uatwh9wwtf1xkolzrzqf"
    },

    {
        projectName: "Crystal Game",
        gitHub: "https://github.com/walidbillel/unit-4-game",
        appLink: "https://walidbillel.github.io/unit-4-game/",
        gif: "https://us.123rf.com/450wm/dariatri3/dariatri31509/dariatri3150900033/44567555-hand-drawing-crystals-set-crystal-gems-sketch-illustration.jpg?ver=6"
    },

    {
        projectName: "Trivia Game",
        gitHub: "https://github.com/walidbillel/TriviaGame",
        appLink: "https://walidbillel.github.io/TriviaGame/",
        gif: "https://static.vecteezy.com/system/resources/previews/000/129/108/non_2x/trivia-papper-background-illustration-vector.jpg"
    },

   
];


class Portfolio extends Component {


    render() {

       

        return (
            <div>
                <Navbar></Navbar>
                <br></br>
                <header>Projects</header>
                <br></br>
                <div>
                    {projects.map(project =>
                        <ProjectCard key={project.projectName} projectName={project.projectName}
                            gitHub={project.gitHub}
                            appLink={project.appLink}
                            gif={project.gif} />)}
                </div>
            </div>
        )
    }
}

export default Portfolio;

