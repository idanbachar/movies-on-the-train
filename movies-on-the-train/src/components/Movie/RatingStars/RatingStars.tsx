import React, { useEffect, useState } from 'react';
import RatingStar from '../RatingStar/RatingStar';

type props = {
    count: number,
    isRatingEnabled: boolean
    handleVote: (starVote?: number) => void
}

export default function RatingStars({ count, isRatingEnabled, handleVote }: props) {

    const [stars, setStars] = useState<Array<boolean>>([]);
    const totalStars = 5;

    function init() {

        const starsArray: boolean[] = [];

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
                            <td> 
                                 <RatingStar
                                    key={index}
                                    isEmpty={star}
                                    handleVote={() => handleVote(index + 1)}
                                />
                            </td>)}
                    </tr>
                </thead>
            </table>

        </>
    )
}