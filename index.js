function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rank = document.getElementById('app').querySelectorAll('.ranked-list li');

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (parseInt(rank[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  while (node.firstChild) {
    node = node.firstChild;
  }
  return node;
}
