window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const template = urlParams.get('template') || 'personal';
  location.replace('/templates/personal.html')
}
