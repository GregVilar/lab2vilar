function Header(props) {
  return (
    <div class="header">
      <a href="#default" class="logo">
        <img src={props.logoObj.photoName} alt={props.logoObj.name} />
      </a>
      <div class="header-right">
        <a href="#home">Sign In</a>
      </div>
    </div>
  );
}

export default Header;
