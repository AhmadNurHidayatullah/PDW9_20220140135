function handleSubmission() {
    var nama = document.getElementById("employeeName").value;
    var umur = document.getElementById("employeeAge").value;
    var email = document.getElementById("employeeEmail").value; // Get email input value
    var program = document.getElementById("department").value;

    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="nama" style="width: 130px;">Nama : </label>
                <input type="text" value="${nama}" readonly />
            </div>
            <div class="form-group">
                <label for="umur" style="width: 130px;">Umur :</label>
                <input type="text" value="${umur}" readonly />
            </div>
            <div class="form-group">
                <label for="email" style="width: 130px;">Email :</label>
                <input type="text" value="${email}" readonly /> <!-- Display email value -->
            </div>
            <div class="form-group">
                <label for="program" style="width: 130px;">Program : </label>
                <input type="text" value="${program}" readonly />
            </div>
        </div>
    `;

    Swal.fire({
        title: "Konfirmasi Pengisian Form",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "Benar",
        cancelButtonText: "Kembali",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            popup: "swal-popup"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            var formulir = {
                name: nama,
                umur: umur,
                email: email, // Include email in the object
                program: program
            };
            console.log(formulir);
            Swal.fire({
                title: "Terima Kasih",
                text: "Terima kasih, kamu akan segera mendapat email",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Dibatalkan",
                text: "Dibatalkan :(",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                }
            });
        }
    });
}
