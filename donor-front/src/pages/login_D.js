import React from 'react';
import { Link } from 'react-router-dom';
import './css/login.css'
import { ErrorMessage, Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import history from '../components/history';

axios.get('http://localhost:3333/signin').then(function(data){
    console.log(data)
})

const login_D = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:3333/signin', values)
            .then(resp => { //console.log(resp)
                const { data } = resp
                if(data){
                    localStorage.setItem('token', data)
                    history.push('/meus_dados_d')
                 }
            })
    }
    const validations = Yup.object().shape({
        email: Yup.string().email('Digite um email válido')
        .required('O Email é Obrigatório'),
        senha: Yup.string().required('A Senha é Obrigatória'),
        
    })
    return (
        <>
        <center>
        <div className='login'>
        <h1>Login para Doador</h1>
        <Link to='/login_h' className='links'>
        <p className='trocalogin'> Não é Doador? Clique aqui pra fazer login ou cadastro como Hemocentro!</p>
        </Link>
        <br></br>
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form>
                <p className='center_D'>Email</p>
                <Field name='email'/>
                <ErrorMessage component='span' name='email'/>
                <br></br>
                
                <p>Senha</p>
                <Field type='password' name='senha'/>
                <ErrorMessage component='span' name='senha'/>
                <br></br>
                
                {/* <Link to='/login_d' className='links'> */}
                <button type='submit'>fazer login</button>
                {/* </Link> */}
            </Form>
        </Formik>
        <br></br>
        <Link to='/cadastro_d' className='links'>
        <p className='trocalogin'> Não tem um Login? Clique aqui para fazer o cadastro</p>
        </Link>
        </div>
        </center>
    </>
)
}

export default login_D;