function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h3 className="logo">Zalbo</h3>
        {/* Dark mode */}
      </div>
      <div className="nav-right">
        <ul className="nav-lists">
          <li>
            <h4 >Home</h4>
          </li>
          <li>
            <h4 >Projects</h4>
          </li>
          <li>
            <h4 >Resume</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
