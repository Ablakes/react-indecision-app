import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={props.modalOpen}
    onRequestClose={props.handleClearSelectedOption}
    //onRequestClose is triggered when the user tries to escape the modal(not by clicking "okay" button)
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    //Allows us ^ to set transition time for closing modal in milliseconds
    className="modal"
    //Allows us to use custom styling for the modal
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
