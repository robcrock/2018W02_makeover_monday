var PromiseWrapper = d => new Promise(resolve => d3.csv(d, p => resolve(p)));

Promise
  .all([
    PromiseWrapper("data/german.csv"),
    PromiseWrapper("data/british.csv"),
    PromiseWrapper("data/malaysian.csv"),
    PromiseWrapper("data/hong_kong.csv"),
    PromiseWrapper("data/filipino.csv"),
    PromiseWrapper("data/american.csv"),
    PromiseWrapper("data/indonesian.csv"),
    PromiseWrapper("data/singaporean.csv"),
    PromiseWrapper("data/thai.csv"),
    PromiseWrapper("data/french.csv"),
    PromiseWrapper("data/indian.csv"),
    PromiseWrapper("data/australian.csv"),
    PromiseWrapper("data/danish.csv"),
    PromiseWrapper("data/swedish.csv"),
    PromiseWrapper("data/finnish.csv"),
    PromiseWrapper("data/vietnamese.csv"),
    PromiseWrapper("data/egyptian.csv"),
    PromiseWrapper("data/uae.csv"),
    PromiseWrapper("data/arabian.csv"),
    PromiseWrapper("data/norwegian.csv")
  ])
  .then(resolve => {
    createAdjacencyMatrix(
      resolve[0],
      resolve[1],
      resolve[2],
      resolve[3],
      resolve[4],
      resolve[5],
      resolve[6],
      resolve[7],
      resolve[8],
      resolve[9],
      resolve[10],
      resolve[11],
      resolve[12],
      resolve[13],
      resolve[14],
      resolve[15],
      resolve[16],
      resolve[17],
      resolve[18],
      resolve[19]
    );
  });

function createAdjacencyMatrix(
    german,
    british,
    malaysian,
    hong_kong,
    american,
    filipino,
    indonesian,
    singaporean,
    thai,
    french,
    indian,
    australian,
    danish,
    swedish,
    finnish,
    vietnamese,
    egyptian,
    uae,
    arabian,
    norwegian
  ) {

  // KEY
  var keyMatrix = [];
  const characteristics = ["Personality", "Humor", "Intelligence", "Looks", "Interests", "Money"];
  const rank = [1, 2, 3, 4, 5, 6];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      keyMatrix.push(grid);
    });
  });

  d3.select(".key")
    .append("g")
    .selectAll("rect").data(keyMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x", d => d.x * 10)
    .attr("y", d => d.y * 10)
    .style("fill-opacity", d => d.percentage)
    .style("stroke", "#ccc")
    .style("stroke-width", '1px');

  // GERMAN
  var germanHash = {};
  german.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    germanHash[id] = edge;
  });

  var germanMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
        var grid = {
          id: `${source}-${target}`,
          x: b,
          y: a,
          percentage: 0
        };
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
      .attr("width", 15)
      .attr("height", 15)
      .attr("x", d => d.x * 15)
      .attr("y", d => d.y * 15)
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
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
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
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
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
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // filipino
  var filipinoHash = {};
  filipino.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    filipinoHash[id] = edge;
  });

  var filipinoMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (filipinoHash[grid.id]) {
        grid.percentage = filipinoHash[grid.id].percentage;
      }
      filipinoMatrix.push(grid);
    });
  });

  d3.select(".filipino")
    .append("g")
    .selectAll("rect").data(filipinoMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);
  
  // american
  var americanHash = {};
  american.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    americanHash[id] = edge;
  });

  var americanMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (americanHash[grid.id]) {
        grid.percentage = americanHash[grid.id].percentage;
      }
      americanMatrix.push(grid);
    });
  });

  d3.select(".american")
    .append("g")
    .selectAll("rect").data(americanMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // indonesian
  var indonesianHash = {};
  indonesian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    indonesianHash[id] = edge;
  });

  var indonesianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (indonesianHash[grid.id]) {
        grid.percentage = indonesianHash[grid.id].percentage;
      }
      indonesianMatrix.push(grid);
    });
  });

  d3.select(".indonesian")
    .append("g")
    .selectAll("rect").data(indonesianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // singaporean
  var singaporeanHash = {};
  singaporean.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    singaporeanHash[id] = edge;
  });

  var singaporeanMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (singaporeanHash[grid.id]) {
        grid.percentage = singaporeanHash[grid.id].percentage;
      }
      singaporeanMatrix.push(grid);
    });
  });

  d3.select(".singaporean")
    .append("g")
    .selectAll("rect").data(singaporeanMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // thai
  var thaiHash = {};
  thai.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    thaiHash[id] = edge;
  });

  var thaiMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (thaiHash[grid.id]) {
        grid.percentage = thaiHash[grid.id].percentage;
      }
      thaiMatrix.push(grid);
    });
  });

  d3.select(".thai")
    .append("g")
    .selectAll("rect").data(thaiMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // french
  var frenchHash = {};
  french.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    frenchHash[id] = edge;
  });

  var frenchMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (frenchHash[grid.id]) {
        grid.percentage = frenchHash[grid.id].percentage;
      }
      frenchMatrix.push(grid);
    });
  });

  d3.select(".french")
    .append("g")
    .selectAll("rect").data(frenchMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // indian
  var indianHash = {};
  indian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    indianHash[id] = edge;
  });

  var indianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (indianHash[grid.id]) {
        grid.percentage = indianHash[grid.id].percentage;
      }
      indianMatrix.push(grid);
    });
  });

  d3.select(".indian")
    .append("g")
    .selectAll("rect").data(indianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // australian
  var australianHash = {};
  australian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    australianHash[id] = edge;
  });

  var australianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (australianHash[grid.id]) {
        grid.percentage = australianHash[grid.id].percentage;
      }
      australianMatrix.push(grid);
    });
  });

  d3.select(".australian")
    .append("g")
    .selectAll("rect").data(australianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // danish
  var danishHash = {};
  danish.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    danishHash[id] = edge;
  });

  var danishMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (danishHash[grid.id]) {
        grid.percentage = danishHash[grid.id].percentage;
      }
      danishMatrix.push(grid);
    });
  });

  d3.select(".danish")
    .append("g")
    .selectAll("rect").data(danishMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // swedish
  var swedishHash = {};
  swedish.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    swedishHash[id] = edge;
  });

  var swedishMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (swedishHash[grid.id]) {
        grid.percentage = swedishHash[grid.id].percentage;
      }
      swedishMatrix.push(grid);
    });
  });

  d3.select(".swedish")
    .append("g")
    .selectAll("rect").data(swedishMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // finnish
  var finnishHash = {};
  finnish.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    finnishHash[id] = edge;
  });

  var finnishMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (finnishHash[grid.id]) {
        grid.percentage = finnishHash[grid.id].percentage;
      }
      finnishMatrix.push(grid);
    });
  });

  d3.select(".finnish")
    .append("g")
    .selectAll("rect").data(finnishMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);
    
  // vietnamese
  var vietnameseHash = {};
  vietnamese.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    vietnameseHash[id] = edge;
  });

  var vietnameseMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (vietnameseHash[grid.id]) {
        grid.percentage = vietnameseHash[grid.id].percentage;
      }
      vietnameseMatrix.push(grid);
    });
  });

  d3.select(".vietnamese")
    .append("g")
    .selectAll("rect").data(vietnameseMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // egyptian
  var egyptianHash = {};
  egyptian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    egyptianHash[id] = edge;
  });

  var egyptianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (egyptianHash[grid.id]) {
        grid.percentage = egyptianHash[grid.id].percentage;
      }
      egyptianMatrix.push(grid);
    });
  });

  d3.select(".egyptian")
    .append("g")
    .selectAll("rect").data(egyptianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // uae
  var uaeHash = {};
  uae.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    uaeHash[id] = edge;
  });

  var uaeMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (uaeHash[grid.id]) {
        grid.percentage = uaeHash[grid.id].percentage;
      }
      uaeMatrix.push(grid);
    });
  });

  d3.select(".uae")
    .append("g")
    .selectAll("rect").data(uaeMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);
    
  // arabian
  var arabianHash = {};
  arabian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    arabianHash[id] = edge;
  });

  var arabianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (arabianHash[grid.id]) {
        grid.percentage = arabianHash[grid.id].percentage;
      }
      arabianMatrix.push(grid);
    });
  });

  d3.select(".arabian")
    .append("g")
    .selectAll("rect").data(arabianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // norwegian
  var norwegianHash = {};
  norwegian.forEach(edge => {
    var id = `${edge.source}-${edge.target}`;
    norwegianHash[id] = edge;
  });

  var norwegianMatrix = [];
  characteristics.forEach((source, a) => {
    rank.forEach((target, b) => {
      var grid = {
        id: `${source}-${target}`,
        x: b,
        y: a,
        percentage: 0
      };
      if (norwegianHash[grid.id]) {
        grid.percentage = norwegianHash[grid.id].percentage;
      }
      norwegianMatrix.push(grid);
    });
  });

  d3.select(".norwegian")
    .append("g")
    .selectAll("rect").data(norwegianMatrix).enter()
    .append("rect")
    .attr("class", "grid")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", d => d.x * 15)
    .attr("y", d => d.y * 15)
    .style("fill-opacity", d => d.percentage);

  // MOUSE OVER FUN
  d3.selectAll("rect.grid").on("mouseover", gridOver);

  function gridOver(d) {

    d3.selectAll("rect")
        .style("fill", function (p) {
          return p.x * 15 == d.x * 15 || p.y * 15 == d.y * 15 ? "red" : "grey"
        });
  }

}