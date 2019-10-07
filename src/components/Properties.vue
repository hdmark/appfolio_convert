<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(prop,idx) in propertyData" :key="idx">
      <!-- <v-icon color="primary">save_alt</v-icon> -->

      <template v-slot:header>
        <div>
          <strong>Property:</strong>
          {{prop.property}}
          -
          <strong>Period:</strong>
          {{prop.period}}
          -
          <strong>Quickbooks Account Number: &nbsp;</strong>
          <input
            @click.stop
            type="number"
            v-model.number="prop.acct_id"
            :placeholder="prop.acct_id || 'QB Acct Num'"
          />

          <v-btn
            small
            rounded
            @click.native.stop="downloadQBO(prop, prop.acct_id )"
            class="download-btn"
            color="success"
          >
            QBO &nbsp;&nbsp;&nbsp;
            <v-icon color="primary">save_alt</v-icon>
          </v-btn>
          <v-btn class="remove-btn" small @click.native.stop="remove(idx)" color="red">
            <v-icon color="primary">close</v-icon>
          </v-btn>

          <!--  -->
        </div>
      </template>
      <v-card>
        <property :property="prop"></property>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import property from "@/components/Property";
import generateOFX from "@/util/qbo";
export default {
  props: ["propertyData"],
  components: {
    property
  },
  data: () => {
    return {};
  },
  methods: {
    downloadQBO(property, acct_id) {
      var data, filename, link;
      console.log(acct_id);
      localStorage.setItem(property.property, acct_id);
      var ofx = generateOFX(property.txs, acct_id);
      // console.log(ofx);
      if (ofx == null) return;
      filename = `${property.property}.qbo` || "export.qbo";
      // console.log(filename);

      data = encodeURIComponent(ofx);
      // console.log(data);
      // console.log("data", data);

      link = document.createElement("a");
      link.setAttribute("href", "data:text/qbo;charset=utf-8," + data);
      link.setAttribute("download", filename);
      link.click();
    },
    remove(idx) {
      this.$store.dispatch("clearProperty", { idx });
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
.download-btn {
  float: right;
}

.remove-btn {
  float: right;
  // width: 1rem;
}
</style>

