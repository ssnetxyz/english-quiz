<template>
  <div class="page">
    <div class="page-content">
      <h1>Bingo</h1>
      <div class="bingo-grid">
        <Shape 
          v-for="tile in bingoTiles" 
          :key="tile.id"
          :color="tile.color" 
          :shape="tile.shape"/>
      </div>
    </div>
    <div class="sidebar">
      <BingoSettings />
    </div>
  </div>
</template>
<script>



import Shape from '@/components/Shape.vue';
import BingoSettings from '@/components/BingoSettings.vue';
import shuffle from 'lodash.shuffle';

const colors = ['yellow', 'red', 'blue', 'purple', 'pink', 'green', 'orange', 'black', 'gray'/* , 'white' */];
const shapes = ['circle', 'square', 'triangle', 'diamond', 'star', 'rectangle'];
const [bingoWidth, bingoHeight] = [5, 5];
const bingoSize = bingoWidth * bingoHeight;
const colorShapeCombinations = colors.reduce((cs, clr) => {
  shapes.forEach(s => cs.push({ id: `${clr}-${s}`, color: clr, shape: s }))
  return cs;
}, []);
const bingoTiles = shuffle(colorShapeCombinations).splice(0,bingoSize);

export default {
  name: 'Tools',
  components: { Shape, BingoSettings },
  data: () => ({ bingoTiles }),
};

</script>


<style lang="stylus">
.bingo-grid {
  display: grid;
  grid-template-rows: repeat(5, minmax(120px, 1fr));
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 1px;
  background: #666;
  border: 1px solid #666;

  .shape {
    background: #fff;
    justify-content: center;
    align-items: center;
    padding: 10px;
    svg{
      vertical-align: bottom;
    }
  }
}
</style>