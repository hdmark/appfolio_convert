<template>
  <div>
    <v-card>
      <v-data-table :headers="headers" :items="property.txs" :pagination.sync="pagination">
        <template v-slot:items="props">
          <td>{{props.item.date}}</td>
          <td>{{props.item.payee}}</td>
          <td>{{props.item.type}}</td>
          <td>{{props.item.ref}}</td>
          <td>{{props.item.desc}}</td>
          <td>{{props.item.income}}</td>
          <td>{{props.item.expense}}</td>
          <td>{{props.item.balance}}</td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["property"],
  data: () => {
    return {
      pagination: {
        rowsPerPage: -1
      },
      headers: [
        { text: "Date", value: "date" },
        { text: "Payee", value: "payee" },
        { text: "Type", value: "type" },
        { text: "Ref", value: "ref" },
        { text: "Description", value: "desc" },
        { text: "Income", value: "income" },
        { text: "Expense", value: "expense" },
        { text: "Balance", value: "balance" }
      ]
    };
  },
  methods: {}
};
</script>

