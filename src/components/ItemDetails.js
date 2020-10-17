import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import {sellers, items} from "../data";

const ItemDetails = () => {
    const { itemId } = useParams();
    const currentItem = items[itemId];
    const seller = sellers[currentItem.sellerId];
    const inStock = currentItem.quantity > 0;

    return (
        <Wrapper>
            <ItemImg src={currentItem.imageSrc} />
            <Descriptions>
                <ItemName>{currentItem.name}</ItemName>
                <ItemLatin>{currentItem.latinName}</ItemLatin>
                <CountryOfOrigin>Product of {currentItem.countryOfOrigin}</CountryOfOrigin>
                {inStock ? (
                    <Button>${currentItem.price} - Buy now</Button>
                ): (
                    <OutOfStock>Out of stock</OutOfStock>
                )}

                <SellerInfo>
                    <SellerImg src={seller.avatarSrc} />
                    <span>Sold by:
                        <StoreName>{seller.storeName}</StoreName>
                    </span>
                </SellerInfo>
            </Descriptions>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
`
const ItemImg = styled.img`
    display: block;
    width: 360px;
    height: 360px;
    border-radius: 10px;
`

const Descriptions = styled.section`
    flex: 1;
    margin-left: 48px;
`

const ItemName = styled.h3`
    font-size: 32px;
    color: black;
`

const ItemLatin = styled.h5`
    color: gray;
    font-style: italic;
    font-size: 18px;
`
const CountryOfOrigin = styled.div`
    margin-top: 16px;
    margin-bottom: 32px;
    font-style: italic;
    color: gray;
`

const Button = styled.button`
    padding: 18px 64px;
    color: white;
    background: blue;
    border: none;
    display: block;
    text-align: center;
    border-radius: 10px;
    font-size: 20px;
`
const OutOfStock = styled.div`
    padding: 24px;
    color: grey;
    font-style: italic;
    text-align: center;
    border-radius: 10px;
`

const SellerInfo = styled.div`
    display: inline-flex;
    align-items: center;
    margin: 32px 0px 32px 0px;
    border-radius: 10px;
`

const SellerImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 100px;
    margin-right: 16px;
`

const StoreName = styled.span`
    font-weight: bold;
    padding: 0px 32px 0px 8px;
`

export default ItemDetails;