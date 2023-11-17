<script setup lang="ts">
const props = defineProps({
    error: Object
})

if (props.error?.statusCode === 404) {
    clearError({ redirect: "/" })
}
</script>