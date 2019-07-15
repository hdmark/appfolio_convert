<template>
  <drop class="drop" @drop="handleDrop">
    <v-alert v-model="loading" color="info">
      <v-icon>sync</v-icon>&nbsp; LOADING
    </v-alert>
    <properties v-if="propertyData.length > 0" :propertyData="propertyData"></properties>
    <div
      class="dragMessage"
      v-else
    >Drag and drop owners statements into this area or click Convert Files</div>
  </drop>
</template>

<script>
// @ is an alias to /src

import properties from "@/components/Properties";
import { parser } from "../util/parse";
import { Drop } from "vue-drag-drop";
export default {
  name: "home",
  components: {
    // vueDropzone: vue2Dropzone,
    properties,
    Drop
  },

  data: function() {
    return {
      loading: false
    };
  },
  computed: {
    propertyData() {
      this.loading = false;
      return this.$store.getters.properties;
    }
  },

  methods: {
    async handleDrop(data, event) {
      this.loading = true;

      event.preventDefault();
      const files = event.dataTransfer.files;
      this.$store.dispatch("analyzeStatements", [...files]);
    }
  }
};
</script>
<style lang="scss" >
.drop {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
.text-reader {
  width: 100px;
  height: 3rem;
  position: relative;
  overflow: hidden;
  display: inline-block;

  /* Fancy button style 😎 */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
.home {
  height: 100%;
  width: 100%;
}
.dragMessage {
  text-align: center;
}
</style>

