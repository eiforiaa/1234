<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(place, index) in places"
      :key="place.id"
      :id="place.id"
      :row-number="index + 1"
      :title="place.name"
      @change-place="$emit('change-place', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    places: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
