// Простой вариант для каждого пункта меню
document.querySelector('.nav div:nth-child(1)').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav div:nth-child(2)').addEventListener('click', () => {
  document.querySelector('#roads').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav div:nth-child(3)').addEventListener('click', () => {
  document.querySelector('#team').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav div:nth-child(4)').addEventListener('click', () => {
  document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
});