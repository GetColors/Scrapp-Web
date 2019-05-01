<template>
    <div v-if="error">
        <div class="notification is-danger">
        <button class="delete"></button>
            {{ error.message }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ErrorMessage',
    computed: {
        ...mapGetters(['error'])
    }
}
</script>