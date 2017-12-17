function vog__extractOgData(){
  var metas = document.getElementsByTagName("meta");
  console.log(metas);
  var graph = {};
  for(var i = 0; i < metas.length; i++){
    property = metas[i].getAttribute("property");
    console.log(property);
    if(property != null && property.startsWith("og:")){
      content = metas[i].getAttribute("content");
      graph[property] = content;
    }
  }
  console.log(graph);
  return graph;
}
vog__extractOgData();
