import React, { useEffect, useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';
import { actions as productActions, IProduct } from '~/store/ducks/product';
import {
  actions as categoriesActions,
  CategoryState,
} from '~/store/ducks/category';
import { CreateProductSchema } from './validate';
import SnackBar from '~/utils/useSnackBar';
import Button from '~/components/Button/Button';
import { FormProps, FormValues } from '~/@types/RegisterRouteDTO';
import * as S from './styles';
import i18n from '~/i18n';

const Form = ({ formData, update }: FormProps) => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<string[]>([]);

  const theme = useTheme();
  const navigation = useNavigation();
  const categoriesState = useSelector<{
    category: CategoryState;
  }>(state => state.category) as CategoryState;

  const generateInitialValues = useMemo(() => {
    if (formData) {
      return {
        title: formData.title,
        category: formData.category,
        price: formData.price,
        tag: '',
      };
    }

    return {
      title: '',
      category: '',
      price: 0,
      tag: '',
    };
  }, [formData]);

  const mapperRNPicker = useMemo(() => {
    if (categoriesState.categories) {
      return categoriesState.categories.map(category => ({
        label: category.name,
        value: category.name,
      }));
    }

    return [];
  }, [categoriesState.categories]);

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  const handlerSubmit = (values: FormValues) => {
    if (update) {
      if (formData?.id) {
        dispatch(
          productActions.updateProductRequest({
            productId: formData.id,
            data: {
              ...values,
              price: Number(values.price),
              photoUrl: 'https://picsum.photos/300/300',
              tags,
            },

            onSuccess: handleGoBack,
          }),
        );
      }
    } else {
      dispatch(
        productActions.submitProductRequest({
          data: {
            ...values,
            price: Number(values.price),
            photoUrl: 'https://picsum.photos/300/300',
            tags,
          },
        }),
      );
    }
  };

  const handleAddTag = (tag: string) => {
    const tagExist = tags.find(tagStateItem => tagStateItem === tag);

    if (tagExist) {
      SnackBar({
        text: i18n.t('screen.register.errors.onTagExists'),
        type: 'error',
      });
      return false;
    }
    if (!tag) {
      SnackBar({
        text: i18n.t('screen.register.errors.onTagNull'),
        type: 'error',
      });
      return false;
    }
    setTags(prevStateTags => [...prevStateTags, tag]);
    return true;
  };

  const handleRemoveTagFromArray = (tag: string) => {
    setTags(prevStateTags =>
      prevStateTags.filter(tagState => tagState !== tag),
    );
  };

  const handleRemoveTag = (tag: string) => {
    Alert.alert(
      i18n.t('screen.register.alerts.onDeleteTag.title'),
      i18n.t('screen.register.alerts.onDeleteTag.message', {
        tag,
      }),
      [
        {
          text: i18n.t('screen.register.alerts.onDeleteTag.actions.cancel'),
          style: 'cancel',
        },
        {
          text: i18n.t('screen.register.alerts.onDeleteTag.actions.delete'),
          style: 'destructive',
          onPress: () => handleRemoveTagFromArray(tag),
        },
      ],
    );
  };

  const handleCleanForm = () => {
    setTags([]);
  };

  useEffect(() => {
    dispatch(categoriesActions.fetchCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (formData?.tags) {
      setTags(formData.tags);
    }
  }, [formData]);

  return (
    <Formik
      validationSchema={CreateProductSchema}
      validateOnChange={false}
      initialValues={generateInitialValues}
      onSubmit={handlerSubmit}
      onReset={handleCleanForm}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        handleReset,
        resetForm,
        setValues,
      }) => (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={90}
          behavior="padding"
        >
          <S.InputContainer>
            <S.InputRow>
              <S.InputLabel>
                {i18n.t('screen.register.inputs.title.label')}
              </S.InputLabel>
              <S.Input
                placeholder={i18n.t('screen.register.inputs.title.placeholder')}
                onChangeText={handleChange('title')}
                value={values.title}
              />
              {errors.title && <S.ErrorLabel>{errors.title}</S.ErrorLabel>}
            </S.InputRow>
            <S.InputRow>
              <S.InputLabel>
                {i18n.t('screen.register.inputs.category.label')}
              </S.InputLabel>
              <RNPickerSelect
                items={mapperRNPicker}
                value={values.category}
                style={{
                  viewContainer: {
                    borderWidth: 1,
                    borderColor: theme.colors.primary,
                    borderRadius: 4,
                    padding: 10,
                  },
                }}
                placeholder={{
                  label: i18n.t('screen.register.inputs.category.placeholder'),
                }}
                doneText={i18n.t('screen.register.inputs.category.doneText')}
                onValueChange={value => {
                  if (value) {
                    handleChange('category')(value);
                  } else {
                    handleChange('category')('');
                  }
                }}
              />
              {errors.category && (
                <S.ErrorLabel>{errors.category}</S.ErrorLabel>
              )}
            </S.InputRow>
            <S.InputRow>
              <S.InputLabel>
                {i18n.t('screen.register.inputs.price.label')}
              </S.InputLabel>
              <S.Input
                placeholder={i18n.t('screen.register.inputs.price.placeholder')}
                onChangeText={handleChange('price')}
                value={String(values.price)}
              />
              {errors.price && <S.ErrorLabel>{errors.price}</S.ErrorLabel>}
            </S.InputRow>
            <S.InputRow>
              <S.InputLabel>
                {i18n.t('screen.register.inputs.tags.label')}
              </S.InputLabel>
              <S.Input
                placeholder={i18n.t('screen.register.inputs.tags.placeholder')}
                onChangeText={handleChange('tag')}
                value={values.tag}
                returnKeyType="send"
                onSubmitEditing={() => {
                  if (handleAddTag(values.tag)) {
                    handleChange('tag')('');
                  }
                }}
              />
              {!!tags.length && (
                <S.InputLabel
                  style={{ fontSize: 10, marginTop: 10, marginBottom: 5 }}
                >
                  {i18n.t('screen.register.inputs.tags.selectedTags', {
                    count: tags.length,
                  })}
                </S.InputLabel>
              )}
              <S.TagsRow>
                {tags.map(tag => (
                  <S.Tag key={tag} onPress={() => handleRemoveTag(tag)}>
                    <S.TagText>{tag}</S.TagText>
                    <Icon
                      name="close"
                      size={10}
                      style={{ marginLeft: 'auto' }}
                    />
                  </S.Tag>
                ))}
              </S.TagsRow>
            </S.InputRow>
          </S.InputContainer>
          <S.ButtonsRow>
            <SafeAreaView style={{ flexDirection: 'row' }} edges={['bottom']}>
              <Button
                icon="chevron-left"
                onPress={handleGoBack}
                iconSize={20}
                labelStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                {i18n.t('screen.register.actions.goBack.buttonText')}
              </Button>
              <Button
                icon="clear"
                onPress={() => {
                  handleReset();
                  if (update) {
                    setValues({
                      category: '',
                      price: 0,
                      tag: '',
                      title: '',
                    });
                  }
                }}
                iconSize={20}
                labelStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                {i18n.t('screen.register.actions.reset.buttonText')}
              </Button>
              <Button
                icon="send"
                onPress={handleSubmit}
                iconSize={20}
                labelStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                {update
                  ? i18n.t('screen.register.actions.update.buttonText')
                  : i18n.t('screen.register.actions.send.buttonText')}
              </Button>
            </SafeAreaView>
          </S.ButtonsRow>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default Form;
