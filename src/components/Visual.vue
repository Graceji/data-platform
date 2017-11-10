<template>
  <div>
    <div class="test"></div>
  </div>
</template>

<script>
  const d3 = require('d3')
  export default {
    name: 'visual',
    methods: {
    },
    mounted () {
      let width = 1800
      let height = 800
//     取得20个颜色的序列
//      let colors = d3.schemeCategory20
//     定义画布
      let svg = d3.select('div.test').append('svg')
        .attr('width', width)
        .attr('height', height)
//      let simulation = d3.forceSimulation()
//        .force('link', d3.forceLink().id(function (d) {
//          return d.id
//        }))
//        .force('charge', d3.forceManyBody())
//        .force('center', d3.forceCenter(width / 2, height / 2))
    // 读取数据
      d3.json('http://localhost:8000/_components/data.json', function (error, data) {
        if (error) throw error
        // 定义力学结构
        const nodes = []
        const tempInfoObj = {}
        // 处理数据源
        data.info.member_id.forEach((item, index) => {
          tempInfoObj['id'] = item
          tempInfoObj['name'] = data.info.member_name[index]
          tempInfoObj['position'] = data.info.position[index]
          nodes.push({
            ...tempInfoObj
          })
        })
        console.log(nodes)
        const links = []
        const tempRelationsObj = {}
        data.relations.from.forEach((item, index) => {
          tempRelationsObj['source'] = item
          tempRelationsObj['target'] = data.relations.to[index]
          tempRelationsObj['type'] = data.relations.type[index]
          tempRelationsObj['weight'] = data.relations.weight[index]
          links.push({
            ...tempRelationsObj
          })
        })
        // link
        let link = svg.selectAll('.link')
          .data(links, function (d) {
            return d.target.id
          })
        link = link.enter()
          .append('line')
          .attr('class', 'link')
          .attr('stroke-width', function (d) {
            return 5
          })
        let node = svg.selectAll('.node')
          .data(nodes, function (d) {
            return d.id
          })
        node.enter()
          .append('g')
          .attr('class', 'node')
//          .call(d3.drag()
//            .on('start', dragstarted)
//            .on('drag', dragged)
//            .on('end', dragended))
        node.append('circle')
          .attr('r', 2.5)
          .append('title')
          .text(function (d) {
            return d.id
          })
          .append('text')
          .attr('dy', 3)
          .text(function (d) {
            return d.name
          })
        console.log(links)
        console.log(nodes)
        console.log(link)
//        simulation
//          .nodes(nodes)
//          .on('tick', ticked)
//        simulation.force('link')
//          .links(links)
        /* function ticked () {
          link
            .attr('x1', (d) => d.source.x)
            .attr('y1', (d) => d.source.y)
            .attr('x2', (d) => d.target.x)
            .attr('y2', (d) => d.target.y)
          node.attr('transform', (d) => `translate(${d.x}, ${d.y})`)
        } */
       /* function dragstarted (d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        }

        function dragged (d) {
          d.fx = d3.event.x
          d.fy = d3.event.y
        }

        function dragended (d) {
          if (!d3.event.active) simulation.alphaTarget(0)
          d.fx = undefined
          d.fy = undefined
        } */
      })
    }
  }
</script>

<style scoped>
  .node {
    stroke: #fff;
    stroke-width: 1.5px;
    cursor: pointer;
  }
  .nodetext {
    fill: #000;
    font-size:12px;
    font-family: 微软雅黑;
    cursor: pointer;
    pointer-events: none;
  }
</style>
