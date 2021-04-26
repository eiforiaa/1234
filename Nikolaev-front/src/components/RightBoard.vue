<template>
  <div class="right-board">
    <div v-if="!isPlaceEmpty">
      <div>Id: {{ place.id }}</div>
      <div>Название: {{ place.name }}</div>
      <div>Адрес: {{ place.address }}</div>
      <div>Дата: {{ place.createdAt }}</div>
      <div>Время: {{ place.eventDate }}</div>
    </div>
    <div v-else class="right-board__no-selected">
      Выберите место отдыха
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    place: {
      type: Object,
      required: true
    }
  },
  computed: {
    isPlaceEmpty() {
      return Object.keys(this.place).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
