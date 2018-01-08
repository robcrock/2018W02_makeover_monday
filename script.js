var PromiseWrapper = d => new Promise(resolve => d3.csv(d, p => resolve(p)));

Promise
  .all([
    PromiseWrapper("american_women_nodes.csv"),
    PromiseWrapper("american_women.csv")
  ])
  .then(resolve => {
    createAdjacencyMatrix(resolve[0], resolve[1]);
  });

function createAdjacencyMatrix(nodes, edges) {
  var edgeHash = {};
  edges.forEach(edge => {
    if (edge.source !== edge.target) {
      var id = `${edge.source}-${edge.target}`;
    }
    edgeHash[id] = edge;
  });

  var matrix = [];
  nodes.forEach((source, a) => {
    nodes.forEach((target, b) => {
      var grid = {
        id: `${source.id}-${target.id}`,
        x: b,
        y: a,
        weight: 0
      };
      if (edgeHash[grid.id]) {
        grid.weight = edgeHash[grid.id].weight;
      }
      matrix.push(grid);
    });
  });

  console.log(matrix);

  d3.select("svg")
    .append("g")
      .attr("transform", "translate(50,50)")
      .attr("id", "adjacencyG")
    .selectAll("rect").data(matrix).enter()
    .append("rect")
      .attr("class", "grid")
      .attr("width", 25)
      .attr("height", 25)
      .attr("x", d => d.x * 25)
      .attr("y", d => d.y * 25)
      .style("fill-opacity", d => d.weight);

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(50,45)")
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("x", (d, i) => i * 25 + 12.5)
    .text(d => d.id)
    .style("text-anchor", "middle");

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(45,50)")
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("y", (d, i) => i * 25 + 12.5)
    .text(d => d.id)
    .style("text-anchor", "end");

}