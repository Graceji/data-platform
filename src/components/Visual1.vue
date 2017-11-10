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
      var width = 1800
      var height = 800
    // 取得20个颜色的序列
      let colors = d3.schemeCategory20
    // 定义画布
      let svg = d3.select('div.test').append('svg')
        .attr('width', width)
        .attr('height', height)

      // 读取数据
      d3.json('http://localhost:8000/_components/data.json', function (error, graph) {
        if (error) throw error
        // 定义力学结构
        var simulation = d3.forceSimulation()
          .force('charge', d3.forceManyBody())
          .force('link', d3.forceLink().distance(function (d) {
            return 80
//            return d.distance
          }))
          .force('center', d3.forceCenter(width / 2, height / 2))
        var edges = []
        graph.Links.forEach(function (e) {
          let sourceNode
          let targetNode
          sourceNode = graph.Nodes.filter(function (n) {
            return n.name === e.source
          })[0]
          targetNode = graph.Nodes.filter(function (n) {
            return n.name === e.target
          })[0]
          edges.push({
            source: sourceNode,
            target: targetNode
          })
        })
      // 定义连线
        var link = svg.selectAll('.link')
          .data(edges)
          .enter()
          .append('line')
          .attr('class', 'link')
          .attr('stroke', '#09F')
          .attr('stroke-opacity', '0.4')
          .style('stroke-width', 1)
      // 定义节点标记
        var node = svg.selectAll('.node')
          .data(graph.Nodes)
          .enter()
          .append('g')
          .call(d3.drag()
                  .on('start', function (d) {
                    if (!d3.event.active) {
                      simulation.alphaTarget(0.3).restart()
                    }
                  })
                  .on('end', function (d) {
                    if (!d3.event.active) {
                      simulation.alphaTarget(0)
                      d.fx = undefined
                      d.fy = undefined
                    }
                  })
                  .on('drag', function (d) {
                    d.fx = d3.event.x
                    d.fy = d3.event.y
                  })
          )
      // 节点圆形标记
        node.append('circle')
          .attr('class', 'node')
          .attr('r', 25)
          .style('stroke-width', '8') // 圆外面的轮廓线
          .style('stroke-opacity', '0.6')// 圆外面的轮廓线的透明度
          .style('fill', function (d) {
            var color
            if (d.group === 7) {
              color = '#AB82FF'
              return color
            } else if (d.group === 8) {
              color = '#F08080'
              return color
            }
            return colors[d.group]
          })
      // 标记鼠标悬停的标签
        node.append('title')
          .text(function (d) { return d.name })
      // 节点上显示的姓名
        node.append('text')
          .attr('dy', '.3em')
          .attr('class', 'nodetext')
          .style('text-anchor', 'middle')
          .text(function (d) { return d.name })
      // 开始力学动作
        simulation.nodes(graph.Nodes)
          .on('tick', function () {
            // 限制结点的边界
            node.attr('cx', function (d) { return d.x })
              .attr('cy', function (d) { return d.y })
            link.attr('x1', function (d) { return d.source.x })
              .attr('y1', function (d) { return d.source.y })
              .attr('x2', function (d) { return d.target.x })
              .attr('y2', function (d) { return d.target.y })
            node.attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
          })
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
