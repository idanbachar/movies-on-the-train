import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

export default function RatingStar({ isEmpty, handleVote }) {
    return (
        <>
            {isEmpty ?
                <BsStar
                    style={{ cursor: 'pointer' }}
                    onClick={handleVote}
                /> :
                <BsStarFill
                    style={{ cursor: 'pointer' }}
                    onClick={handleVote}
                    color="gold"
                />}
        </>
    )
}