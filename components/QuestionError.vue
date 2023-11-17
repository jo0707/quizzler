<template>
    <div>
        <p>There was an error loading your questions.</p>
        <p>{{ data.error }}</p>
    </div>
</template>

<script setup lang="ts">
import type { QuestionWrapper } from '~/types/QuestionWrapper';

defineProps<{
    data: QuestionWrapper
}>()
</script>