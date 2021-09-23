import styled from 'styled-components'

export const ReviewsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 10px 0;
  background-color: #f3f7f9;
`

export const ReviewCardWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
`

export const LeafLeftUp = styled.div`
  position: absolute;
  top: -70px;
  left: 100px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LeafRightDown = styled.div`
  position: absolute;
  right: 0;
  bottom: -60px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ReviewCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  margin: 10px;
  background-color: white;
  box-shadow: 0px 0px 100px -76px rgba(34, 60, 80, 0.2);
`

export const StarsContainer = styled.div``

export const Name = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  font-size: 16px;
  color: rgb(45, 47, 70);
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
`

export const Comment = styled.p`
  color: rgb(45, 47, 70);
  height: 60px;
  text-align: center;
  line-height: 20px;
  padding: 10px;
  width: 90%;
`