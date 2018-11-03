<template>

  <Container 
    ref="cont"
    :animation-duration="300"
    :non-drag-area-selector="'.left-right-dummy'"
    drag-class="tilt"
    drop-class="tilt-drop"
    lock-axis="x"
    class="box is-left-right"
    orientation="horizontal"
    @drop="handleDrop">

    <Draggable v-for="item in items" :key="item.id">
      <div :class="item.class">{{ item.t }}</div>
    </Draggable>
  </Container>
</template>

<script>
import Container from 'vue-smooth-dnd/src/Container';
import Draggable from 'vue-smooth-dnd/src/Draggable';
// import SmoothDnD from "smooth-dnd";
import { applyDrag } from './utils/helpers';

/**
 * The "dummies" in this context are the empty spaces
 * to where the answer can be moved. It gives us some easy animations
 * from vue-smooth-dnd without any extra work. (The alternative would be to make 3x containers)
 */

export default {
  name: 'Question',
  components: { Draggable, Container },
  props: {
    q: {
      type: Object,
      default: () => ({ items: [] })
    }
  },
  data: () => ({
    items: [],
    cancel: '.left-right-dummy'
  }),
  mounted() {
    let optionIndex = 0;
    for (let item of this.q.items) {
      this.items.push({
        id: `option-${optionIndex++}`,
        t: item,
        class: 'left-right-item'
      });
    }

    // Two dummies first and last
    this.items.unshift({
      id: 'dummy-1',
      isDummy: true,
      class: 'left-right-dummy'
    });
    this.items.push({
      id: 'dummy-2',
      isDummy: true,
      class: 'left-right-dummy'
    });
  },
  methods: {
    handleDrop(drop) {
      this.items = applyDrag(this.items, drop);
      const first = this.items[0].isDummy ? '' : this.items[0].t;
      const last = this.items[3].isDummy ? '' : this.items[3].t;
      const answer = [first, last];
      this.$emit('answer-update', answer);
    }
  }
};
</script>

<style lang="stylus">
.left-right-item {
  box-shadow: 1px 1px 1px #999;
  background: #fff;
  text-align: center;
  cursor: grab;
  min-height: 60px;
  line-height: 60px;
  margin-right: 5px;
}

.tilt {
  transition: transform 0.3s;
  transform: rotateZ(5deg);
  background: #fffff8;
}

.tilt-drop {
  transition: transform 0.3s;
  transform: rotateZ(0deg);
}

.left-right-dummy {
  background-color: #eee;
  min-height: 60px;
  line-height: 60px;
}

.box.is-left-right {
  margin: 20px;
  display: flex;
  flex-direction: row;

  > div {
    flex: 1;
  }
}
</style>
