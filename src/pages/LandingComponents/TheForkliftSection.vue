<template>
    <section id="forklift-section">
        <div class="container">
            <div class="d-flex">
                <div class="content-container">
                    <div class="forklift-mobile-container">
                        <div class="forklift-circle">
                            <div class="forklift-image"></div>
                            <div class="hover-circle"></div>
                            <div class="hover-circle-lg"></div>
                        </div>
                    </div>
                    <h1>Forklifts</h1>
                    <hr>
                    <h5 class="my-4">With greater battery life, keep your forklift operations running efficiently. Cut the expenses of alternative power and maintenance costs from your fleet management.</h5>
                    <h5>With our Lithium-Ion batteries we promise:</h5>
                    <ul>
                        <li><i class="fas fa-check"></i> Longer Performance Time</li>
                        <li><i class="fas fa-check"></i> Greater Power Use Efficiency</li>
                        <li><i class="fas fa-check"></i> Decreased Maintenance Costs</li>
                    </ul>
                </div>
                <div class="forklift-container">
                    <div class="forklift-circle">
                        <div class="forklift-image"></div>
                        <div class="hover-circle"></div>
                        <div class="hover-circle-lg"></div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="brand-support">
            <div class="caterpillar-logo logo"></div>
            <div class="toyota-logo logo"></div>
            <div class="mitsubishi-logo logo"></div>
            <div class="logo clark-logo"></div>
            <div class="manitou-logo logo"></div>
            <div class="raymond-logo logo"></div>
            <div class="logo linde-logo"></div>
            <div class="jungheinrich-logo logo"></div>
            <div class="uni-carriers-logo logo"></div>
        </div>
    </section>
</template>

<style scoped>
    section {
        position: relative;
    }
    .section-title {
        margin-bottom: 2rem;
    }

    ul {
        list-style: none;
        margin-top: 1rem;
        padding-left: 1rem;
    }
    ul li {
        margin-bottom: .5rem;
        font-size: 16px !important;
    }

    ul i {
        color: var(--company-color);
        margin-right: 5px;
    }

    #forklift-section {
        padding: 5rem 1rem 10rem 1rem;
        position: relative;
        margin-bottom: 2rem;
    }

    .product-container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
    }

    .forklift-container {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5rem 0;
        position: relative;
    }
    .forklift-circle {
        padding: 3rem;
        background-color: #dcdfe2;
        border-radius: 50%;
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .forklift-mobile-container {
        display: none;
    }

    .hover-circle {
        position: absolute;
        width: 320px;
        height: 320px; 
        border: 5px dashed lightgray;
        border-radius: 160px;
        position: absolute;
        animation: rotating 10s linear infinite;
        transition: opacity .4s ease;
        transition-delay: 2s;
    }
    .hover-circle-lg {
        width: 400px;
        height: 400px;
        border-radius: 400px;
        border: 8px dashed lightgray;
        position: absolute;
        animation: rotating-counter 30s linear infinite;
        opacity: .3;
        transition: opacity .4s ease;
        transition-delay: 2s;
    }

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes rotating-counter {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }


    .forklift-image {
        background: url('../../assets/img/Forklift.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 100%;
        height: 100%;
    }

    .content-container {
        width: 40%;
    }

    .brand-support {
        background-color: #222335;
        width: 100%;
        padding: 1rem;
        height: 140px;
        position: absolute;
        left: 0;
        margin-top: 2rem;
        display: inline-block;
        overflow: scroll;
        white-space: nowrap;
        scrollbar-width: none;
        -ms-overflow-style: none;
        text-align: center;
    }
    .brand-support::-webkit-scrollbar {
        display: none;
    }
    /* .brand-support::after {
        content: " ";
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: white;
        right: 50px;
        top: -6px;
        transform: translateX(100%) rotate(15deg);
    } */

    .brand-support .logo {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
        display: inline-block;
        margin-right: 6rem;
    }

    .mitsubishi-logo {
        height: 80px;
        width: 80px;
        margin-bottom: 12px;
        background: url('../../assets/img/logos/Mitsubishi-logo.png');
    }
    .caterpillar-logo {
        height: 80px;
        width: 60px;
        margin-left: 2rem;
        margin-bottom: 12px;
        background: url('../../assets/img/logos/CatLogo.svg');
    }
    .uni-carriers-logo {
        height: 100px;
        width: 200px;
        margin-bottom: 2px;
        background: url('../../assets/img/logos/uni-carriers.svg');
    }
    .linde-logo {
        width: 150px;
        height: 100px;
        background: url('../../assets/img/logos/LindeGroupLogo.svg');
    }
    .toyota-logo {
        height: 70px;
        width: 70px;
        margin-bottom: 18px;
        background: url('../../assets/img/logos/ToyotaLogo.svg');
    }
    .manitou-logo {
        width: 200px;
        height: 100px;
        background: url('../../assets/img/logos/ManitouLogo.svg');
    }
    .clark-logo {
        width: 150px;
        height: 100px;
        background: url('../../assets/img/logos/clark-logo.png');
    }
    .raymond-logo {
        width: 190px;
        height: 100px;
        background: url('../../assets/img/logos/Raymond.svg');
    }
    .jungheinrich-logo {
        width: 200px;
        height: 100px;
        background: url('../../assets/img/logos/Jungheinrich-White.svg');
    }

    @media(max-width: 800px) {
        .product-container {
            flex-direction: column;
        }
    }

    .product-card {
        background-color: white;
        padding: 0;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        margin-bottom: 1rem;
        width: 400px;
    }

    @media(max-width: 700px) {
        .product-card {
            width: 100%;
        }
    }
        .product-card p {
            line-height: 1.2;
            margin-top: .5rem;
        }

        .product-card img {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            width: 400px;
            z-index: 1;
            transition: transform .5s ease-out;
        }

        .product-card .content {
            padding: 2rem 1.4rem;
        }

            .product-card .content h5 {
                margin: 0
            }

    .product-progress {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0px;
        background-color: var(--company-color);
        height: 4px;
        transition: width .5s ease-out,
                    background-color .5s ease-out;
    }

    .product-card:hover .product-progress {
        width: 100%;
        background-color: var(--company-color);
    }
    .product-card:hover img {
        transform: scale(1.1);
    }

    @media(max-width: 992px) {
        .content-container {
            width: 100%;
        }

        .forklift-container {
            display: none;
        }
        .forklift-mobile-container {
            display: flex;
            justify-content: center;
            margin-bottom: 4rem;
        }

        .forklift-circle {
            padding: .5rem;
            background-color: #dcdfe2;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .hover-circle {
            width: 80px;
            height: 80px;
            border-radius: 40px;
            border: 3px dashed lightgray;
            position: absolute;
            animation: rotating 10s linear infinite;
            transition: opacity .4s ease;
            transition-delay: 2s;
        }

        .hover-circle-lg {
            width: 120px;
            height: 120px;
            border-radius: 60px;
            border: 2px dashed lightgray;
            position: absolute;
            animation: rotating-counter 30s linear infinite;
            opacity: .3;
            transition: opacity .4s ease;
            transition-delay: 2s;
        }
    }

</style>