let rotation = 0;

function spin() {
  const image = document.getElementById('pfp');
  rotation += 360;

  image.style.transform = `rotate(${rotation}deg)`;
}
