<template>
    <div class="carousel relative">
        <button class="h-6 w-6 arrow left rounded-full" @click="prev()"></button>
        <div class="inner" ref="inner" :style="innerStyles">
            <router-link
            :to="image.url"
            v-for="(image,index) in carouselImages"
            :key="index"
            class="banner-card"
            ref="equipment_image"
            >
                <img class="banner-img" :src="getImageUrl(image.imageName)" :alt="image">
            </router-link>
        </div>
        <button class="h-6 w-6 arrow rounded-full" @click="next()"></button>
    </div>
</template>
<style scoped>
    .carousel{
        width: 100%;
        overflow: hidden;
    }
    .inner{
        white-space: nowrap;
        overflow: hidden;
        transition: transform 0.2s;
    }
    .banner-card{
        width: 100%;
        display: inline-flex;
    }
    .banner-img{
        width:100%;
        height: auto;
    }
    /* botones */
    button {
        position: absolute;
        top: 48%;
        right: 10%;
        z-index: 4;
    }
    .arrow {
        background-image: url("~@/assets/images/icons/arrow.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(3);
    }
    .left {
        transform: rotate(-180deg) scale(3);
        left: 10%;
    }
    @media screen and (min-width: 1441px) {
        .carousel{
            padding: 0 22%;
            width: 100%;
        }
        .left{
            left:25%;
        }
        button{
            right:25%;
        }
    }
</style>
<script>
export default {
    props: ['elements'],
    data() {
        return {
            innerStyles: {},
            step:'',
            carouselImages: this.elements,
        }
    },
    mounted() {
        this.setStep()
        setInterval(() => {
            this.next();
        }, 20000);
    },
    methods: {
        getImageUrl(imageName) {
            return `${this.$imageCDN}/${imageName}`;
        },
        setStep() {
            const innerWidth = this.$refs.inner.scrollWidth;
            const totalCards = this.carouselImages.length;
            this.step = `${innerWidth / totalCards}px`
        },
        next() {
            this.moveLeft();
            this.afterTransition(() => {
                const card = this.carouselImages.shift();
                this.carouselImages.push(card);
                this.resetTranslate();
            })
        },
        prev() {
            this.moveRight();
            this.afterTransition(() => {
                const card = this.carouselImages.pop();
                this.carouselImages.unshift(card);
                this.resetTranslate();
            })
        },
        afterTransition(callback) {
            const listener = () => {
                callback();
                this.$refs.inner.removeEventListener('transitionend',listener);
            }
            this.$refs.inner.addEventListener('transitionend',listener);
        },
        moveLeft() {
            this.innerStyles = {
                transform: `translateX(-${this.step})`
            }
        },
        moveRight() {
            this.innerStyles = {
                transform: `translateX(${this.step})`
            }
        },
        resetTranslate() {
            this.innerStyles = {
                transition: 'none',
                transform: `translateX(0)`,
            }
        },
    }
}
</script>