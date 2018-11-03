<template>
  <div v-if="shape === 'star'" class="shape">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path 
        :fill="colors[color].fill" 
        :stroke="colors[color].stroke" 
        transform="rotate(-6 50.725215911865256,50.807189941406264) " 
        stroke-width="3" 
        d="m72.039371,92.28147c-4.847178,2.746734 -19.227139,-15.995687 -24.88218,-16.480405c-5.655041,-0.64629 -23.428027,14.703107 -27.628914,10.825364c-4.200888,-3.71617 9.209638,-22.943309 7.917057,-28.436777c-1.131008,-5.493468 -21.327583,-17.772986 -19.065567,-22.943309c2.262016,-5.170323 24.88218,1.777299 29.729358,-1.131008c4.847178,-2.746734 10.179074,-25.690043 15.834115,-25.043753c5.655041,0.64629 6.139759,24.074317 10.340646,27.790487c4.200888,3.71617 27.628914,1.938871 28.921495,7.43234c1.131008,5.493468 -21.004438,13.087381 -23.266454,18.257704c-2.262016,5.170323 6.947622,26.821052 2.100444,29.567786l0,0.161573z"/>
    </svg>
  </div>
  <div v-else-if="shape === 'circle'" class="shape">
    <svg viewBox="0 0 100 100"> 
      <circle 
        :fill="colors[color].fill" 
        :stroke="colors[color].stroke" 
        cx="50" 
        cy="50" 
        r="40" 
        stroke-width="3"/>
    </svg>
  </div>
  <div v-else-if="shape === 'square'" class="shape">
    <svg viewBox="0 0 100 100"> 
      <rect 
        :fill="colors[color].fill" 
        :stroke="colors[color].stroke" 
        x="10"
        y="10"
        width="80" 
        height="80" 
        stroke-width="3"/>
    </svg>

  </div>
  <div v-else-if="shape === 'rectangle'" class="shape">
    <svg viewBox="0 0 100 100"> 
      <rect 
        :fill="colors[color].fill" 
        :stroke="colors[color].stroke" 
        x="10"
        y="30"
        width="80" 
        height="40" 
        stroke-width="3"/>
    </svg>
  </div>
  <div v-else-if="shape === 'diamond'" class="shape">
    <svg viewBox="0 0 100 100"> 
      <g transform="rotate(-45 50 50)">
        <rect 
          :fill="colors[color].fill" 
          :stroke="colors[color].stroke" 
          x="20"
          y="20"
          width="60" 
          height="60" 
          stroke-width="3"/>
      </g>
    </svg>
  </div>
  <div v-else-if="shape === 'triangle'" class="shape">
    <svg viewBox="0 0 100 100"> 
      <path 
        :fill="colors[color].fill" 
        :stroke="colors[color].stroke" 
        transform="matrix(0.8,0,0,0.8,47.766633,60)" 
        stroke-width="3"
        d="m50.401,29.207-50.149-0.000001-50.149,0,25.075-43.431,25.075-43.431,25.075,43.431z" />
    </svg>
  </div>
  <div v-else-if="shape === 'diamond'" class="shape">
    <div>diamond</div>
  </div>
  <div v-else class="shape">{{ shape }}*</div>
</template>



<script>

export default {
  name: 'Shape',
  props: {
    shape: { type: String, default: 'star' },
    color: { type: String, default: 'yellow' },
  },
  data: () => ({
    colors: {
      yellow: { fill: '#F0C808', stroke: '#C5A407' },
      red: { fill: '#D81313', stroke: '#B11010' },
      blue: { fill: '#0066DB', stroke: '#0054B4' },
      purple: { fill: '#820263', stroke: '#6B0252' },
      pink: { fill: '#FF7AC1', stroke: '#D1649E' },
      green: { fill: '#22B71D', stroke: '#1C9618' },
      orange: { fill: '#DD621A', stroke: '#B55116' },
      black: { fill: '#222222', stroke: '#000000' },
      gray: { fill: '#999999', stroke: '#777777' },
      white: { fill: '#eeeeee', stroke: '#cccccc' }
    }
  }),
};

</script>
