<template>

    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-4">
                    <div class="d-flex align-items-start">
                        <div id="hessLogo"></div>
                        <div class="d-flex flex-column mt-2 ms-3">
                            <h4 class="m-0">H.E.S.S.</h4>
                            <span>Our results are shocking.</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 contact-us mt-2">
                    <h4 class="fst-italic">// Contact Us</h4>
                    <div class="d-flex align-items-center mt-3">
                        <i class="fas fa-envelope"></i><a href="mailto:quotes@hessenergysystems.com" class="ms-2">quotes@hessenergysystems.com</a>
                    </div>
                    <div class="d-flex align-items-center mt-2">
                        <i class="fas fa-phone-alt"></i><a href="tel:+1(209)402-3044" class="ms-2">+1 (209) 402-3044</a>
                    </div>
                    <div class="d-flex align-items-center mt-2">
                        <i class="fas fa-map-marker-alt"></i><a class="ms-2" target="_blank" href="https://www.google.com/maps/place/511+Galaxy+Way,+Modesto,+CA+95356/@37.7078702,-121.0022279,18.25z/data=!4m5!3m4!1s0x809050c53479aa83:0x8985b493f76d156!8m2!3d37.7079839!4d-121.0008849">511 Galaxy Way<br>Modesto, Stanislaus County 95356<br>USA</a>
                    </div>
                </div>
                <div class="col-12 col-xl-4 links mt-2">
                    <h4 class="fst-italic">// Links</h4>
                    <div class="mt-2">
                        <a href="#home" class="text-white">Home</a>
                    </div>
                    <div class="mt-2">
                        <a href="#product-section" class="text-white">Products</a>
                    </div>
                    <div class="mt-2">
                        <a href="#battery-battle" class="text-white">Batteries</a>
                    </div>
                    <div class="mt-2">
                        <a href="#companySection" class="text-white">Our Team</a>
                    </div>
                    <div class="mt-2">
                        <a href="contactModal" data-bs-toggle="modal" class="text-white" data-bs-target="#contactModal">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    #footer {
        color: #222;
        background-color: #dcdfe2;
        padding: 8rem 0;
    }

    #hessLogo {
        width: 140px;
        height: 140px;
        background: url('../../assets/logos/hess-logo.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -40px;
    }

    .contact-us i,
    .links i {
        color: var(--company-color);
    }

    .contact-us a,
    .links a {
        color: #222 !important;
    }

    .contact-us a:hover,
    .links a:hover {
        color: var(--company-color) !important;
    }

    @media(max-width: 768px) {
        .contact-us {
            margin-top: 2rem !important;
        }
        .links {
            margin-top: 2rem !important;
        }
    }

</style>