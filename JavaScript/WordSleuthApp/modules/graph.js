const testData = [
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

class Node {
  constructor(name) {
    this.name = name;
    this.parents = [];
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  addParent(parent) {
    this.parents.push(parent);
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(name) {
    this.nodes.push(new Node(name));
  }
  getNode(name) {
    return this.nodes.find((letter) => letter.name === name);
  }

  addEdge(parent, child) {
    const parentNode = this.getNode(parent);
    const childNode = this.getNode(child);
    if (!this.edges.includes(`${parent} - ${child}`)) {
      parentNode.addChild(childNode);
      childNode.addParent(parentNode);
      this.edges.push(`${parent} - ${child}`);
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
  //   console.log(wordDuples);

  graph.addEdge("root", wordDuples[0][0]);
  wordDuples.map((arr, i) => {
    graph.addEdge(...arr);
  });
  graph.addEdge(wordDuples.pop()[1], "end");
}

const graph = new Graph(true);
graph.addNode("root");
graph.addNode("end");

const nodeList = [
  ...new Set(testData.reduce((acc, cur) => acc + cur).toUpperCase()),
];
nodeList.map((node) => graph.addNode(node));

testData.map((word) => addWordToGraph(word));

console.log(graph.nodes.filter(({ name }) => name === "root"));
