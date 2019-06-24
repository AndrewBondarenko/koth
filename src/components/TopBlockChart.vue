<template>
    <div class="top_block_charts">
        <div id="svgChart1"></div>
        <div id="svgChart2"></div>
        <div id="svgChart3"></div>
        <div id="svgChart4"></div>
        <div id="svgChart5"></div>
    </div>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: "TopBlockChart",
        mounted: function() {
            d3.select('#svgChart1')
                .append('svg')
                .attr('width', 40)
                .attr('height', 500)
                .style('background', 'none')
                .append('rect')
                .attr('x', 10)
                .attr('y', 150)
                .attr('width', 20)
                .attr('height', 350)
                .style('fill', '#237b90');
            d3.select('#svgChart2')
                .append('svg')
                .attr('width', 40)
                .attr('height', 500)
                .style('background', 'none')
                .append('rect')
                .attr('x', 10)
                .attr('y', 110)
                .attr('width', 20)
                .attr('height', 390)
                .style('fill', '#237b90');
            d3.select('#svgChart3')
                .append('svg')
                .attr('width', 40)
                .attr('height', 500)
                .style('background', 'none')
                .append('rect')
                .attr('x', 10)
                .attr('y', 10)
                .attr('width', 20)
                .attr('height', 490)
                .style('fill', '#237b90');
            d3.select('#svgChart4')
                .append('svg')
                .attr('width', 40)
                .attr('height', 500)
                .style('background', 'none')
                .append('rect')
                .attr('x', 10)
                .attr('y', 30)
                .attr('width', 20)
                .attr('height', 470)
                .style('fill', '#237b90');
            d3.select('#svgChart5')
                .append('svg')
                .attr('width', 40)
                .attr('height', 500)
                .style('background', 'none')
                .append('rect')
                .attr('x', 10)
                .attr('y', 200)
                .attr('width', 20)
                .attr('height', 300)
                .style('fill', '#237b90');
        }
    }
</script>

<style scoped lang="sass">

.top_block_charts
    min-height: 569px
    display: flex
    justify-content: space-around
    flex-direction: row
    #svgChart1, #svgChart2, #svgChart3, #svgChart4, #svgChart5
        margin-top: auto
        height: 500px

</style>
