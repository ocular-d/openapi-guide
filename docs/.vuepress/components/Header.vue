<template>
  <div>
    <h1>{{$page.frontmatter.title}}</h1>
    <div
      style="width: 4rem; height: .4rem; margin: .1rem 0rem 1rem .3rem; background-color: #5469d4;"
    ></div>
    <div class="readingtime">
    &#x1F4A1; {{ $page.readingTime.text }}
    </div>
    <p>{{$page.frontmatter.description}}</p>
    <!-- <br /> -->
    <!-- &#x1F4A1; {{ $page.readingTime.text }} -->

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.readingtime {
font-size: 11px;
color: #6c707f;
font-weight: 250;

}
</style>