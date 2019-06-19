<template>
    <div class="user-chart">
        <div v-if="heightChart === 0" class="user-chart-message">
            <h1>P L A Y</h1>
            <h1>or</h1>
            <h1>D  I  E</h1>
            <h1>(it's a joke)</h1>
        </div>
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
                    .attr('height', 400)
                    .style('background', '#fff')
                    .append('rect')
                    .attr('x', 240)
                    .attr('y', 400 - this.heightChart % 400)
                    .attr('width', 20)
                    .attr('height', this.heightChart % 400)
                    .style('fill', '#31708f');
            }
        },
    };
</script>

<style scoped lang="sass">
.user-chart-message
    position: absolute
    display: flex
    flex-direction: column
    margin: 0 13.5% 0 13.5%
    opacity: 0.6
</style>
