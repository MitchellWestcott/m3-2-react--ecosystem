import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ListingItem = ({item}) => {
    return (
        <CardLinks to={`/items/${item.id}`}>
            <Wrapper>
                <ListImage src={item.imageSrc}/>
                <ItemName>{item.name}</ItemName>
                <ItemLatin>{item.latinName}</ItemLatin>
            </Wrapper>
        </CardLinks>
    )
}

const CardLinks = styled(Link)`
    text-decoration: none;
    padding: 20px;
`

const Wrapper = styled.div`
    padding: 36px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;
`

const ListImage = styled.img`
    width: 170px;
    height: 170px;
    /* padding: 5px; */
    border-radius: 10px;
`

const ItemName = styled.h3`
    font-size: 24px;
    margin: 0;
`

const ItemLatin = styled.h5`
    font-size: 16px;
    margin: 0;
    font-style: italic;
`

export default ListingItem;