<template>
    <footer class="footer">
        <div class="container">
            <p class="text-center">
                Made with 
                <img src="../assets/img/heart.svg" alt=""> 
                by  
                <a href="http://github.com/re-z" target="_blank">Re-z</a>
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@keyframes pulse {
    from {
        transform: scale(.9)
    } 
    50% {
        transform: scale(1)
    }
    to {
        transform: scale(1.1)
    }
}
    .footer {
        border-top: 1px solid #424242;
        img {
            margin: 0 3px;
            display: inline-block;
            width: 15px;
            height: 20px;
            animation: pulse infinite 1s linear

        }
        a {
            text-decoration: underline;
            color: white !important;
        }
    }
</style>