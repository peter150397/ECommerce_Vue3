<template>
  <div>
    <nav class="d-flex justify-content-center my-3">
      <ul class="pagination m-0">
        <!-- pre page -->

        <li class="page-item" :class="{ disabled: !pagination.has_pre }"
          @click.prevent="getData(pagination.current_page - 1)">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <!-- page -->

        <li class="page-item" v-for="page in pagination.total_pages" :key="page"
          :class="{ active: pagination.current_page === page }" @click.prevent="getData(page)">
          <a class="page-link" href="#">{{ page }}</a>
        </li>

        <!-- next page -->

        <li class="page-item" :class="{ disabled: !pagination.has_next }"
          @click.prevent="getData(pagination.current_page + 1)">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    getData(page) {
      this.$emit('getData', page);
    }
  }
};
</script>