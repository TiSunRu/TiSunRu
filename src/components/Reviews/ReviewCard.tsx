import React, { FC } from 'react';
import { useTranslation } from "gatsby-plugin-react-i18next";
import { IoStarSharp } from "react-icons/all";
import { ReviewCard, Comment, Name, ReviewCardWrapper, StarsContainer } from "./styled";

interface ReviewCardProps {
    stars: number;
    name: string;
    comment: string;
}

const ReviewCardItem: FC<ReviewCardProps> = ({ stars, name, comment }) => {

    const calculateStars = () => {
        const starsArray = []
        for (let i = 0; i < stars; i++) {
            starsArray.push(i)
        }
        return starsArray;
    }

    const { t } = useTranslation();

    return (
        <ReviewCardWrapper>
            <ReviewCard>
                <StarsContainer>
                    {
                        calculateStars().map((item) => (
                            <IoStarSharp key={item} color="rgb(255, 5, 59)" size="30px" />
                        ))
                    }
                </StarsContainer>
                <Name>{t(name)}</Name>
                <Comment>{t(comment)}</Comment>
            </ReviewCard>
        </ReviewCardWrapper>
    )
}

export default ReviewCardItem;
