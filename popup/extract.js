function handleGraph(graph) {
  if (Object.keys(graph).length == 0) {
    document.getElementById("popup-content").innerHTML = "<p><i>No open graph data found.</i></p>";
  } else {
    html = "<table>";
    for (var key in graph) {
      html += "<tr style='padding-top: 2px;'>";
      html += "<th style='text-align: left;'><small>" + key + "</small></th><th>&nbsp;</th>";
      html += "<td><code>" + graph[key] + "</code></td>";
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("popup-content").innerHTML = html;
  }
}

browser.tabs.executeScript({
  file: "/content_scripts/get_og_data.js"
}).then(function(result){
  handleGraph(result[0]);
})
