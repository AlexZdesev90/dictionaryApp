import React from 'react';

const Word = ({words, idx}) => {
    
    return (
        <div>
            <span>{idx + 1}&nbsp;<b>{words[0]}</b>&nbsp;{words[1]}</span><br/>
        </div>
    )
}

export default Word;