const Categorys = ({ data, hendleCategory, activeMenu }) => {
  const activeStyle = {
    boxShadow: "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
    color: "#496fe3bf",
  };
  return (
    <div className="category-area grid">
      <ul className="about_details-menu">
        {data.map((e, i) => (
          <li
            key={i}
            style={activeMenu === e ? activeStyle : {}}
            className="menu-items button"
            onClick={() => hendleCategory(e)}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorys;
