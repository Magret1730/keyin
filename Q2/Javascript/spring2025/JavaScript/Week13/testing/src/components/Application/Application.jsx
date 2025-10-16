const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>HR Manager</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name here"
            value="Alan"
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="CA">Canada</option>
            <option value="AU">Australi</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agreen to the conditions
          </label>
        </div>

        <div>
          <input type="submit" value="Send" />
          <input type="reset" value="Clear" />
        </div>
      </form>
    </>
  );
};
export default Application;
