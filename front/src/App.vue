<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="page-wrapper">
    <header>
      <div class="container">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
          <HelloWorld msg="Sasha" link="Sasha link" />
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contacts">contacts</RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <RouterView />
  </div>

</template>

