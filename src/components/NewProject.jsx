import { useRef } from "react";
import Input from "./Input.jsx";
import PageContainer from "./PageContainer.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onCancel, onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay..">
        <h2>Invalid Input</h2>
        <p>Ooops.. looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid input for every field.</p>
      </Modal>
      <PageContainer>
        <h2 className="text-2xl md:text-4xl text-teal font-bold">
          Adding New Project
        </h2>
        <div className="flex flex-col gap-4">
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input
            type="date"
            ref={date}
            label="Due Date"
            width="w-full sm:w-1/2 md:w-1/3"
          />
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li className="flex gap-2 ">
            <button
              className="py-1 px-6 rounded-lg text-xs md:text-sm font-medium bg-white text-navy hover:bg-white hover:text-teal"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="py-1 px-6 rounded-lg text-xs md:text-sm font-medium bg-navy text-beige hover:bg-teal hover:text-white"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
      </PageContainer>
    </>
  );
}
