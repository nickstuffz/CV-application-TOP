import { useState } from "react";

function Input({ id, type }) {
  const [value, setValue] = useState("");

  if (id === "description") {
    return (
      <textarea
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

function InputPair({ name, id, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{name}</label>
      <Input id={id} type={type} />
    </div>
  );
}
function Card({ id, children }) {
  return (
    <section id={id} className="card mb-6 border-4 p-4">
      {children}
    </section>
  );
}

function Sidebar() {
  return (
    <div id="sidebar" className="w-96">
      <Card id="personal-info">
        <h1 className="pb-2">Personal Information</h1>
        <InputPair name="Full Name" id="full_name" type="text" />
        <InputPair name="Email" id="email" type="email" />
        <InputPair name="Address" id="address" type="text" />
        <InputPair name="Phone Number" id="phone_number" type="tel" />
      </Card>

      <Card id="education">
        <h1 className="pb-2">Education</h1>
        <InputPair name="School" id="school" type="text" />
        <InputPair name="Program" id="program" type="text" />
        <InputPair name="Start" id="edu-start" type="month" />
        <InputPair name="End" id="edu-end" type="month" />
      </Card>

      <Card id="experience">
        <h1>Experience</h1>
        <InputPair name="Organization" id="organization" type="text" />
        <InputPair name="Position" id="position" type="text" />
        <InputPair name="Start" id="exp-start" type="month" />
        <InputPair name="End" id="exp-end" type="month" />
        <InputPair name="Description" id="description" />
      </Card>
    </div>
  );
}

export default Sidebar;
