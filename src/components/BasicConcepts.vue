<template>
  <div class="container">
    <h1 class="display-4">Hello, World</h1>
    <p v-if="message.length > 0" class="lead">{{ message }}</p>
    <input v-model="message" type="text" class="form-control" />

    <div v-html="rawHTML"></div>

    <p>
      {{ num }}<sup>{{ 2 }}</sup> = {{ Math.pow(num, 2) }}
    </p>

    <div v-if="showDiv === 1">
      <h1 class="display-4">v-if</h1>
    </div>
    <div v-else-if="showDiv === 2">
      <h1 class="display-4">v-else-if</h1>
    </div>
    <div v-else>
      <h1 class="display-4">v-else</h1>
    </div>

    <div v-show="isShowing">
      <h1 class="display-4">v-show</h1>
    </div>

    <h2 class="display-4">Laptop Brands</h2>
    <ul>
      <li 
        v-for="(element, index) in laptops" 
        :key="index"
      >laptops[{{ index}}] = {{ element }}</li>
    </ul>

    <p class="lead">{{ ms }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laptops: [
        "MSI", "MacBook","Acer","HP","Lenovo","Asus"
      ],
      message: "The time is 11:35AM",
      rawHTML: `
            <p>This is a raw <code>text</code> stored in variable <code>rawHTML</code></p>
            `,
      num: 8,
      showDiv: 2,
      isShowing: false,
      ms: 0,
    };
  },

  beforeCreate() {
    console.log("Before Create...");
  },
  created() {
    console.log("Created....");

    window.setInterval(() => {
      this.ms += 1;
    }, 1000);
  },
  beforeMount() {
    console.log("Before Mount...");
  },
  mounted() {
    console.log("Mounted...");
  },
  beforeUpdate() {
    console.log("Before Updated....");
  },
  updated() {
    console.log("Updated....");
  },
  beforeDestroy() {
    console.log("Before destroy...");
  },
  destroyed() {
    console.log("Destroyed....");
  },
};
</script>