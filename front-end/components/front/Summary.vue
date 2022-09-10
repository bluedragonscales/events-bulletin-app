<template>

    <div class="front-summary">
        <h3>About</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero in amet, dignissimos officiis minima eaque itaque nostrum? Expedita reprehenderit quisquam natus odio repudiandae ducimus autem similique in qui esse!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed voluptatum, reprehenderit laboriosam quos asperiores error, veniam suscipit omnis facilis, provident ut dolor aperiam quaerat sunt quod est iusto nesciunt?</p>
    </div>

</template>



<style scoped>

    .front-summary {
        width: 60%;
        padding: 3rem;
    }

    @media screen and (max-width: 850px) {
        .front-summary {
            width: 90%;
            padding: 10px;
            text-align: center;
            border-bottom: 2px solid rgb(39, 39, 39);
        }
    }

    h3  {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 850px) {
        h3 {
            margin-top: 3rem;
            margin-bottom: 1rem;
        }
    }

    p {
        font-size: 1.2rem;
        line-height: 3rem;
        color: rgb(39, 39, 39);
    }

</style>