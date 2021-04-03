const testData1 = [
  "Alder",
  "Apple",
  "Ash",
  "Aspen",
  "Birch",
  "Buckthorn",
  "Cedar",
  "Cherry",
  "Chestnut",
  "Chinkapin",
  "Cottonwood",
  "Cypress",
  "Dogwood",
  "Elm",
  "Fir",
  "Hawthorn",
  "Hazel",
  "Larch",
  "Maple",
  "Oak",
  "Pine",
  "Poplar",
  "Redwood",
  "Sequoia",
  "Spruce",
  "Sweetgum",
  "Sycamore",
  "Walnut",
  "Willow",
  "Yew",
];

const testData2 = [
  "Alder",
  "Apple",
  "Ash",
  "Aspen",
  "Birch",
  "Buckthorn",
  "Cedar",
  "Cherry",
  "Chestnut",
  "Chinkapin",
  "Cottonwood",
  "Cypress",
  "Tanner",
  "Jade",
  "Chair",
  "Lamp",
];

const smallTest = ["ab", "bab", "bc", "bca", "caa"];

class Node {
  constructor(name, level = 0) {
    this.name = name;
    this.level = level;
    this.parents = [];
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  addParent(parent) {
    this.parents.push(parent);
  }

  getChildren() {
    return this.children;
  }

  // isChildOf(){}
}

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.addNode("root");
  }

  addNode(name, level) {
    this.nodes.push(new Node(name, level));
  }
  getNode(name, level = 0) {
    return this.nodes.find(
      (letter) => letter.name === name && letter.level === level
    );
  }

  addEdge(parent, child, level) {
    const parentNode = this.getNode(parent, level);
    let childNode;
    if (this.getNode(child, parentNode.level + 1)) {
      childNode = this.getNode(child, parentNode.level + 1);
    } else {
      this.addNode(child, parentNode.level + 1);
      childNode = this.getNode(child, parentNode.level + 1);
    }
    if (
      !this.edges.includes(
        `[${parent}, ${parentNode.level}] - [${child}, ${childNode.level}]`
      )
    ) {
      parentNode.addChild(childNode);
      childNode.addParent(parentNode);
      this.edges.push(
        `[${parent}, ${parentNode.level}] - [${child}, ${childNode.level}]`
      );
    } else return;
  }

  print() {
    return this.nodes
      .map(({ name, children }) => {
        return `${name} => ${children
          .map((child) => `${child.name},`)
          .join(" ")}`;
      })
      .join("\n");
  }
}

function addWordToGraph(word) {
  const wordDuples = [];
  for (let [i, j] = [0, 2]; j <= word.length; [i++, j++]) {
    wordDuples.push([...word.toUpperCase().slice(i, j)]);
  }

  graph.addEdge("root", wordDuples[0][0], 0);
  wordDuples.map((arr, i) => {
    graph.addEdge(...arr, i + 1);
  });
  graph.addEdge(wordDuples.pop()[1], "end", word.length);
}

const graph = new Graph();

testData1.map((word) => addWordToGraph(word));

function searchGraph(word) {
  const wordArr = [...word.toUpperCase(), "end"];

  let searchPoint = graph.nodes.find((node) => node.name === "root");
  const results = [searchPoint];

  wordArr.map((cur) => {
    if (
      searchPoint &&
      searchPoint.children?.filter((node) => {
        node.name === cur;
      })
    ) {
      searchPoint = searchPoint.children.find((node) => node.name === cur);
    } else {
      searchPoint = undefined;
    }
    results.push(searchPoint);
  });

  return results.includes(undefined)
    ? `${word} not in tree`
    : `${word} is in the tree!`;
}

console.log(testData2.map((w) => searchGraph(w)));
