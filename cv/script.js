import data from './data-en.js';

window.onload = () => {
  for (const key of Object.keys(data)) {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = data[key];
    }
  }

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
}
