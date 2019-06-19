<template>
    <div class="user-chart">
        <div id="svgChart"></div>
    </div>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: "UserBlockClickChart",
        props: {
            heightChart: Number
        },
        data() {
            return {

            };
        },
        watch: {
            heightChart(){
                this.drawSVG()
            },
        },
        mounted: function() {
            this.drawSVG()
        },
        methods: {
            drawSVG: function(){
                d3.select("svg").remove();
                d3.select('#svgChart')
                    .append('svg')
                    .attr('width', 500)
                    .attr('height', 500)
                    .style('background', '#d9edf7')
                    .append('rect')
                    .attr('x', 100)
                    .attr('y', 50)
                    .attr('width', 40)
                    .attr('height', this.heightChart)
                    .style('fill', '#31708f');
            }
        },
    };
</script>

<style scoped lang="sass">

</style>
