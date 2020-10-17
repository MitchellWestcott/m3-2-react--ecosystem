import React from 'react';
import styled from 'styled-components';
import items from '../data';
import ListingGrid from './ListingGrid';

const Wrapper = styled.div`
    /* border: 1px solid orange; */
    display: block;
    /* justify-content: center; */
    /* text-align: center; */
    margin-left: 32px;

`

const Paragraph = styled.p`
    font-size: 20px;
    display: block;
`

const Homepage = (props) => {
    console.log("homepage", props);
    return (
        <>
        <Wrapper>
            <Paragraph>Fruit emporium sells the finest fruits from this world and beyond.</Paragraph>
            <Paragraph><strong>Browse items:</strong></Paragraph>
            
                {/* <ListingGrid itemImage={props.items.imageSrc}/> */}
                
            </Wrapper>
            <ListingGrid itemList={props.items}/>
        </>
    )
}

export default Homepage;