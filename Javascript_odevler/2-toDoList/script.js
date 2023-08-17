document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded olayı, HTML yüklendikten sonra tetiklenir.

    // HTML elementlerini seçme
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Local Storage'dan görevleri al veya boş bir dizi oluştur
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Varsayılan görevler
    const defaultTasks = [
        "3 Litre Su İç",
        "Ödevleri Yap",
        "En Az 3 Saat Kodlama Yap",
        "Yemek Yap",
        "50 Sayfa Kitap Oku"
    ];

    // Eğer hiç görev yoksa, varsayılan görevleri ekle
    if (tasks.length === 0) {
        tasks = defaultTasks;
    }

    // Görevleri listeleme fonksiyonu
    function listTasks() {
        // Önceki görev listesini temizle
        taskList.innerHTML = "";

        // Her görev için listeye bir öğe ekleyin
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";
            listItem.innerHTML = `
                <span>${task}</span>
                <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Sil</button>
            `;
            taskList.appendChild(listItem);
        });

        // Silme düğmelerine tıklama olayını ekleme
        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach(button => {
            button.addEventListener("click", deleteTask);
        });

        // Verileri Local Storage'a kaydetme
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Görev ekleme fonksiyonu
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            // Görevi diziye ekle
            tasks.push(taskText);

            // Görev inputunu temizle
            taskInput.value = "";

            // Görevleri listele
            listTasks();
        }
    }

    // Görev silme fonksiyonu
    function deleteTask(event) {
        const index = event.target.getAttribute("data-index");

        // Görevi diziden sil
        tasks.splice(index, 1);

        // Görevleri listele
        listTasks();
    }

    // Ekle düğmesine tıklama olayını ekleme
    addTaskBtn.addEventListener("click", addTask);

    // Sayfa yüklendiğinde görevleri listeleme
    listTasks();
});
