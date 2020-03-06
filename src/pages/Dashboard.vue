<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <stats-card :data-background-color="kospi.updown === 'up' ? 'red' : 'blue'">
          <template slot="header">
            <md-icon>show_chart</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-weight: bold;">코스피</p>
            <h3 class="title" v-bind:class="kospi.updown">{{kospi.val}}</h3>
            <span v-bind:class="kospi.updown">{{kospi.index}}&nbsp;</span>
            <span v-bind:class="kospi.updown">
              <md-icon v-if="kospi.updown === 'down'" v-bind:class="kospi.updown">arrow_drop_down</md-icon>
              <md-icon v-if="kospi.updown === 'up'" v-bind:class="kospi.updown">arrow_drop_up</md-icon>
              {{kospi.rate}}
            </span>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>Last 24 Hours
            </div>
          </template>-->
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <!-- <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Email Subscription</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>updated 10 days ago
            </div>
          </template>
        </chart-card>-->
        <stats-card :data-background-color="kosdaq.updown === 'up' ? 'red' : 'blue'">
          <template slot="header">
            <md-icon>bar_chart</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-weight: bold;">코스닥</p>
            <h3 class="title" v-bind:class="kosdaq.updown">{{kosdaq.val}}</h3>
            <span v-bind:class="kosdaq.updown">{{kosdaq.index}}&nbsp;</span>
            <span v-bind:class="kosdaq.updown">
              <md-icon v-if="kosdaq.updown === 'down'" v-bind:class="kosdaq.updown">arrow_drop_down</md-icon>
              <md-icon v-if="kosdaq.updown === 'up'" v-bind:class="kosdaq.updown">arrow_drop_up</md-icon>
              {{kosdaq.rate}}
            </span>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
            </div>
          </template>-->
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Used Space</p>
            <h3 class="title">
              49/50
              <small>GB</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Revenue</p>
            <h3 class="title">$34,245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Used Space</p>
            <h3 class="title">
              49/50
              <small>GB</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Fixed Issues</p>
            <h3 class="title">75</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>Tracked from Github
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>Just Updated
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  // ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

export default {
  components: {
    StatsCard,
    // ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
      kospi: {},
      kosdaq: {},
      nasdaq: {}
    };
  },
  computed() {
    kospiUpdown: () => {
      return this.kospi.updown;
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/getTotalIndex").then(res => {
      for (let key in res.data) {
        if (res.data[key].length < 1) return;
        let splitData = res.data[key].rate.split(" ");
        res.data[key].index = splitData[0];
        res.data[key].rate = splitData[1];
        res.data[key].updown = "";
        // debugger;
        if (res.data[key].rate && res.data[key].rate !== "") {
          res.data[key].updown =
            res.data[key].rate.charAt(0) === "+" ? "up" : "down";
        }
      }
      console.log(res.data);
      this.kospi = res.data.kospi;
      this.kosdaq = res.data.kosdaq;
      this.nasdaq = res.data.nasdaq;
    });
  }
};
</script>
