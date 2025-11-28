// Añade comportamiento de búsqueda global en páginas que contengan el input #buscarInput
(function(){
  const input = document.getElementById('buscarInput');
  if (!input) return;

  // Al pulsar Enter en el input, redirigir a la tienda con el query `q`
  input.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
      const val = input.value.trim();
      const q = encodeURIComponent(val);
      // Si ya estamos en tienda, sólo actualizamos la query
      if (location.pathname.includes('tienda.html')) {
        const params = new URLSearchParams(window.location.search);
        if (q) params.set('q', val);
        else params.delete('q');
        history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
        // intentar disparar el input event para que app.js filtre
        input.dispatchEvent(new Event('input'));
      } else {
        // redirigir a tienda con parámetro q
        if (q) window.location.href = 'tienda.html?q=' + q;
        else window.location.href = 'tienda.html';
      }
    }
  });
})();
