import { styled, css } from "styled-components";
import { rem } from "polished";

export const CarrousselWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    overflow: hidden;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
`;

export const CarrousselContainer = styled.div`
    max-width: ${rem(305)};
    margin: 0 auto;
    position: relative;
    height: max-content;

    .swiper {
        position: static;
        background-color: #f5f5f5;
    }

    .swiper-button-prev {
        left: ${rem(-20)};
    }

    .swiper-button-next {
        right: ${rem(-25)};
    }

    .swiper-pagination {
        top: calc(100% + ${rem(20)});
    }

    @media only screen and (max-width: 418px) {
        .swiper-button-prev,
        .swiper-button-next {
            width: ${rem(52)}
        }
    }
`;

export const CardWrapper = styled.div`
    padding: ${rem(32)};
    background: #fff;
    border-radius: ${rem(8)};
`;

export const CardStackImage = styled.div`
    position: relative;
    overflow: hidden;

    .wishListButton svg path,
    .wishListButton svg circle {
        transition: all 150ms linear;
    }

    .wishListButton:hover svg circle {
        fill: #FEE5EC;
    }

    .wishListButton:hover svg path {
        fill: #FEE5EC;
        stroke: #DA4B4F;
    }

    .wishListButton.is--active svg circle {
        fill: #DA4B4F;
    }
    
    .wishListButton.is--active svg path {
        fill: #fff;
        stroke: #fff;
    }
    
    .wishListButton.is--active:hover svg circle {
        fill: #C22539;
    }
`;
export const CardWish = styled.div`
    position: absolute;
    top: 0;
    left: 80%;
    cursor: pointer;
`;
export const CardImage = styled.div`
    width: 100%;

    img {
        aspect-ratio: 1/1;
        max-width: 100%;
        object-fit: cover;
    }
`;
export const CardContent = styled.div`
    margin-top: ${rem(20)};
    font-family: Inter;

    .addButton:not(.is--active):hover {
        background-color: #1C6C3E;
    }

    .addButton.is--active {
        background-color: #A3F9B9;
        color: #1c1c1c;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${rem(10)};
    }

    .addButton.is--active svg {
        position: static;
        opacity: 1;
        visibility: visible;
    }
`;
export const CardProductName = styled.h2`
    font-size: ${rem(14)};
    font-weight: 500;
    line-height: ${rem(20)};
    color: #1c1c1c;
    margin: ${rem(32)} 0;
`;
export const CardProductPrice = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${rem(32)};

    del {
        color: #b5b5b5;
        font-size: ${rem(14)};
        font-weight: 400;
        line-height: ${rem(20)};
    }

    ins {
        color: #da4b4f;
        font-size: ${rem(20)};
        font-weight: 600;
        text-decoration: none;
        line-height: ${rem(20)};
    }
`;
export const CardInstallments = styled.p`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
    color: #848587;
    margin: 0 0 ${rem(32)} 0;

    strong {
        color: #1c1c1c;
    }
`;
export const CardButton = styled.button`
    outline: 0;
    position: relative;
    appearence: none;
    border: 0;
    width: 100%;
    display: inline-block;
    gap: ${rem(16)};
    padding: ${rem(12)} ${rem(24)};
    border-radius: ${rem(5)};
    background-color: #40B25C;
    text-transform: uppercase;
    color: #fff;
    font-family: Inter;
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: ${rem(24)};
    cursor: pointer;
    transition: all 150ms linear;

    svg {
        position: absolute;
        top: ${rem(12)};
        left: 15%;
        width: ${rem(24)};
        height: ${rem(24)};
        opacity: 0;
        visibility: hidden;
        transition: all 150ms linear;
    }
`;