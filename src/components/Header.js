import Link from 'next/link';

const linkStyle = {
    margin:0,
  padding: 20,
  border: '1px solid #DDD'
};

const Header = () => (
  <div style={linkStyle}>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <Link href="/about">
      <a>ABOUT</a>
    </Link>
  </div>
);

export default Header;
