import React from 'react';
import i18n from '~/i18n';

import Button from '~/components/Button/Button';
import * as S from './styles';

type EmptyStateProps = {
  title: string;
  message?: string;
  retry?: () => void;
  buttonLabel?: string;
  buttonIcon?: string;
};

const EmptyState = ({
  title,
  message,
  retry,
  buttonLabel,
  buttonIcon,
}: EmptyStateProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {!!message && <S.Message>{message}</S.Message>}
      {!!retry && (
        <S.ButtonContainer>
          <Button onPress={retry} icon={buttonIcon || 'refresh'}>
            {buttonLabel || i18n.t('default.emptyState.retry')}
          </Button>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default EmptyState;
