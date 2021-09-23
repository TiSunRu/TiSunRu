import React, { FC } from 'react'
import styled from 'styled-components'
import next from '../../../assets/images/svg/Next.svg'
import prev from '../../../assets/images/svg/Prev.svg'

export const SampleNextArrow: FC = ({ className, style, onClick }: any) => (
  <StyledImg
    src={next}
    alt="next"
    className={className}
    style={{
      ...style,
      width: '23',
      zIndex: 20,
      left: '-25%',
      top: '92%'
    }}
    onClick={onClick}
  />
)

export const SamplePrevArrow: FC = ({ className, style, onClick }: any) => (
  <StyledImg
    src={prev}
    alt="prev"
    className={className}
    style={{
      ...style,
      width: '23',
      zIndex: 20,
      top: '7%',
      left: '-25%'
    }}
    onClick={onClick}
  />
)

const StyledImg = styled.img`
  display: block;
  @media screen and (max-width: 992px) {
    display: none;
  }
`
