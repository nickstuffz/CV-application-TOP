function Personal() {
  return (
    <>
      <h1>Nicholas Ng</h1>
      <p>nicholasng62@gmail.com</p>
      <p>267 Central Ave</p>
      <p>206-407-9766</p>
    </>
  );
}

function Education() {
  return (
    <>
      <h3>University of Washington</h3>
      <p>Mechanical Engineering</p>
      <p>September 2016 - June 2021</p>
    </>
  );
}

function Experience() {
  return (
    <>
      <h3>New Wheel</h3>
      <p>Mechanic</p>
      <p>September 2016 - June 2021</p>
    </>
  );
}

function Document({ personalData, educationData, experienceData }) {
  return (
    <div id="document">
      <section id="page" className="aspect-[0.7071067811] h-full border-2">
        <Personal />
        <Education />
        <Experience />
      </section>
    </div>
  );
}

export default Document;
