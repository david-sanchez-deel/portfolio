import data from "./data-en.js";

window.onload = () => {
  for (const key of Object.keys(data)) {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = data[key];
    }
  }
  // Contact
  let element = document.getElementById("social-media");
  if (element) {
    element.innerHTML = "";
    for (const social of data["social-media"]) {
      element.innerHTML =
        element.innerHTML +
        `
    <div class="contact-element">
      <div class="contact-element-title">${social.title}</div>
      <div class="contact-element-value">
        <a href="${social.link}" target="_blank"
          >${social.value}</a
        >
      </div>
    </div>
    `;
    }
  }
  // Skills
  element = document.getElementById("skills");
  element.innerHTML = "";
  for (const skill of data.skills) {
    element.innerHTML =
      element.innerHTML +
      `
    <div class="skill-element">
      <span>${skill.title}</span>
      <div class="bar">
        <div style="width: ${skill.value}%"></div>
      </div>
    </div>
    `;
  }

  // Languages
  element = document.getElementById("languages");
  if (element) {
    element.innerHTML = "";
    for (const language of data.languages) {
      element.innerHTML =
        element.innerHTML + `<div class="language">${language}</div>`;
    }
  }

  // Experience
  element = document.getElementById("experiences");
  element.innerHTML = "";
  const template = document.getElementById("experience-template");
  if (template) {
    let templateContent = template.content;
    for (const experience of data.experiences) {
      const child = templateContent.cloneNode(true);

      const company = child.querySelector(".company");
      company.innerHTML = experience.company;

      const city = child.querySelector(".city");
      city.innerHTML = experience.city;

      const role = child.querySelector(".role");
      role.innerHTML = experience.role;

      const date = child.querySelector(".date");
      date.innerHTML = `${formatDate(experience.start)} - ${
        experience.end ? formatDate(experience.end) : data.currently}`;
      
      // Texts
      const texts = experience.description
        .map(text => `<p>${text}</p>`)
        .join("");
      const description = child.querySelector(".description");
        description.innerHTML = texts;
  
     

      element.appendChild(child);
        /* element.innerHTML +
        `
      <div class="experience-element">
        <div class="experience-element-title f-small">
          ${
        }
          <br />
          <span class="f-small">${experience.company}</span>
        </div>
        <div class="experience-element-value">
          ${texts}
        </div>
      </div>
    `; */
    }
  } else {
    for (const experience of data.experiences) {
      // Texts
      const texts = experience.description
        .map(text => `<p>${text}</p>`)
        .join("");

      element.innerHTML =
        element.innerHTML +
        `
      <div class="experience-element">
        <div class="experience-element-title f-small">
          ${formatDate(experience.start)} - ${
          experience.end ? formatDate(experience.end) : data.currently
        }
          <br />
          <span class="f-small">${experience.company}</span>
        </div>
        <div class="experience-element-value">
          ${texts}
        </div>
      </div>
    `;
    }
  }
};

function formatDate(date) {
  return date.toLocaleDateString(data.locale, {
    month: "short",
    year: "numeric"
  });
}
