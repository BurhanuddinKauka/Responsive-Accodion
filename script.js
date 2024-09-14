const details = document.querySelectorAll('details');

details.forEach((detail) =>
  detail.addEventListener('click', () =>
    details.forEach((other) => other !== detail && other.removeAttribute('open'))
  )
);
