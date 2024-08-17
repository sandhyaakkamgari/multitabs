let planToSucceedButtonElement = document.getElementById("planToSucceedTab");
let UnlearningButtonElement = document.getElementById("UnlearningTab");
let WaysofUnLearningButtonElement = document.getElementById("WaysofUnLearningTab");

let planToSucceedTabElement = document.getElementById("planToSucceedTab");
let UnlearningTabElement = document.getElementById("UnlearningTab");
let WaysofUnLearningTabElement = document.getElementById("WaysofUnLearningTab");


UnlearningTabElement.classList.add("d-none");
WaysofUnLearningTabElement.classList.add("d-none");

function planToSucceedButton() {
    planToSucceedTabElement.classList.remove("d-none");
    UnlearningTabElement.classList.add("d-none");
    WaysofUnLearningTabElement.classList.add("d-none");

    planToSucceedButtonElement.classList.add("selected-button");
    UnlearningTabElement.classList.remove("selected-button");
    WaysofUnLearningTabElement.classList.remove("selected-button");



}
planToSucceedButton();

function UnlearningButton() {
    planToSucceedTabElement.classList.add("d-none");
    UnlearningTabElement.classList.remove("d-none");
    WaysofUnLearningTabElement.classList.add("d-none");

    planToSucceedButtonElement.classList.remove("selected-button");
    UnlearningTabElement.classList.add("selected-button");
    WaysofUnLearningTabElement.classList.remove("selected-button");


}
UnlearningButton();

function WaysofUnLearningButton() {
    planToSucceedTabElement.classList.add("d-none");
    UnlearningTabElement.classList.add("d-none");
    WaysofUnLearningTabElement.classList.remove("d-none");

    planToSucceedButtonElement.classList.remove("selected-button");
    UnlearningTabElement.classList.remove("selected-button");
    WaysofUnLearningTabElement.classList.add("selected-button");

}
WaysofUnLearningButton();