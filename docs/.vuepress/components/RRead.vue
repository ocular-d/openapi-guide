<!-- Usage:
<RRead>

- [Heise](https://heise.de)

</RRead> -->


<template>
  <div class="custom-block r-read">
    <p class="custom-block-title">Recommended Reading</p>
    <slot />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
  color: #2a2f45;
}

.custom-block.r-read {
  padding: 0.1rem 1.5rem;
  margin: 1rem 0;
  margin-top: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
