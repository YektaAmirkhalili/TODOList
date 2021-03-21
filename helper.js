(function createElement(tagName, attributes, content) {
  var el = document.createElement(tagName);

  for (var key in attributes){
    el.setAttribute(key,attributes[key]);
  }

  if(typeof(content) !== 'undefined'){
    if (content instanceof HTMLElement){
      el.appendChild(content);
    } else {
      el.innerText = content;
    }
  }

  return el;
})();