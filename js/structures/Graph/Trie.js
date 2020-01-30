class Trie {
  constructor()
  {
    this.shortcut = {};
  }

  addItem(key) {
    let path = '';
    for (const letter of key) {
      //Shortcut
      path += letter;
      this.shortcut[path] = (this.shortcut[path] || []);
      this.shortcut[path].push(key);
    }
  }

  partialSearch(q) {
    return this.shortcut[q] || [];
  }
}
var g = new Trie();
g.addItem('hackerrank');
g.addItem('hack');
console.log(g.partialSearch('hac'));
