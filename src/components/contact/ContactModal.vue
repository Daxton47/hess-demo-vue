<template>
    <div class="modal fade" id="contactModal" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Contact Us</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12 col-lg-6 form-group mt-2">
                            <label for="txtFirstName">First Name:</label>
                            <input type="text" id="txtFirstName">
                        </div>
                        <div class="col-12 col-lg-6 form-group mt-2">
                            <label for="txtFirstName">Last Name:</label>
                            <input type="text" id="txtLastName">
                        </div>
                        <div class="col-12 col-lg-6 form-group mt-2">
                            <label for="txtFirstName">Email:</label>
                            <input type="email" id="txtEmail">
                        </div>
                        <div class="col-12 col-lg-6 form-group mt-2">
                            <label for="txtFirstName">Phone:</label>
                            <input type="tel" id="txtPhone">
                        </div>
                        <div class="col-12 form-group mt-4">
                            <label for="txtFirstName">Subject:</label>
                            <input type="text" id="txtSubject">
                        </div>
                        <div class="col-12 form-group mt-4">
                            <label for="txtMessage">Message:</label>
                            <textarea name="message" id="txtMessage" rows="6"></textarea>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-2 py-2">
                        <button class="send-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>

.send-button {
    margin-top: .8rem;
    padding: .4rem 4rem;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: var(--company-color);
    color: #fff;
    font-weight: bold;
    transition: background-color .4s ease;
}

    .send-button:hover {
        background-color: var(--company-color-dark);
    }

label {
    font-weight: bold;
    color: #4e4e4e;
    margin-bottom: .2rem;
}

input, textarea {
    width: 100%;
    border: none;
    border-bottom: 2px solid #dfe1e4;
    outline: none;
    resize: none;
}

textarea {
    background-color: #f5f6f6
}

    input:focus,
    textarea:focus {
        border-color: var(--company-color);
    }

.contact-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 40%;
    background-color: white;
    z-index: 1001;
    transform: translateX(-50%) translateY(-50%) scale(1);
    border-radius: 4px;
}

@media(max-width: 1300px) {
    .contact-modal {
        width: 60%;
    }
}
@media(max-width: 700px) {
    .contact-modal {
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) !important;
        width: 80% !important;
        height: 300px !important; 
        padding: 0 !important;
        overflow: auto;
    }

    .contact-modal-body {
        padding: .6rem !important;
    }
    .contact-modal-header {
        padding: .4rem !important;
    }
}

    .contact-modal-header {
        border-bottom: 3px dashed #dfe1e4;
        padding: 1rem;
    }

    .contact-modal-body {
        padding: 2rem;
    }

.close-modal {
    outline: none;
    border: none;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--company-color);
    background-color: #f5f6f6;
    transition: background-color .4s ease;
}

    .close-modal:hover {
        background-color: #e2e5e5;
    }

.backdrop {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1000;
    opacity: 1;
}

.fly-in-enter-active {
    transition: transform .8s ease,
                opacity .8s linear;
}
.fly-in-leave-active {
    transition: transform .6s ease-out,
                opacity .6s ease-out;
}

.fly-in-enter-from,
.fly-in-leave-to {
    opacity: 0;
    transform: translateY(-60%) translateX(-50%) scale(1.04);
}
.fly-in-enter-to,
.fly-in-leave-from {
    opacity: 1;
    transform: translateY(-50%) translateX(-50%) scale(1);
}

.fade-in-enter-active {
    transition: opacity 1s ease;
}
.fade-in-leave-active {
    transition: opacity .6s ease-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
    opacity: 0;
}
.fade-in-enter-to,
.fade-in-leave-from {
    opacity: 1;
}

</style>
