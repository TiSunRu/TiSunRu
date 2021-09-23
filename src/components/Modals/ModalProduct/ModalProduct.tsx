import React, { FC } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { SampleNextArrow, SamplePrevArrow } from './SampleArrows'
import ButtonBuy from '../../ButtonBuy/ButtonBuy'
import ModalTea from './ModalTea/ModalTea'
import ModalCoffee from './ModalCoffee/ModalCoffee'
import {
  SliderWrapper,
  Header,
  StyledSlider,
  StyledGatsbyImage,
  DotsContainer,
  DotsList,
  DesctiptionContainer,
  Composition,
  ImageWrapper
} from './styled'

interface ModalProductProps {
  product: any
  onClose: () => void
  isOpen: boolean
}

const ModalProduct: FC<ModalProductProps> = ({ product, onClose, isOpen }) => {
  const { t } = useTranslation()

  const { title, type, composition, images, urlWildberries, urlOzone }: any =
    product[0]

  const settings = {
    customPaging: (i: number) => {
      let currentImg
      if (i === 1) {
        currentImg = getImage(images[1])
      } else if (i === 2) {
        currentImg = getImage(images[2])
      } else if (i === 3) {
        currentImg = getImage(images[3])
      } else if (i === 4) {
        currentImg = getImage(images[4])
      }
      return <StyledGatsbyImage alt={`image${i}`} image={currentImg} />
    },
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    vertical: true,
    appendDots: (dots: any) => (
      <DotsContainer>
        <DotsList>{dots}</DotsList>
      </DotsContainer>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  const content = (
    <SliderWrapper>
      <Header>{t(title)}</Header>
      <StyledSlider {...settings}>
        {images?.map((image: any, i: number) => {
          const img: any = getImage(image)
          return (
            <div style={{ width: '100%', background: 'red' }}>
              <ImageWrapper>
                <GatsbyImage
                  alt={`img${i}`}
                  image={img}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </ImageWrapper>
            </div>
          )
        })}
      </StyledSlider>

      <DesctiptionContainer>
        <Composition>{t(composition)}</Composition>
        <ButtonBuy title="Ozone" url={urlOzone === '' ? null : urlOzone} />
        <ButtonBuy
          title="Wildberries"
          url={urlWildberries === '' ? null : urlWildberries}
        />
      </DesctiptionContainer>
    </SliderWrapper>
  )

  return type === 'tea' ? (
    <ModalTea onClose={onClose} isOpen={isOpen}>
      {content}
    </ModalTea>
  ) : (
    <ModalCoffee onClose={onClose} isOpen={isOpen}>
      {content}
    </ModalCoffee>
  )
}

export default ModalProduct
