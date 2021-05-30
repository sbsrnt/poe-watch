import React from 'react';

import { Message } from '#design-system/components';
import Modal from '#design-system/components/Modal/Modal';
import SkillsList from '#features/builds/components/EditorSections/Skills/SkillsModal/SkillsList/SkillsList';
import SocketsContainer from '#features/builds/components/EditorSections/Skills/SocketsContainer/SocketsContainer';
import { selectActiveVariantTitle } from '#features/builds/slices/buildSlice';
import { useSelector } from '#hooks/useStore';

import styles from './SkillsModal.module.scss';

type SkillsModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const SkillsModal = ({ isOpen, toggleModal }: SkillsModalProps) => {
  const activeVariant = useSelector(selectActiveVariantTitle);
  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal} title="Editing Skills">
      <Message type="info" size="small" className="mb-3">
        1. Click on the row of skills you want to edit. 2. Select gems to be populated.
      </Message>
      <Message type="warning" size="small" className="mb-3">
        Only one <b>active</b> gem can be selected per row.
      </Message>
      <div className={styles.body}>
        <div>
          <Message type="success" className="mb-5">
            Adding skills for <b>{activeVariant}</b> variant{' '}
          </Message>
          <SocketsContainer />
        </div>
        <SkillsList />
      </div>
    </Modal>
  );
};

export default SkillsModal;
