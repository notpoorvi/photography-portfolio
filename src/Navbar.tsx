const Navbar = () => {
  return (
    <>
      <nav style={{ width: "100vw", padding: "10px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <ul className="navbar-ul">
            <li className="navbar-item">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <span
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "1.25rem",
            }}
          >
            Poorvi Bhatia
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
