<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import '@splidejs/splide/dist/css/splide.min.css'

const options = {
  type: 'loop',
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  arrows: false,
  pagination: false,
  gap: '1rem',

  grid: {
    rows: 2,
    cols: 6,
    gap: {
      row: '1rem',
      col: '1.5rem',
    },
  },

  breakpoints: {
    1024: {
      grid: { cols: 4 },
    },
    768: {
      grid: { cols: 3 },
    },
    480: {
      grid: { cols: 2 },
    },
  },
}

const logos = [
  { name: 'php', src: '/img/logos/03-php.jpg' },
  { name: 'laravel', src: '/img/logos/19-laravel.jpg' },
  { name: 'mySQL', src: '/img/logos/06-mySQL.jpg' },
  { name: 'NodeJS', src: '/img/logos/05-NodeJS.jpg' },
  { name: 'Vue', src: '/img/logos/16-Vue.js.jpg' },
  { name: 'nuxtjs', src: '/img/logos/17-nuxtjs.jpg' },
  { name: 'js', src: '/img/logos/09-js.jpg' },
  { name: 'ts', src: '/img/logos/10-ts.jpg' },
  { name: 'html', src: '/img/logos/11-html-css.jpg' },
  { name: 'sass', src: '/img/logos/12-sass.jpg' },
  { name: 'bootstrap', src: '/img/logos/13-bootstrap.jpg' },
  { name: 'npm', src: '/img/logos/20-npm.jpg' },
  { name: 'webpack', src: '/img/logos/22-webpack.jpg' },
  { name: 'nginx', src: '/img/logos/24-nginx.jpg' },
  { name: 'docker', src: '/img/logos/26-docker.jpg' },
  { name: 'Figma', src: '/img/logos/28-Figma.jpg' },
  { name: 'git', src: '/img/logos/23-git.jpg' },
  { name: 'open', src: '/img/logos/29-open-AI.jpg' },
]
</script>

<template>
  <Splide
    :options="options"
    :extensions="{ Grid }"
    class="tools-slider"
  >
    <SplideSlide
      v-for="logo in logos"
      :key="logo.name"
    >
      <div class="flex justify-center items-center h-20">
        <img
          :src="logo.src"
          :alt="logo.name"
        />
      </div>
    </SplideSlide>
  </Splide>
</template>
