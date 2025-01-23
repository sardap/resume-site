<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

function getContext() {
    return canvas.value?.getContext('2d') as CanvasRenderingContext2D
}


class Game {
    startOfTime: number = 0;
    lastTime: number = 0;
    
}

const game = new Game()

function startGameLoop(timestamp: number) {
  game.startOfTime = timestamp;
  game.lastTime = timestamp;
  step(timestamp);
}

function step(timestamp: number) {
    const deltaTime = timestamp - game.lastTime;
    game.lastTime = timestamp;

    const ctx = getContext()
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    requestAnimationFrame((t) => step(t));
}

onMounted(() => {
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) return

    requestAnimationFrame(startGameLoop);
})



</script>
<template>
    <div>
        <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
</template>
<style scoped></style>