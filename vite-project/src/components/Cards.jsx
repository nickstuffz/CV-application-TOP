function Sidebar() {
  return (
    <>
      <section id="personal-info" class="card border-4 p-4">
        <h1 class="pb-2">Personal Information</h1>
        <div class="flex flex-col">
          <label for="full_name">Full Name</label>
          <input id="full_name" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div class="flex flex-col">
          <label for="address">Address</label>
          <input id="address" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="phone_number">Phone Number</label>
          <input id="phone_number" type="tel" />
        </div>
      </section>

      <section id="education" class="card border-4 p-4">
        <h1 class="pb-2">Education</h1>
        <div class="flex flex-col">
          <label for="school">School</label>
          <input id="school" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="program">Program</label>
          <input id="program" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="edu-start">Start</label>
          <input id="edu-start" type="month" />
        </div>
        <div class="flex flex-col">
          <label for="edu-end">End</label>
          <input id="edu-end" type="month" />
        </div>
      </section>

      <section id="experience" class="card border-4 p-4">
        <h1 class="pb-2">Experience</h1>
        <div class="flex flex-col">
          <label for="company">Company</label>
          <input id="company" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="position">Position</label>
          <input id="position" type="text" />
        </div>
        <div class="flex flex-col">
          <label for="exp-start">Start</label>
          <input id="exp-start" type="month" />
        </div>
        <div class="flex flex-col">
          <label for="exp-end">End</label>
          <input id="exp-end" type="month" />
        </div>
        <div class="flex flex-col">
          <label for="description">Description</label>
          <textarea id="description"></textarea>
        </div>
      </section>
    </>
  );
}

export { Sidebar };