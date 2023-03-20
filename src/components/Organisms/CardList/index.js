import React, { useState, useEffect } from 'react';
import { SinglePostCard } from '../../Molecules/index';
import { Container, NoResult } from './cardList.style';

const CardList = ({ post, search, home, user }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...post]);
  }, [post]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return (
    <Container>
      {home && (
        <>
          {filteredItems.length === 0 ? (
            <NoResult>No results found.</NoResult>
          ) : (
            filteredItems.map((item) => (
              <SinglePostCard
                key={item.id}
                title={item.title.slice(0, 20)}
                subtitle={item.title.slice(0, 10)}
                duration={item.id}
                body={`${item.body.slice(0, 100)}...`}
                postId={item.id}
              />
            ))
          )}
        </>
      )}

      {user && (
        <>
          {items.map((item) => (
            <SinglePostCard
              key={item.id}
              title={item.title.slice(0, 20)}
              subtitle={item.title.slice(0, 10)}
              duration={item.id}
              body={`${item.body.slice(0, 100)}...`}
              postId={item.id}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default CardList;
