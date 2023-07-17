import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  text: string;
}

export function Header(props: HeaderProps) {
  return (
    <header>{props.text}</header>
  );
}

export default Header;
