// nav items
const aboutBlock = document.getElementById('aboutBlock');
const roadsBlock = document.getElementById('roadsBlock');
const teamBlock = document.getElementById('teamBlock');
const contactsBlock = document.getElementById('footerBlock');

const about= document.getElementById('about');
const roads = document.getElementById('roads');
const team = document.getElementById('team');
const contacts = document.getElementById('footer');


about.onclick = function() {
  window.scrollTo({ top: aboutBlock.offsetTop - 115, behavior: 'smooth' });
}

roads.onclick = function() {
  window.scrollTo({ top: roadsBlock.offsetTop - 130, behavior: 'smooth' });
}

team.onclick = function() {
  window.scrollTo({ top: teamBlock.offsetTop - 100, behavior: 'smooth' });
}

contacts.onclick = function() {
  window.scrollTo({ top: contactsBlock.offsetTop - 100, behavior: 'smooth' });
}