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
    var id = `${edge.source}-${edge.target}`;
    edgeHash[id] = edge;
  });

  var matrix = [];
  nodes.forEach((source, a) => {
    nodes.forEach((target, b) => {
      // filter out the self-loop
      if (isNaN(Number(source.id)) === true && isNaN(Number(target.id)) === false) {
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
      }
    });
  });

  d3.select("svg")
    .attr("width", "400px")
    .attr("height", "400px")
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
    .attr("transform", "translate(215,45)")
    .selectAll("text")
    .data([1, 2, 3, 4, 5, 6])
    .enter()
    .append("text")
    .attr("x", (d, i) => i * 25)
    .text(d => d)
    .style("text-anchor", "middle");

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(190,70)")
    .selectAll("text")
    .data(["looks", "personality", "humor", "intelligence", "money", "shared interests"])
    .enter()
    .append("text")
    .attr("y", (d, i) => i * 25)
    .text(d => d)
    .style("text-anchor", "end");

  d3.selectAll("rect.grid").on("mouseover", gridOver);

  function gridOver(d) {

    d3.selectAll("rect")
        .style("fill", function (p) {
          return p.x * 25 == d.x * 25 || p.y * 25 == d.y * 25 ? "red" : "grey"
        });
  }

}