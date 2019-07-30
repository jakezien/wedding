import React from "react"
import ReactDOM from "react-dom"



class Justifier extends React.Component {}

Justifier.wrap = (el) => {
  let wrapH3 = (el) => {
    var string = el.innerHTML;
    string.split("");
    el.innerHTML = ''
    for (var i=0; i < string.length; i++) {
        el.innerHTML += "<span>" + string[i] + "</span>";
    }
  }

  let wrapH3s = (el) => {
    let componentNode = ReactDOM.findDOMNode(el);
    let h3s;
    if (componentNode) {
      h3s = componentNode.querySelectorAll('h3');
      for (var h3 of h3s) {
        wrapH3(h3)
      }
    }
  }

  wrapH3s(el);
}

export default Justifier