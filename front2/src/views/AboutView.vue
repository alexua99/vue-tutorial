<script>
export default {
  data() {
    return {
      res: '',
      out: '',
      num: 0,
      num2: 0,
      simbol: '',
      arr: [],
    }
  },
  methods: {
    result() {
      this.res = this.num + this.num2
    },
    multiplay() {
      switch (this.simbol) {
        case '-':
          this.out = this.num - this.num2
          this.arr.push(this.out)
          break
        case '+':
          this.out = this.num + this.num2
          this.arr.push(this.out)
          break
        case 'x':
          this.out = this.num * this.num2
          this.arr.push(this.out)
          break
      }

    },
    deleteArr() {
      this.arr.pop()
    }
  },

}
</script>


<template>
  <div class="about">
    <input type="number" v-model="num">
    <select v-model="simbol">
      <option value="+">Плюс
      </option>
      <option value="-">Мінус</option>
      <option value="x">Помножити</option>
    </select>
    <input type="number" v-model="num2">
    <button @click="multiplay">Result</button>
    <button @click="deleteArr"> Delete </button>
    <h1>{{  num  }} <span>{{  simbol  }}</span> <span>{{  num2  }}</span> = {{  out  }}</h1>
    <h2>Result: {{  arr  }}</h2>


    <button @click="result">Test</button>
    <h1>{{  num  }} <span>{{  simbol  }}</span> <span>{{  num2  }}</span> = {{  res  }}</h1>

  </div>
</template>


