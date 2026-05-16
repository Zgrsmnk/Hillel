const Form = () => (
  <div>
    <div className="text">SWAPI</div>
        <form className="form">
            <span className="form_block">https://www.swapi.tech/api/</span>
      <input type="text" className="form_input" placeholder="people/1/" required></input>
      <button type="submit">Get Info</button>
    </form>
  </div>
);

export default Form;
