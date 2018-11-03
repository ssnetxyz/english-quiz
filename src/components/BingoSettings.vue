<template>
  <div class="bingo-settings">
    <h3>Settings:</h3>
    

  </div>
</template>

<script>
import shape from '@/components/Shape.vue';
// import shuffle from 'lodash.shuffle';

// const colors = ['yellow', 'red', 'blue', 'purple', 'pink', 'green', 'orange', 'black', 'gray', 'white'];
// const shapes = ['circle', 'square', 'triangle', 'diamond', 'star'];
// const colorShapes = colors.reduce(function (cs, clr) {
//   shapes.forEach(s => {
//     cs.push({ color: clr, shape: s })
//   })
//   return cs;
// }, []);



export default {
  name: 'Tools',
  components: { shape },
  data: () => ({
    colorShapes: []
  }),
  methods: {
    randomize() {
      this.shapes = [];
    }
  }
};

</script>
