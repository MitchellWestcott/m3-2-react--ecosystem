import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListingItem from './ListingItem';


// const ListImage = styled.img`
//     width: 150px;
//     height: 150px;
//     padding: 5px;
// `

const Wrapper = styled.div`
    /* border: 1px solid green;
    padding: 36px;
    border-radius: 10px;
    
    text-align: left;
    display: flex;
    margin: 30px; */
    /* box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1); */
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 32px;
    margin: 32px 0px;
    width: 100%;
    
`

// const ItemName = styled.h3`
//     font-size: 24px;
//     margin: 0;
// `
// const ItemLatin = styled.h5`
//     font-size: 16px;
//     margin: 0;
//     font-style: italic;
// `

const ListingGrid = ({ itemList }) => {
    console.log("item list", itemList);
    return (
        <Wrapper>
            {itemList.map((item) => (
                <ListingItem key={item.id} item={item} />
            ))}
        </Wrapper>
        // itemList.map((item) => {
        //     return (
        //         <Wrapper>
        //             <ListImage src={item.imageSrc}/>
        //             <ItemName>{item.name}</ItemName>
        //             <ItemLatin>{item.latinName}</ItemLatin>
        //         </Wrapper>
        //     )
        // })
    )
  };
  
  ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default ListingGrid;