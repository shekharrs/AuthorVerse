function confirmDelete() {
    var confirmDelete = confirm("Are you sure you want to delete this profile?");
    if (confirmDelete) {
        alert("Profile deleted successfully.");
        // Redirect to delete profile endpoint or perform delete operation
    }
}

function cancelDelete() {
    alert("Deletion canceled.");
    // Redirect to another page or perform other action if needed
}
