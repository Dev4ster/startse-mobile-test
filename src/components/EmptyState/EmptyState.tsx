import React from 'react';
import i18n from '~/i18n';
import Button from '../Button/Button';

import * as S from './styles';

type EmptyStateProps = {
  title: string;
  message?: string;
  retry?: () => void;
};
const EmptyState = ({ title, message, retry }: EmptyStateProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {!!message && <S.Message>{message}</S.Message>}
      {!!retry && (
        <S.ButtonContainer>
          <Button onPress={retry} icon="refresh">
            {i18n.t('default.emptyState.retry')}
          </Button>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default EmptyState;
