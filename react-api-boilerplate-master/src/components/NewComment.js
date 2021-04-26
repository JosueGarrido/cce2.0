import {Form, Input, Button, message, Rate, Row, Col, Card} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

const NewComment = ( { reputations, userId} ) => {

    console.log( 'props', reputations );
    const [ submitting, setSubmitting ] = useState( false );

    const handleSubmit = async( values ) => {
        console.log( 'values', values );
        setSubmitting( true );

        try {

            // setValue( '' );

            await API.post( `/users/${userId}/reputations`, {
                comment: values.comment,
                score: values.score,
                user_id_2: userId
            } );
            reputations.mutate(); // get updated data
            setSubmitting( false );
        } catch( error ) {
            console.log( 'error', error );
            setSubmitting( false );

        }
    };

    const Editor = ( { onSubmit, submitting } ) => {
        const [ form ] = Form.useForm();

        return (
            <Card hoverable
                  style={{borderRadius: 10}}>
                <Row>
                    <Col span={22}>
            <Form
                form={ form }
                name='form_comment'
                onFinish={ handleSubmit }>
                <Form.Item name='comment'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa el texto de tu comentario'
                               }
                           ] }>
                    <TextArea rows={ 2 } />
                </Form.Item>
                <Form.Item name='score'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa el texto de tu comentario'
                               }
                           ] }>
                    <Rate />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' loading={ submitting } type='primary'>
                        Enviar comentario
                    </Button>
                </Form.Item>
            </Form>
                    </Col>
                </Row>
            </Card>
        );
    };

    return (
        <>
            <Editor onSubmit={ handleSubmit } submitting={ submitting } />

        </>
    )
};

export default NewComment;

