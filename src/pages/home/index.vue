<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="cover">
        <div class="container">
          <div>Izquierda</div>
          <div>Derecha</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

.cover {
  background: #00ca75;
  display: flex;
  height: calc(70vh - 80px);
  min-height: 500px;
  overflow: hidden;
  z-index: 1;
}

.cover .container {
  max-width: 1140px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>