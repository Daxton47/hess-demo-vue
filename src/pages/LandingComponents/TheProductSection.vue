<template>
    <section id="product-section">
        <div class="container">
            <div class="text-center">
                <h3 class="section-title">Products</h3>
            </div>
            <div class="product-container">
                <div class="product-card shadow">
                    <div class="position-relative" style="overflow: hidden; border-top-right-radius: 4px; border-top-left-radius: 4px">
                        <img src="@/assets/img/forklift.jpg" alt="">
                    </div>
                    <div class="content">
                        <h5>Forklifts</h5>
                        <p>We boast the best in the industry forklifts: zero maintenace, plug-and-go units. Includes real-time data tracking of battery health.</p>
                        <router-link to="/">Learn More</router-link>
                    </div>
                    <div class="product-progress"></div>
                </div>
                <div class="product-card shadow">
                    <div class="position-relative" style="overflow: hidden; border-top-right-radius: 4px; border-top-left-radius: 4px">
                        <img src="@/assets/img/baggage-tug.jpg" alt="">
                    </div>
                    <div class="content">
                        <h5>Tug Carts</h5>
                        <p>Fast Opportunity Charging
                            High Cycle Life (4,000+ Cycles)
                            Longer Run Times With Increased Power
                            Drop In Units (Plug & Play)
                        </p>
                        <router-link to="/">Learn More</router-link>
                    </div>
                    <div class="product-progress"></div>
                </div>
                <div class="product-card shadow">
                    <div class="position-relative" style="overflow: hidden; border-top-right-radius: 4px; border-top-left-radius: 4px">
                        <img src="@/assets/img/generators.jpg" alt="">
                    </div>
                    <div class="content">
                        <h5>Off-Grid Units</h5>
                        <p>Made Custom To You
                            Quick Delivery Times
                            5 Year, 4,000 Cycle Warranty
                            5 Year BMS Warranty
                        </p>
                        <router-link to="/">Learn More</router-link>
                    </div>
                    <div class="product-progress"></div>
                </div>
            </div>
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

    #product-section {
        padding: 10rem 1rem;
    }

    .product-container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
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
</style>