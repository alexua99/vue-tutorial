
<script >
export default {
  data() {
    return {
      cart: [],
      img: [],
      error: null,
      headers: { 'Content-Type': 'application/json' }
    }
  },
  methods: {
    parseJSON: function (resp) {
      return (resp.json ? resp.json() : resp);
    },
    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    },
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:1337/api/render-crts", {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      console.log(response);

      const img = await fetch("http://localhost:1337/api/upload/files", {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      console.log(img);
      this.img = img

    } catch (error) {
      this.error = error
    }
  }
}

</script>

<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else class="container">
      <li class="cart" v-for="(item, index) in cart">
        <h1>
          {{ item.attributes.title }}
        </h1>
        <p>{{ index }}</p>
        <img :src="'http://localhost:1337' + img[index].url" alt="" width="150">
        <p>
          {{ item.attributes.text }}
        </p>
        <p><i>
            {{ item.attributes.createdAt }}
          </i></p>
      </li>
    </ul>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
}

.cart {
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  list-style: none;
}

i {
  font-size: 10px;
}
</style>

