<template>
    <div class="modal fade" id="contactModal" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Contact Us</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form v-if="!hasSubmittedSuccess && !submissionFailed" @submit.prevent.stop="submitForm" name="contactForm">
                <input type="hidden" name="form-name" value="contactForm" />
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 col-lg-6 form-group mt-2">
                                <label for="txtCompanyName">Company Name:</label>
                                <input type="text" id="txtCompanyName" name="companyName" v-model="form.companyName">
                            </div>
                            <div class="col-12 col-lg-6 form-group mt-2">
                                <label for="txtContactName">Contact Name:</label>
                                <input type="text" id="txtContactName" name="contactName" v-model="form.contactName">
                            </div>
                            <div class="col-12 col-lg-6 form-group mt-2">
                                <label for="txtEmail">Email:</label>
                                <input type="email" id="txtEmail" name="email" v-model="form.email">
                            </div>
                            <div class="col-12 col-lg-6 form-group mt-2">
                                <label for="txtPhone">Phone:</label>
                                <input type="tel" id="txtPhone" name="phone" v-model="form.phone">
                            </div>
                            <div class="col-12 form-group mt-4">
                                <label for="txtSubject">Subject:</label>
                                <input type="text" id="txtSubject" name="subject" v-model="form.subject">
                            </div>
                            <div class="col-12 form-group mt-4">
                                <label for="txtDelivery">Delivery Date:</label>
                                <input type="date" id="txtDelivery" name="deliveryDate" :min="minDate" v-model="form.deliveryDate">
                            </div>
                            <div class="col-12 form-group mt-4">
                                <label for="txtMessage">Message:</label>
                                <textarea id="txtMessage" name="message" rows="6" v-model="form.message"></textarea>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-2 py-2">
                            <button type="submit" class="send-button">Send</button>
                        </div>
                    </div>
                </form>
                <div v-else-if="hasSubmittedSuccess && !submissionFailed" class="p-4">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-square-check fa-2x me-3 text-success"></i>
                        <h4 class="m-0">Successfully Submitted Request!</h4>
                    </div>
                    <h5 class="mt-4">Keep an eye out for a response from our staff!</h5>
                    <div class="d-flex justify-content-center mt-4">
                        <button class="btn btn-success px-5" data-bs-target="#contactForm" data-bs-toggle="modal">Done</button>
                    </div>
                </div>
                <div v-else class="p-4">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-circle-exclamation fa-2x me-3 text-danger"></i>
                        <h4 class="m-0">Uh Oh!</h4>
                    </div>
                    <h5 class="mt-4">Seems like something went wrong with your request! Please reach out to our staff and we will get right on it!</h5>
                    <div class="d-flex justify-content-center mt-4">
                        <a class="btn btn-danger px-5" href="mailto:daxton@novotx.com">Email Support</a>
                        <button class="btn btn-secondary px-5 ms-2" data-bs-target="#contactForm" data-bs-toggle="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from "axios"

export default defineComponent({
    setup() {
        const hasSubmittedSuccess = ref(false)
        const submissionFailed = ref(false)

        const today = new Date()
        const monthStr = `${today.getMonth() + 1 < 10 ? '0' : ''}${today.getMonth() + 1}`
        const minDate = ref(`${today.getFullYear()}-${monthStr}-${today.getDate()}`)

        const form = ref({})

        const encode = (data) => {
            return Object.keys(data)
                    .map(
                        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                    )
                    .join("&")
        }
        const validEmail = (email) => {
            return String(email)
                    .toLowerCase()
                    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        }

        const submitForm = ref(() => {
            let isValid = true
            if (!form.value.companyName) {
                isValid = false
                document.getElementById("txtCompanyName").parentElement.classList.add('invalid')
            }
            else document.getElementById("txtCompanyName").parentElement.classList.remove('invalid')

            if (!form.value.contactName) {
                isValid = false
                document.getElementById("txtContactName").parentElement.classList.add('invalid')
            }
            else document.getElementById("txtContactName").parentElement.classList.remove('invalid')

            if (!form.value.email ||
                !validEmail(form.value.email)) {
                isValid = false
                document.getElementById("txtEmail").parentElement.classList.add('invalid')
            }
            else document.getElementById("txtEmail").parentElement.classList.remove('invalid')
            
            if (!form.value.message) {
                isValid = false
                document.getElementById("txtMessage").parentElement.classList.add('invalid')
            }
            else document.getElementById("txtMessage").parentElement.classList.remove('invalid')

            if (!isValid) return

            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" },
                validateStatus: (status) => {
                    return status >= 200 && status < 300
                }
            }
            const formData = encode({
                "form-name": "contactForm",
                ...form.value
            })
            console.log(formData)
            
            axios.post(
                "/",
                formData,
                axiosConfig
            )
            .then(() => {
                hasSubmittedSuccess.value = true
            })
            .catch((error) => {
                console.error(error)
                submissionFailed.value = true
            })
        })
        return {
            minDate,
            submitForm,
            form,
            hasSubmittedSuccess,
            submissionFailed
        }

    }
})
</script>

<style>

    .modal-backdrop {
        z-index: 9999999 !important;
    }
    .modal {
        z-index: 99999999 !important;
    }

</style>

<style scoped>
a {
    color: white !important;
}
a:hover {
    color: white !important;
}

.invalid input {
    border-color: #ff5555 !important;
}
.invalid label {
    color: #ff5555 !important;
}

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
