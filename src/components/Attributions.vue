<template>
  <div class="attributions">
    <p>
    The flag SVG assets used on this site are copied from https://github.com/lipis/flag-icon-css/
    https://github.com/lipis/flag-icon-css/blob/master/LICENSE
    </p>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  props: {
    msg: { type: String, default: "asdfasdf" }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.welcome {
  font-size: 1.4em;
  margin-bottom: 0;
  color: lighten(#2c3e50, 20%);
  text-transform: uppercase;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
