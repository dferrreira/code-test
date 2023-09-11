import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { productContext } from "../../__mocks__/products";
import { WishIcon } from "../../icons/WishIcon";
import { formatPrice } from "vtex-api";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import * as S from './styled';
import { OkIcon } from "../../icons/OkIcon";

const ProductsCarroussel = () => {
    const products = productContext.useProducts();

    const swiperProps = {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: { clickable: true },
        pagination: { clickable: true },
    };

    return (
        <S.CarrousselWrapper>
            <S.CarrousselContainer>
                <Swiper {...swiperProps}>
                    {products.map((product) => (
                        <SwiperSlide key={product.productName}>
                            <ProductWrapper product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.CarrousselContainer>
        </S.CarrousselWrapper>
    );
};

const ProductWrapper = ({ product }) => {
    const { price, productName, productImage, installments } = product;

    const [isWishActive, setIsWishActive] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);

    return (
        <S.CardWrapper>
            <S.CardStackImage>
                <S.CardWish className={`wishListButton ${isWishActive ? 'is--active' : ''}`} onClick={(e) => { e.stopPropagation(); setIsWishActive(!isWishActive) }}>
                    <WishIcon />
                </S.CardWish>
                <S.CardImage>
                    <img src={productImage} loading="lazy" alt={productName} title={productName} />
                </S.CardImage>
            </S.CardStackImage>
            <S.CardContent>
                <S.CardProductName>{productName}</S.CardProductName>

                <S.CardProductPrice>
                    <del>{formatPrice(price.listPrice)}</del>
                    <ins>{formatPrice(price.bestPrice)}</ins>
                </S.CardProductPrice>

                <S.CardInstallments>
                    <span>em até </span><strong>{installments.count}x de {formatPrice(installments.totalValue)}</strong><span> sem juros</span>
                </S.CardInstallments>
                <S.CardButton className={`addButton ${isButtonActive ? 'is--active' : ''}`} onClick={() => { setIsButtonActive(!isButtonActive) }}>
                    <OkIcon /><span>{isButtonActive ? "Adicionado" : "Adicionar"}</span>
                </S.CardButton>
            </S.CardContent>
        </S.CardWrapper>
    )
};

export default ProductsCarroussel;