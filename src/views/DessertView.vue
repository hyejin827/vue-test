<template>
  <div>
    <h1>디저트여</h1>
    <h1>{{ dessert }}</h1>
    <v-data-table
      :headers="headers"
      :items="rowData"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dessert: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
      ],
      rowData: "",
    };
  },
  created() {
    if (
      this.$route.params.name === null ||
      this.$route.params.name === undefined
    ) {
      this.dessert = "값이 없다!";
    } else {
      this.dessert = "값이 있다! => " + this.$route.params.name;
    }
  },
};
</script>
