<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :places="placesList"
      @change-place="handleChangePlace"
    />
    <RightBoard slot="rightBoard" :place="activePlace" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activePlaceId: null,
      placesList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/places")
      .then(response => (this.placesList = response.data.places));
  },
  computed: {
    activePlace() {
      const fallback = {};
      if (!this.activePlaceId) {
        return fallback;
      }

      return (
        this.placesList.find(({ id }) => id === this.activePlaceId) || fallback
      );
    }
  },
  methods: {
    handleChangePlace({ id }) {
      this.activePlaceId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #05386b;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #5cdb95; /*#0b0c10; */
  --dark_80: #1f2833;
  --gray: #05386b;
  --ultramarine_100: #66fcf1;
  --ultramarine_80: #edf5e1;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
