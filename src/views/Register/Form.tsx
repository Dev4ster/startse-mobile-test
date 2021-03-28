import React, { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import { useNavigation } from '@react-navigation/core';
import { actions as productActions, IProduct } from '~/store/ducks/product';
import {
  actions as categoriesActions,
  CategoryState,
} from '~/store/ducks/category';

import { CreateProductSchema } from './validate';
import * as S from './styles';
import SnackBar from '~/utils/useSnackBar';
import Button from '~/components/Button/Button';
import { FormProps, FormValues } from '~/@types/RegisterRouteDTO';

const Form = ({ formData, update }: FormProps) => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<string[]>([]);
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

  const handlerSubmit = (values: FormValues) => {
    if (update) {
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
        text: 'Tag já existe',
        type: 'error',
      });
      return false;
    }
    if (!tag) {
      SnackBar({
        text: 'Informe um valor para a tag',
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

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  const handleRemoveTag = (tag: string) => {
    Alert.alert(
      'Atenção',
      `
    Tem certeza que deseja excluir a tag: ${tag} ?
    `,
      [
        {
          text: 'cancelar',
          style: 'cancel',
        },
        {
          text: 'remover',
          style: 'destructive',
          onPress: () => handleRemoveTagFromArray(tag),
        },
      ],
    );
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
    >
      {({ handleChange, handleSubmit, values, errors, handleReset }) => (
        <S.InputContainer>
          <S.InputRow>
            <S.InputLabel>Titulo</S.InputLabel>
            <S.Input
              placeholder="Nome do produto"
              onChangeText={handleChange('title')}
              value={values.title}
            />
            {errors.title && <S.ErrorLabel>{errors.title}</S.ErrorLabel>}
          </S.InputRow>
          <S.InputRow>
            <S.InputLabel>Categoria</S.InputLabel>
            <RNPickerSelect
              items={mapperRNPicker}
              value={values.category}
              style={{
                viewContainer: {
                  borderWidth: 1,
                  borderColor: '#EEE',
                  borderRadius: 4,
                  padding: 10,
                },
              }}
              placeholder={{
                label: 'Selecione a categoria',
              }}
              onValueChange={value => {
                if (value) {
                  handleChange('category')(value);
                } else {
                  handleChange('category')('');
                }
              }}
            />
            {errors.category && <S.ErrorLabel>{errors.category}</S.ErrorLabel>}
          </S.InputRow>
          <S.InputRow>
            <S.InputLabel>Valor</S.InputLabel>
            <S.Input
              placeholder="R$ 99,99"
              onChangeText={handleChange('price')}
              value={String(values.price)}
            />
            {errors.price && <S.ErrorLabel>{errors.price}</S.ErrorLabel>}
          </S.InputRow>
          <S.InputRow>
            <S.InputLabel>Tags</S.InputLabel>
            <S.Input
              placeholder="Escreva uma tag"
              onChangeText={handleChange('tag')}
              value={values.tag}
              returnKeyType="send"
              onSubmitEditing={() => {
                if (handleAddTag(values.tag)) {
                  handleChange('tag')('');
                }
              }}
            />
            <S.InputLabel
              style={{ fontSize: 10, marginTop: 10, marginBottom: 5 }}
            >
              Tags selecionadas:
            </S.InputLabel>
            <S.TagsRow>
              {tags.map(tag => (
                <S.Tag key={tag} onPress={() => handleRemoveTag(tag)}>
                  <S.TagText>{tag}</S.TagText>
                  <Icon name="close" size={10} style={{ marginLeft: 'auto' }} />
                </S.Tag>
              ))}
            </S.TagsRow>
          </S.InputRow>
          <S.ButtonsRow>
            <Button icon="chevron-left" onPress={handleGoBack}>
              Voltar
            </Button>
            <Button icon="clear" onPress={handleReset}>
              Resetar
            </Button>
            <Button icon="send" onPress={handleSubmit}>
              Enviar
            </Button>
          </S.ButtonsRow>
        </S.InputContainer>
      )}
    </Formik>
  );
};

export default Form;
