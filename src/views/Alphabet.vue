<template>
  <div class="page">
    <div class="page-content">
      <h1>The Alphabet</h1>
      <div class="alphabet-grid">
        <div v-for="l in letters" :key="l.label" class="letter-card">
          <div class="label">
            {{ l.label }}
          </div>
          <img :src="l.src">
        </div>
      </div>
      <div class="sidebar">
      </div>
    </div>
  </div>
</template>
<script>



import ant from '@/alphabet/ant.jpg';

export default {
  name: 'Tools',

  data: () => ({
    letters: [
      { label: 'Aa', src: ant },
    ]
  }),
};

</script>


<style lang="stylus">
.alphabet-grid {
  .letter-card {
    border: 1px solid #666;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .label {
    font-size: 150px;
  }
}
</style>