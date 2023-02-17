<template>
    <ul class="flex flex-wrap">
        <li v-for="(slavon, index) in slavons" :key="index">
            <router-link :to="slavon.sectionUrl" class="flex blue">{{slavon.sectionName}} 
                <p class="px-2 text-black" v-if="index < slavons.length-1"> > </p> 
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    props:['slavons']
}
</script>