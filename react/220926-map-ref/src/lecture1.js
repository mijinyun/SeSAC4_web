import React from 'react';

const Sample = () => {
    const fashion =  ['청바지','패딩','운동화','부츠'];
    const fashionList = fashion.map((fashion,index) => <li key={index}>{fashion}</li>);
    return(
        <div>
            <ul>{fashionList}</ul>
        </div>
    );
}

export default Sample;