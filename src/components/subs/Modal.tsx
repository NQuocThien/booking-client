"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface Iprops {
  textButtonSave?: string;
  children: React.ReactElement;
  closeButton?: boolean;
  openRequest: boolean;
  handleSave: () => void;
  handleClose: () => void;
  headerText: string;
  fullscreen?: string | true | undefined;
}
function ModalCpn({
  children,
  closeButton = true,
  openRequest,
  handleSave,
  headerText,
  handleClose,
  textButtonSave = "Lưu thay đổi",
  fullscreen = undefined,
}: Iprops) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(openRequest);
  }, [openRequest]);
  return (
    <>
      <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
        <Modal.Header closeButton={closeButton}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {closeButton && (
            <Button variant="secondary" onClick={handleClose}>
              Đống
            </Button>
          )}
          <Button variant="primary" onClick={handleSave}>
            {textButtonSave}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCpn;
