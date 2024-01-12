window.addEventListener('resize', function() {
    var svg = document.querySelector('svg');
    var width = svg.getAttribute('width');
    var height = svg.getAttribute('height');
    var ratio = height / width;
    var container = svg.parentNode;
    var containerWidth = container.offsetWidth;
    svg.setAttribute('width', containerWidth);
    svg.setAttribute('height', containerWidth * ratio);
  });
  