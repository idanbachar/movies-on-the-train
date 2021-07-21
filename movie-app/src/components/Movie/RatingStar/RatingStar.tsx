import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

type props = {
    key: number,
    isEmpty: boolean,
    handleVote: () => void
}

export default function RatingStar({ key, isEmpty, handleVote }: props) {
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