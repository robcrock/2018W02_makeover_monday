var PromiseWrapper = d => new Promise(resolve => d3.csv(d, p => resolve(p)));

Promise
  .all([
    PromiseWrapper("american_women.csv")
  ])
  .then(resolve => {
    createAdjacencyMatrix(resolve[0]);
  });

function createAdjacencyMatrix(edges) {
  // CREATE LIST OF SOURCE AND DESTS
  var edgeHash = {};
  edges.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    edgeHash[id] = edge;
  });

  // CREATE A FORM WE CAN MAKE A 6x6 GRID OUT OF
  var matrix = [];
  const characteristics = ["looks", "personality", "humor", "intelligence", "money", "shared interests"];
  const rank = [1,2,3,4,5,6];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
        var grid = {
          id: `${source}-${target}`,
          x: b,
          y: a,
          weight: 0
        };
        console.log(`source: ${source} ,target ${target}`)
        if (edgeHash[grid.id]) {
          grid.weight = edgeHash[grid.id].weight;
        }
        matrix.push(grid);
    });
  });

  // APPEND THE GRID
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

  d3.selectAll("rect.grid").on("mouseover", gridOver);

  function gridOver(d) {

    d3.selectAll("rect")
        .style("fill", function (p) {
          return p.x * 25 == d.x * 25 || p.y * 25 == d.y * 25 ? "red" : "grey"
        });
  }

}