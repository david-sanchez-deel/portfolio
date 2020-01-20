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
    element.innerHTML = element.innerHTML + `
      <div class="experience-element">
        <div class="experience-element-title">
          ${moment(experience.start).format('MM-YYYY')} - Currently<br /><span class="f-small">PSL S.A.</span>
            </div>
            <div class="experience-element-value">
              <p>
                Expert of virtual assistants using text or voice recognition
                platforms.
              </p>
              <p>
                Technical lead and architect for massive usage applications in
                NodeJS.
              </p>
              <p>
                Creation of the initial DevOps stack to CI + CD using cloud
                providers choose by our clients.
              </p>
              <p>Automation tester</p>
            </div>
          </div>
    `;
  }
}
