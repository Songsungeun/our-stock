<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="NO">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="종목명">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="매수범위">{{ item.buy }}</md-table-cell>
        <md-table-cell md-label="손절가">{{ item.cutOff }}</md-table-cell>
        <!-- <md-table-cell md-label="매수가">{{ item.cutOff }}</md-table-cell> -->
        <md-table-cell md-label="유효여부">{{ item.valid }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "SK하이닉스",
          buy: "79,000 ~ 81,000",
          cutOff: "78,000",
          valid: true
        },
        {
          id: 2,
          name: "현대차",
          buy: "80,000 ~ 81,000",
          cutOff: "78,000",
          valid: true
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>
