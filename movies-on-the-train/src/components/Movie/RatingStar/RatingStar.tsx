import { BsStar, BsStarFill } from 'react-icons/bs';

type props = {
    isEmpty: boolean,
    handleVote: () => void
}

export default function RatingStar({ isEmpty, handleVote }: props) {
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