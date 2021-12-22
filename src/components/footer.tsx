import React from 'react';
import Container from '@components/container';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className="py-2 text-center border-t border-raisin-black">
      <Container>
        <p className="text-sm">
          &copy; {dayjs().format('YYYY')}, Hackernews Times.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
