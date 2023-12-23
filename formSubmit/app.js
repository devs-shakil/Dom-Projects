document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.package-button');
    const hiddenInput = document.getElementById('selected-package');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const package = this.id
        hiddenInput.value = package;
        console.log(hiddenInput.value)
      });
    });
  });
