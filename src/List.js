import React from 'react';

const Lists = (props) => {
    return (
        <>
            <div className="todo">
                <i className="fas fa-times-circle" onClick={ () => {
                    props.onSelect(props.id);
                }} />
                <li> {props.text} </li>
            </div>
        </>
    );
};

export default Lists;