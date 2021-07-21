import React, { useEffect, useState } from 'react';
import RatingStar from '../RatingStar/RatingStar';

export default function RatingStars({ count, handleVote, isRatingEnabled }) {

    const [stars, setStars] = useState([]);
    const totalStars = 5;

    function init() {

        const starsArray = [];

        let i = 0;
        for (i = 0; i < count; i++)
            starsArray.push(false);

        for (; i < totalStars; i++)
            starsArray.push(true);

        setStars(starsArray);
    }

    useEffect(() => {
        init();
    }, [count])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {stars.map((star, index) =>
                            <td>{isRatingEnabled ?
                                <RatingStar
                                    key={index}
                                    isEmpty={star}
                                    handleVote={() => handleVote(index + 1)}
                                /> :
                                <RatingStar isEmpty={star} />}
                            </td>)}
                    </tr>
                </thead>
            </table>

        </>
    )
}