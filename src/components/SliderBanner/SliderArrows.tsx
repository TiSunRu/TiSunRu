import React, { FC } from 'react'
import styled from 'styled-components'
import next from '../../assets/images/svg/nextArrow.svg'
import prev from '../../assets/images/svg/prevArrow.svg'

const NextWrapper = styled.div`
  background-color: #dadada;
  opacity: 0.2;
  width: 100px;
  height: 100%;
  position: absolute;
  z-index: 20;
  right: 0;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    opacity: 0.5;
  }
`

const PrevWrapper = styled.div`
  background-color: #dadada;
  opacity: 0.2;
  width: 100px;
  height: 100%;
  position: absolute;
  z-index: 20;
  left: 0;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    opacity: 0.5;
  }
`

export const SampleNextArrow: FC = ({ className, style, onClick }: any) => (
  <NextWrapper>
    <img
      src={next}
      alt="next"
      className={className}
      style={{ ...style, display: 'block', width: '50px', right: '30px' }}
      onClick={onClick}
    />
  </NextWrapper>
)

export const SamplePrevArrow: FC = ({ className, style, onClick }: any) => (
  <PrevWrapper>
    <img
      src={prev}
      alt="prev"
      className={className}
      style={{ ...style, display: 'block', width: '50px', left: '30px' }}
      onClick={onClick}
    />
  </PrevWrapper>
)
