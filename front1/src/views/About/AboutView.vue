<script setup>
import Button from "@/components/button/Button.vue"
import './index.css'
</script>

<script>
export default {
  data() {
    return {
      counter: 0,
      items: [
        {
          id: 1,
          name: "Sasha",
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
          but: 'Hellow Sasha'
        },
        {
          id: 2,
          name: "Olha",
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
          but: 'Hellow Olha'
        },
        {
          id: 3,
          name: "Alex",
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
          but: 'Hellow Alex'
        },
        {
          id: 4,
          name: "Sveta",
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
          but: 'Hellow Sveta'
        },

      ]
    }
  },
  methods: {
    increment() {
      if (this.counter < this.items.length) {
        this.counter++
      }
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--
      }
    }
  }
}
</script>


<template>
  <div class="about">
    <h1>This is an about page {{  counter  }}</h1>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <!-- 
      for(let i = 0; i < items.length; i++) {
        let users = items[i]

       }
     -->

    <div class="about__container" v-for="(users, index) in items">
     
    </div>



    <!-- <div class="about__container">
      <RederCart :id="" :name="" :img="" />
    </div> -->

  </div>
</template>

