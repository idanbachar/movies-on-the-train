import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

export default function RatingStar({ isEmpty }) {
    return (
        <>
            {isEmpty ?
                <BsStar /> :
                <BsStarFill color="gold" />}
        </>
    )
}