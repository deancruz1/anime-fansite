function changeBg(vid, img, title) {
  const video = document.querySelector('.bg-video');
  video.src = `./assets/characters-page/bg/${vid}`;
  video.load();

  const crest = document.querySelector('.char-crest');
  crest.src = './assets/characters-page/crest/' + img;

  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

$(document).ready(function () {
  $('.carousel').carousel();
});