(function() {
  const saber = document.querySelector('.lightsaber--container')
  saber.addEventListener('click', function(e) {
    saber.classList.toggle('ignited');
  })

  document.querySelector('.obi-wan-kintainer').addEventListener('click', function(e) {
    
    document.getElementById('kinobi-greeting').play();
  })
})();
