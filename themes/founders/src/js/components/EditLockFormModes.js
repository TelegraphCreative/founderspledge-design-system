export default function() {
  window.addEventListener("load", function() {
    // Notes:
    // Form is in Lock Mode by defualt
    // Edit mode is considered 'active' state
    // JS will directly add classes to <form>
    // .-active on parent will control .toggle-text elements via css

    // Handle States for Section InView
    const Blocks = document.querySelectorAll(".js-form");

    // Update Form
    function switchModes(form, Block) {
      // Locked, switch to edit
      if (form.classList.contains("-locked")) {
        // switch Form
        form.classList.remove("-locked");
        Block.classList.add("-active");
      }
      // Editable, switch to locked
      else {
        // switch Form
        form.classList.add("-locked");
        Block.classList.remove("-active");
      }
    }

    // Intialize Js Forms
    if (Blocks.length) {
      Blocks.forEach(Block => {
        let edit_btn = Block.querySelectorAll(".js-form__edit-btn"),
          form = Block.querySelector("form");

        edit_btn.forEach(btn => {
          // Click to Switch
          btn.addEventListener("click", function(e) {
            e.preventDefault();
            switchModes(form, Block);
          });
        });
      });
    }
  });
}
