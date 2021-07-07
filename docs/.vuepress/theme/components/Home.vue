<template>
  <!-- <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  > -->
  <div>
    <div class="hero">
        <div class="inner">
        <div id="hero_header">
          <div class="hero-left">
            <img class="hero-logo" v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'logo'">
          </div>
          <div class="hero-right">
            <h1>OpenAPI Guide<br/> Design - Style - Docs</h1>
            <p>
              <a class="button has-icon" href="/about">
                <svg aria-labelledby="simpleicons-play-icon" role="img" viewBox="0 0 100 125" fill="#FFFFFF"><title id="simpleicons-play-icon" lang="en">Play icon</title><path d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z"></path></svg>
                GET STARTED</a>
              <!-- <a class="button white" href="https://lando.dev" target="_blank">WHY LANDO?</a> -->
              <a class="button gray has-icon" href="https://github.com/ocular-d/openapi-guide" target="_blank">
                <svg aria-labelledby="simpleicons-github-icon" lang="" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon" lang="en">GitHub Dark icon</title><path fill="#ffffff" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                GITHUB</a>
            </p>
          </div>
        </div>
      </div>
    <!-- <header class="hero"> -->
      
      <!-- <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      > -->

      <!-- <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1> -->

      <!-- <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p> -->

      <!-- <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p> -->
    <!-- </header> -->

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div class="point" v-for="(feature, index) in data.features" :key="index">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  <!-- </main> -->
    </div>
    </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.main-home
  a.button,
    input.button
      padding: 0.50em 2em
      border-radius: 2em
      display: inline-block
      color: #fff
      background-color: lighten($landoPink, 8%)
      transition: all .15s ease
      box-sizing: border-box
      border: 1px solid lighten($landoPink, 8%)
      &.has-icon
        position: relative
        text-indent: 1.4em
        > svg
          position: absolute
          left: 0.4em
          top: 0.3em
          width: 2em
      &.white
        background-color: #fff
        color: $landoPink
      &.gray
        background-color: #3c4257
        color: $light
        border-color: #3c4257
      &.transparent
        background-color: transparent
        color: $landoPink
  header
    background-color: #fff
    height: 60px
    padding: 10px 60px
    position: absolute !important;
    z-index: 100
  header.navbar
    border: 0
    .logo
      display: none
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    min-height: 100vh
    .hero-left, .hero-right
      display: inline-block
      vertical-align: top
    .hero-left
      width: 25%
      text-align: left
    .hero-right
      width: 70%
      text-align: right
    .hero-logo
      width: 205px
      height: 205px
      margin-right: 60px
    h1, h2
      color: #2c3e50
      // font-family: "Poppins", "Helvetica Neue", Arial, sans-serif
      //font-family: "Poppins", "Helvetica Neue", Arial, sans-serif
      font-size: 3.2em
      margin: 0
      border: 0
      letter-spacing: -1px
    h2
      font-size: 2.4em
      margin: 0 0 10px
      display: none
      color $landoPink
    .button
      margin: 1em 0
      font-size: 1em
      font-weight: 500
      letter-spacing: .05em
      min-width: 8em
      text-align: center
      &:not(:last-child)
        margin-right: 1%
  #hero_header
    width: 900px
    margin: auto
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    //border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    .inner
      max-width: 900px
      margin: 0 auto
      text-align: center
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
