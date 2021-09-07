<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,

  mounted() {
    this.renderChart({
      // labels: ["Programmation web"],
      datasets: [
        {
          label: 'VueJs',
          backgroundColor: '#C191FF',
          data: [100, 0]
        },
        {
          label: 'Vuetify',
          backgroundColor: '#C191FF',
          data: [100, 0]
        }, {
          label: 'Symfony',
          backgroundColor: '#C191FF',
          data: [100, 0]
        }, {
          label: 'Api Platform',
          backgroundColor: '#C191FF',
          data: [100, 0]
        },
      ],
      options: {
        responsive: true,
      }});
  },
};
</script>
