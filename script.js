var PromiseWrapper = d => new Promise(resolve => d3.csv(d, p => resolve(p)));

Promise
  .all([
    PromiseWrapper("data/german.csv"),
    PromiseWrapper("data/british.csv"),
    PromiseWrapper("data/malaysian.csv"),
    PromiseWrapper("data/hong_kong.csv")
  ])
  .then(resolve => {
    createAdjacencyMatrix(
      resolve[0],
      resolve[1],
      resolve[2],
      resolve[3]
    );
  });

function createAdjacencyMatrix(german,
  british,
  malaysian,
  hong_kong
) {

  // GERMAN
  var germanHash = {};
  german.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    germanHash[id] = edge;
  });

  var germanMatrix = [];
  const characteristics = ["Looks", "Personality", "Humor", "Intelligence", "Money", "Interests"];
  const rank = [1,2,3,4,5,6];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
        var grid = {
          id: `${source}-${target}`,
          x: b,
          y: a,
          percentage: 0
        };
        console.log(`source: ${source} ,target ${target}`)
      if (germanHash[grid.id]) {
          grid.percentage = germanHash[grid.id].percentage;
        }
      germanMatrix.push(grid);
    });
  });

  d3.select(".german")
    .append("g")
    .selectAll("rect").data(germanMatrix).enter()
    .append("rect")
      .attr("class", "grid")
      .attr("width", 25)
      .attr("height", 25)
      .attr("x", d => d.x * 25)
      .attr("y", d => d.y * 25)
      .style("fill-opacity", d => d.percentage);

  // BRITISH
  var britishHash = {};
  british.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    britishHash[id] = edge;
  });

  var britishMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      console.log(`source: ${source} ,target ${target}`)
      if (britishHash[grid.id]) {
        grid.percentage = britishHash[grid.id].percentage;
      }
      britishMatrix.push(grid);
    });
  });

  d3.select(".british")
    .append("g")
    .selectAll("rect").data(britishMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 25)
    .attr("height", 25)
    .attr("x", d => d.x * 25)
    .attr("y", d => d.y * 25)
    .style("fill-opacity", d => d.percentage);

  // MALAYSIAN
  var malaysianHash = {};
  malaysian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    malaysianHash[id] = edge;
  });

  var malaysianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      console.log(`source: ${source} ,target ${target}`)
      if (malaysianHash[grid.id]) {
        grid.percentage = malaysianHash[grid.id].percentage;
      }
      malaysianMatrix.push(grid);
    });
  });

  d3.select(".malaysian")
    .append("g")
    .selectAll("rect").data(malaysianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 25)
    .attr("height", 25)
    .attr("x", d => d.x * 25)
    .attr("y", d => d.y * 25)
    .style("fill-opacity", d => d.percentage);

  // HONG KONG
  var hongKongHash = {};
  hong_kong.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    hongKongHash[id] = edge;
  });

  var hongKongMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      console.log(`source: ${source} ,target ${target}`)
      if (hongKongHash[grid.id]) {
        grid.percentage = hongKongHash[grid.id].percentage;
      }
      hongKongMatrix.push(grid);
    });
  });

  d3.select(".hong_kong")
    .append("g")
    .selectAll("rect").data(hongKongMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 25)
    .attr("height", 25)
    .attr("x", d => d.x * 25)
    .attr("y", d => d.y * 25)
    .style("fill-opacity", d => d.percentage);


  // MOUSE OVER FUN
  d3.selectAll("rect.grid").on("mouseover", gridOver);

  function gridOver(d) {

    d3.selectAll("rect")
        .style("fill", function (p) {
          return p.x * 25 == d.x * 25 || p.y * 25 == d.y * 25 ? "red" : "grey"
        });
  }

}