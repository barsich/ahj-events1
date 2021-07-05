const mouseCursor = document.querySelector('.cursor');

export default function cursor(event) {
  mouseCursor.style.top = `${event.pageY}px`;
  mouseCursor.style.left = `${event.pageX}px`;
}

window.addEventListener('mousemove', cursor);
