function Input({ id, type, handleChange }) {
  if (id === "description") {
    return <textarea id={id} onChange={(event) => handleChange(event, id)} />;
  }
  return (
    <input id={id} type={type} onChange={(event) => handleChange(event, id)} />
  );
}

function InputPair({ name, id, type, handleChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{name}</label>
      <Input id={id} type={type} handleChange={handleChange} />
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
    <div id="sidebar" className="w-96">
      <Card id="personal-info">
        <h1 className="pb-2">Personal Information</h1>
        <InputPair
          name="Full Name"
          id="full_name"
          type="text"
          handleChange={handleChange}
        />
        <InputPair
          name="Email"
          id="email"
          type="email"
          handleChange={handleChange}
        />
        <InputPair
          name="Address"
          id="address"
          type="text"
          handleChange={handleChange}
        />
        <InputPair
          name="Phone Number"
          id="phone_number"
          type="tel"
          handleChange={handleChange}
        />
      </Card>

      <Card id="education">
        <h1 className="pb-2">Education</h1>
        <InputPair
          name="School"
          id="school"
          type="text"
          handleChange={handleChange}
        />
        <InputPair
          name="Program"
          id="program"
          type="text"
          handleChange={handleChange}
        />
        <InputPair
          name="Start"
          id="edu-start"
          type="month"
          handleChange={handleChange}
        />
        <InputPair
          name="End"
          id="edu-end"
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
          handleChange={handleChange}
        />
        <InputPair
          name="Position"
          id="position"
          type="text"
          handleChange={handleChange}
        />
        <InputPair
          name="Start"
          id="exp-start"
          type="month"
          handleChange={handleChange}
        />
        <InputPair
          name="End"
          id="exp-end"
          type="month"
          handleChange={handleChange}
        />
        <InputPair
          name="Description"
          id="description"
          handleChange={handleChange}
        />
      </Card>
    </div>
  );
}

export default Sidebar;
