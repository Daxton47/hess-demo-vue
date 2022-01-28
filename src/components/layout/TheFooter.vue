<template>

    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-4">
                    <div class="d-flex align-items-start">
                        <div id="hessLogo"></div>
                        <div class="d-flex flex-column mt-2 ms-3">
                            <h4 class="m-0">H.E.S.S.</h4>
                            <span>The pioneers in lithium batteries.</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 contact-us mt-2">
                    <h4 class="fst-italic">// Contact Us</h4>
                    <div class="d-flex align-items-center mt-3">
                        <i class="fas fa-envelope"></i><a href="mailto:whess@hessprecisionlaser.com" class="ms-2">whess@hessprecisionlaser.com</a>
                    </div>
                    <div class="d-flex align-items-center mt-2">
                        <i class="fas fa-phone-alt"></i><a href="tel:(801)999-9999" class="ms-2">+1 (801) 999-9999</a>
                    </div>
                    <div class="d-flex align-items-center mt-2">
                        <i class="fas fa-map-marker-alt"></i><a class="ms-2" target="_blank" href="https://www.google.com/maps/@24.47739,-77.881521,9.25z">89 ABC Street</a>
                    </div>
                </div>
                <div class="col-12 col-xl-4 links mt-2">
                    <h4 class="fst-italic">// Links</h4>
                    <div class="mt-2">
                        <a href="#home" class="text-white">Home</a>
                    </div>
                    <div class="mt-2">
                        <a href="#home" class="text-white">Products</a>
                    </div>
                    <div class="mt-2">
                        <a href="#companySection" class="text-white">Our Team</a>
                    </div>
                    <div class="mt-2">
                        <a href="contactModal" data-bs-toggle="modal" class="text-white">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    #footer {
        color: #fff;
        background-color: var(--dark-background);
        padding: 8rem 0;
    }

    #hessLogo {
        width: 80px;
        height: 80px;
        background: url('../../assets/logos/HessLogo.webp');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .contact-us i {
        color: var(--company-color);
    }

    .contact-us a {
        color: #fff !important;
    }

    .contact-us a:hover {
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