export default function() {
  window.addEventListener("load", function() {
    const Blocks = document.querySelectorAll(".js-clone");

    // Intialize Js Forms
    if (Blocks.length) {
      Blocks.forEach(Block => {
        const Template_El = Block.querySelector(".js-clone__template"),
          Template_Parent = Template_El.parentElement,
          save_template = Template_Parent.innerHTML,
          Clone_Btn = Block.querySelector(".js-clone__clone-btn"),
          Append_To = Block.querySelector(".js-clone__append-to");

        Clone_Btn.addEventListener("click", function(e) {
          e.preventDefault();
          // Append_To.append(Template);
          Append_To.insertAdjacentHTML("afterbegin", save_template);

          // If form has EditLock Mode
          if (Template_El.classList.contains("js-form")) {
            const TopBlock = Block.querySelector(".js-clone__template"),
              edit_btn = TopBlock.querySelectorAll(".js-form__edit-btn"),
              form = TopBlock.querySelector("form");

            // Update Form
            function switchModes(form) {
              // Locked, switch to edit
              if (form.classList.contains("-locked")) {
                // switch Form
                form.classList.remove("-locked");
              }
              // Editable, switch to locked
              else {
                // switch Form
                form.classList.add("-locked");
              }
            }
            edit_btn.forEach(btn => {
              // Click to Switch
              btn.addEventListener("click", function(e) {
                e.preventDefault();
                switchModes(form);
              });
            });
          }
        });
      });
    }
  });
}
