<template>
    <div class="video-container" :class="{reversed : isReversed }" :style="{backgroundColor: backgroundColor}">
        <video autoplay loop muted class="video">
            <source :src="videoSrc" type="video/mp4" />
        </video>
        <div class="text" :style="{color: textColor}" >
            <div class="title">{{videoTitle}}</div>
            <div class="description">{{videoDescription}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        videoSrc: String,
        videoTitle: String,
        videoDescription: String,
        isReversed: Boolean,
        backgroundColor: String,
        textColor: String,

    }
}
</script>
<style scoped>
.video-container{
    margin-top: 5rem;

    height: 40rem;
    margin-left: 10vw;
    margin-right: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.reversed{
    flex-direction: row-reverse;
}
.video{
    height: 35rem;
    border-radius: 1.5rem;
}
.text{
    font-family: 'Exo 2', sans-serif;

    width: 40%;
    line-height: 1.5;
}
.title{
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;
}


    @media only screen and (max-width: 600px) {
        .video-container{
            flex-direction: column-reverse;
            height: auto;
            width: 100vw;
            margin-left: 0;

        }
        .text{
            width: 80%;
            margin-top: 3rem;
            margin-bottom: 3rem;
            font-size: 0.8rem;
        }
        .video{
            margin-bottom: 5rem;
        }
    }
</style>