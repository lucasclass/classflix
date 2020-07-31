import React from 'react';

function ButtonLink(props) {
    // props => {className: , href: "/"}; é um objeto, ele recebe algo dentro
    return (
        <a href="props.href" className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;