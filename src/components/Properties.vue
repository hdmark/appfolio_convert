<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(prop,idx) in propertyData" :key="idx">
      <!-- <v-icon color="primary">save_alt</v-icon> -->

      <template v-slot:header>
        <div>
          Property: {{prop.property}} -
          Period: {{prop.period}}
          <input
            @click.stop
            type="number"
            v-model.number="prop.acct_id"
            placeholder="acct_id"
          />
          <v-btn
            small
            @click.native.stop="downloadQBO(prop, prop.acct_id )"
            class="download-btn"
            color="success"
          >
            Download QBO &nbsp;&nbsp;&nbsp;
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
    // convertArrayOfObjectsToCSV(args) {
    //   var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    //   data = args.data || null;
    //   if (data == null || !data.length) {
    //     return null;
    //   }

    //   columnDelimiter = args.columnDelimiter || ",";
    //   lineDelimiter = args.lineDelimiter || "\n";

    //   keys = Object.keys(data[0]);

    //   result = "";
    //   result += keys.join(columnDelimiter);
    //   result += lineDelimiter;

    //   data.forEach(function(item) {
    //     ctr = 0;
    //     keys.forEach(function(key) {
    //       if (ctr > 0) result += columnDelimiter;

    //       result += '"' + item[key] + '"';
    //       ctr++;
    //     });
    //     result += lineDelimiter;
    //   });

    //   return result;
    // },
    downloadQBO(property, acct_id) {
      var data, filename, link;
      console.log(acct_id);
      var ofx = generateOFX(property.txs, acct_id);
      console.log(ofx);
      if (ofx == null) return;
      filename = `${property.property}.qbo` || "export.qbo";
      // console.log(filename);

      data = encodeURI(ofx);
      // console.log("data", data);

      link = document.createElement("a");
      link.setAttribute("href", "data:text/qbo;charset=utf-8," + data);
      link.setAttribute("download", filename);
      link.click();
    },
    remove(idx) {
      this.$store.dispatch("clearProperty", { idx });
    }
    // downloadCSV(property) {
    //   var data, filename, link;
    //   var csv = this.convertArrayOfObjectsToCSV({
    //     data: property.txs
    //   });
    //   if (csv == null) return;

    //   filename = `${property.property}.csv` || "export.csv";

    //   if (!csv.match(/^data:text\/csv/i)) {
    //     csv = "data:text/csv;charset=utf-8," + csv;
    //   }
    //   data = encodeURI(csv);

    //   link = document.createElement("a");
    //   link.setAttribute("href", data);
    //   link.setAttribute("download", filename);
    //   link.click();
    // }
  }
};
</script>

<style lang="scss" scoped>
.download-btn {
  float: right;
}

.remove-btn {
  float: right;
}
</style>

