import React, { useEffect, useState } from 'react';
import RatingStar from '../RatingStar/RatingStar';

export default function RatingStars({ count }) {

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
    }, [])

    return (
        <>
            <table>
                <tr>
                    {stars.map(star =>
                        <td>
                            <RatingStar
                                isEmpty={star}
                            />
                        </td>
                    )}
                </tr>
            </table>

        </>
    )
}