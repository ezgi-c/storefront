const Categories = () => {
  return (
    <section     style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }}>
      <h3>Browse our Categories</h3>
      <select>
        <option value="electronics">Electornics</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
      </select>
    </section>
  );
};

export default Categories;
