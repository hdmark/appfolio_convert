<template>
  <!-- <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    class="dropzone"
    :options="dropzoneOptions"
    @vdropzone-file-added="vfileAdded"
    :useCustomSlot="true"
    @vdropzone-success-multiple="vfileSuccessful"
    @vdropzone-removed-file="vfileRemoved"
  >
    <properties v-if="propertyData.length > 0" :propertyData="propertyData"></properties>
  </vue-dropzone>-->
  <drop v-on:click="$refs.file.click()" class="drop" @drop="handleDrop">
    <label class="text-reader">
      CLICK
      <input ref="file" multiple type="file" @change="loadTextFromFile" />
    </label>
    <v-alert v-model="loading" color="info" transition="fade-transition">
      <v-icon>sync</v-icon>&nbsp; LOADING
    </v-alert>
    <properties v-if="propertyData.length > 0" :propertyData="propertyData"></properties>
  </drop>
</template>

<script>
// @ is an alias to /src
// import UploadBox from "@/components/UploadBox.vue";
// import vue2Dropzone from "vue2-dropzone";
// import "vue2-dropzone/dist/vue2Dropzone.min.css";
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
      propertyData: [],
      files: [],
      loading: false,
      dropzoneOptions: {
        url: "/post",
        thumbnailWidth: 150,
        maxFilesize: 1,
        clickable: false,
        headers: { "My-Awesome-Header": "header value" },
        // maxFiles: 2,
        uploadMultiple: true,
        // addRemoveLinks: true,
        createImageThumbnails: false
      }
    };
  },

  watch: {
    // whenever question changes, this function will run
    files: async function() {
      console.log("processing");
      for (let file of this.files) {
        if (file.type == "application/pdf") {
          let property = await parser(file);
          this.propertyData.push(...property);
        }
      }
      this.loading = false;
      console.log("finished");
    }
  },
  methods: {
    async handleDrop(data, event) {
      this.loading = true;

      event.preventDefault();
      const files = event.dataTransfer.files;
      this.files = [];

      this.files.push(...files);
    },
    async loadTextFromFile(ev) {
      this.loading = true;

      const files = ev.target.files;
      this.files = [];

      this.files.push(...files);
    },
    removeAll() {
      this.$refs.myVueDropzone.removeAllFiles();
      this.propertyData = [];
    }
    // vfileAdded(file) {},
    // vActionHandler() {
    //   return;
    // },
    // async vfileSuccessful(files, response) {
    //   console.log("success", files);
    //   for (let file of files) {
    //     if (file.type == "application/pdf") {
    //       let property = await parser(file);
    //       this.propertyData.push(...property);
    //     }
    //   }
    //   this.$refs.myVueDropzone.removeAllFiles();
    // },
    // vfileRemoved(file, error, xhr) {}
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
.dropzone {
  height: 100%;
  width: 100%;
}
</style>

