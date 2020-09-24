// console.log(document.children);

let res = [];
function dfs(node) {
  if (node === null) return;
  res.push(node);
  node.childNodes.forEach((item) => {
    dfs(item);
  });
}

dfs(document);

console.log(res);
