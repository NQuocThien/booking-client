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
  onlyClose?: boolean;
  buttonSize?: "sm" | undefined;
  centered?: boolean;
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
  onlyClose = false,
  buttonSize = undefined,
  centered = false,
}: Iprops) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(openRequest);
  }, [openRequest]);
  return (
    <>
      <Modal
        centered={centered}
        show={show}
        onHide={handleClose}
        fullscreen={fullscreen}>
        <Modal.Header closeButton={closeButton}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {closeButton && (
            <Button size={buttonSize} variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          )}
          {!onlyClose && (
            <Button variant="primary" onClick={handleSave}>
              {textButtonSave}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCpn;
