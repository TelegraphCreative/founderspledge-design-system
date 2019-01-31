<template>
  <span class="icon |" :class="classes">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.1 23.1">
      <line stroke="currentColor" x1="0.8" y1="22.4" x2="22.4" y2="0.8" class="c"></line>
      <line stroke="currentColor" x1="22.4" y1="22.4" x2="0.8" y2="0.8" class="c"></line>
    </svg>
  </span>
</template>
<script>
export default {
  props: ["classes"]
};
</script>

