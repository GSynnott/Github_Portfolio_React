import React from "react";

export default function ProjectDiv(props) {
    return (
        <div class="projectClass">
            {props.projects.map(item => (
                <a href={item.link}>
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <div>{item.description}</div>
                    </div>
                </a>
            ))}
        </div>
    );
}