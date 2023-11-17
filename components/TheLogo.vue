<template>
    <div class="select-none explode text-primary-400">
        <span>Q</span>
        <span>u</span>
        <span>i</span>
        <span>z</span>
        <span>z</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
    </div>
</template>

<style scoped>
.explode>* {
    transition: all 400ms ease;
    display: inline-block;
}

.explode:hover>span:nth-child(1) {
    transform: translate(-2px, -2px) rotate(-11deg) scale(1.00);
}

.explode:hover>span:nth-child(2) {
    transform: translate(1px, 2px) rotate(-9deg) scale(1.00);
}

.explode:hover>span:nth-child(3) {
    transform: translate(-2px, -1px) rotate(-3deg) scale(1.00);
}

.explode:hover>span:nth-child(4) {
    transform: translate(2px, 3px) rotate(12deg) scale(1.00);
}

.explode:hover>span:nth-child(5) {
    transform: translate(-2px, -2px) rotate(7deg) scale(1.00);
}

.explode:hover>span:nth-child(6) {
    transform: translate(2px, -3px) rotate(-5deg) scale(1.00);
}

.explode:hover>span:nth-child(7) {
    transform: translate(2px, -3px) rotate(-12deg) scale(1.00);
}

.explode:hover>span:nth-child(8) {
    transform: translate(1px, -1px) rotate(0deg) scale(1.00);
}

.explode:hover>span:nth-child(9) {
    transform: translate(2px, 0px) rotate(5deg) scale(1.00);
    opacity: 1;
}
</style>