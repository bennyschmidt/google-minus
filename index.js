const BLACKLIST = [
  'reddit.com',
  'quora.com'
];

const onClick = () => {
  const {
    value: query
  } = document.getElementById('search-input');

  const url =
    `https://www.google.com/search?q=${encodeURIComponent(`${query} -site:${BLACKLIST.join(' -site:')}`)}`;

  document.getElementById('search-input').value = '';

  window.open(url, '_blank');
};

const onKeyDown = ({ key }) => {
  if (key === 'Enter') {
    return onClick();
  }
};

document.getElementById('search-button').onclick = onClick;
document.getElementById('search-input').onkeydown = onKeyDown;
