document.getElementById("alertButton").addEventListener("click", function() {
    alert("Це повідомлення з JavaScript!");
});

document.getElementById("confirmButton").addEventListener("click", function() {
    let confirmed = confirm("Ви впевнені, що хочете продовжити?");
    if (confirmed) {
        alert("Ви підтвердили свою дію!");
    } else {
        alert("Дію скасовано.");
    }
});

document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("dynamicText").textContent = "Текст успішно змінено!";
});

// Генерація списку чисел від 1 до 10
const numberList = document.getElementById("numberList");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Число: " + i;
    numberList.appendChild(listItem);
}
