function Input({ id, type, placeholder, handleChange }) {
  if (id === "description") {
    return (
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={(event) => handleChange(event, id)}
      />
    );
  }
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(event) => handleChange(event, id)}
    />
  );
}

function InputPair({ name, id, type, placeholder, handleChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{name}</label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </div>
  );
}
function Card({ id, children }) {
  return (
    <section id={id} className="card border-4 p-4">
      {children}
    </section>
  );
}

function Sidebar({ handleChange }) {
  return (
    <div id="sidebar" className="flex w-96 flex-col gap-4">
      <Card id="personal_info">
        <h1 className="pb-2">Personal Information</h1>
        <InputPair
          name="Full Name"
          id="full_name"
          type="text"
          placeholder="Mister Potato"
          handleChange={handleChange}
        />
        <InputPair
          name="Email"
          id="email"
          type="email"
          placeholder="potatopower@gmail.com"
          handleChange={handleChange}
        />
        <InputPair
          name="Address"
          id="address"
          type="text"
          placeholder="1234 Starchy Ave"
          handleChange={handleChange}
        />
        <InputPair
          name="Phone Number"
          id="phone_number"
          type="tel"
          placeholder="123-123-1234"
          handleChange={handleChange}
        />
      </Card>

      <Card id="education">
        <h1 className="pb-2">Education</h1>
        <InputPair
          name="School"
          id="school"
          type="text"
          placeholder="University of Vegetable"
          handleChange={handleChange}
        />
        <InputPair
          name="Program"
          id="program"
          type="text"
          placeholder="Spud History"
          handleChange={handleChange}
        />
        <InputPair
          name="Start"
          id="edu_start"
          type="month"
          handleChange={handleChange}
        />
        <InputPair
          name="End"
          id="edu_end"
          type="month"
          handleChange={handleChange}
        />
      </Card>

      <Card id="experience">
        <h1 className="pb-2">Experience</h1>
        <InputPair
          name="Organization"
          id="organization"
          type="text"
          placeholder="Carbohydrate Corporation"
          handleChange={handleChange}
        />
        <InputPair
          name="Position"
          id="position"
          type="text"
          placeholder="Research Intern"
          handleChange={handleChange}
        />
        <InputPair
          name="Start"
          id="exp_start"
          type="month"
          handleChange={handleChange}
        />
        <InputPair
          name="End"
          id="exp_end"
          type="month"
          handleChange={handleChange}
        />
        <InputPair
          name="Description"
          id="description"
          placeholder="Researched potato facts."
          handleChange={handleChange}
        />
      </Card>
    </div>
  );
}

export default Sidebar;
