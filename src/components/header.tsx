import React from 'react';
import Container from '@components/container';
import dayjs from 'dayjs';

const Header = () => {
  const now = dayjs();

  return (
    <header className="py-4 text-center border-double border-y-4 border-raisin-black">
      <Container>
        <h1 className="text-2xl font-heading">Hackernews Times</h1>
        <div className="mt-2">
          <span className="text-sm">{now.format('MMMM D, YYYY')}</span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
