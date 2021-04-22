/* eslint-disable no-nested-ternary */
// @flow
// libs
import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'components/Button';

type Props = {
  title?: string,
  children: any,
  isOpen: boolean,
  handleClose: Function,
  customClass?: string,
  isShowHeader?: boolean,
  isShowFooter?: boolean,
  customClassButton?: string,
  textBtn?: string,
  isDisabledButton?: boolean,
};

export const ModalPopup = ({
  title = '',
  children,
  isOpen,
  handleClose,
  customClass,
  isShowHeader,
  isShowFooter,
  customClassButton = '',
  textBtn = 'OK',
  isDisabledButton,
}: Props) => (
  <Modal
    onHide={() => {
      return true;
    }}
    show={isOpen}
    className={customClass}
  >
    {isShowHeader && <h3 className="modal-title">{title}</h3>}
    <Modal.Body>
      <div className="modal-body__no-header">{children}</div>
    </Modal.Body>
    {isShowFooter && (
      <Modal.Footer>
        <Button type="button" customClass={customClassButton} onClick={handleClose} isDisabled={isDisabledButton}>
          {textBtn}
        </Button>
      </Modal.Footer>
    )}
  </Modal>
);

ModalPopup.defaultProps = {
  title: '',
  customClass: '',
  isShowHeader: false,
  isShowFooter: false,
  customClassButton: '',
  textBtn: 'OK',
  isDisabledButton: false,
};
export default memo<Props>(ModalPopup);
