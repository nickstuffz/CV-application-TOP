function Personal({ data }) {
  return (
    <>
      <h1>{data.full_name}</h1>
      <p>{data.email}</p>
      <p>{data.address}</p>
      <p>{data.phone_number}</p>
    </>
  );
}

function Education({ data }) {
  return (
    <>
      <h3>{data.school}</h3>
      <p>{data.program}</p>
      <p>{data.edu_start}</p>
      <p>{data.edu_end}</p>
    </>
  );
}

function Experience({ data }) {
  return (
    <>
      <h3>{data.organization}</h3>
      <p>{data.position}</p>
      <p>{data.exp_start}</p>
      <p>{data.exp_end}</p>
      <p>{data.description}</p>
    </>
  );
}

function Document({ data }) {
  return (
    <div
      id="document"
      className="aspect-[0.7071067811] h-full bg-white text-black"
    >
      <Personal data={data} />
      <Education data={data} />
      <Experience data={data} />
    </div>
  );
}

export default Document;
