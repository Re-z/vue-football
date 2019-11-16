<template>
  <div>
    <span class="player__rating star"></span>
    <span class="player__rating star"></span>
    <span class="player__rating star"></span>
    <span v-if="playerObj.rating >= 6" class="player__rating star"></span>
    <span v-if="playerObj.rating >= 8" class="player__rating star"></span>
  </div>
</template>

<script>
export default {
  props: ["playerObj"]
};
</script>
