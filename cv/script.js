import data from './data-en.js';

window.onload = () => {
  for (const key of Object.keys(data)) {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = data[key];
    }
  }
  // Contact
  let element = document.getElementById('social-media');
  element.innerHTML = '';
  for (const social of data['social-media']) {
    element.innerHTML = element.innerHTML + `
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
  // Skills
  element = document.getElementById('skills');
  element.innerHTML = '';
  for (const skill of data.skills) {
    element.innerHTML = element.innerHTML + `
    <div class="skill-element">
      <span>${skill.title}</span>
      <div class="bar">
        <div style="width: ${skill.value}%"></div>
      </div>
    </div>
    `;
  }

  // Languages
  element = document.getElementById('languages');
  element.innerHTML = '';
  for (const language of data.languages) {
    element.innerHTML = element.innerHTML + `<div class="language">${language}</div>`;
  }

  // Experience
  element = document.getElementById('experiences');
  element.innerHTML = '';
  for (const experience of data.experiences) {
    // Texts
    const texts = experience.description.map((text) => `<p>${text}</p>`).join('');

    element.innerHTML = element.innerHTML + `
      <div class="experience-element">
        <div class="experience-element-title f-small">
          ${formatDate(experience.start)} - ${experience.end ? formatDate(experience.end) : data.currently}
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

function formatDate(date) {
  return date.toLocaleDateString(data.locale, { month: 'short', year: 'numeric' });
}