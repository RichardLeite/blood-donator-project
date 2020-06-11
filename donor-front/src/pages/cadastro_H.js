import React from 'react';
// import { Link } from 'react-router-dom';
import './css/cadastro.css'
import { ErrorMessage, Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

axios.get('http://localhost:3333/clinicasHospitais').then(function(data){
    console.log(data)
})

const cadastroH = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:3333/clinicasHospitais', values)
            .then(resp => console.log(resp))
    }
    const validations = Yup.object().shape({
        cnpj: Yup.string()
        .min(18, 'CNPJ inválido, digite com pontos e traço')
        .max(18, 'CNPJ inválido, digite com pontos e traço')
        .required('O CNPJ é Obrigatório'),
        razao_social: Yup.string().required('A Razão Social é Obrigatório'),
        email: Yup.string().email('Digite um email válido').required('O Email é Obrigatório'),
        data_nascimento: Yup.string().required('A Data de Nascimento é Obrigatória'),
        senha: Yup.string().min(8, 'Digite no minimo 8 caracteres').required('A Senha é Obrigatória'),
        confirmaSenha: Yup.string()
        .oneOf([Yup.ref('senha'), null],'As senhas não coincidem')
        .required('Confirmar a Senha é Obrigatório')
        
    })
    return (
        <>
        <center>
        <div className='cadastro'>
        <h1>Cadastro</h1>
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form>
                <div className='form'>
                <p className='center_D'>CNPJ</p>
                <Field name='cnpj'/>
                <ErrorMessage component='span' name='cnpj'/>
                <br></br>

                <p className='center_D'>Razão Social</p>
                <Field name='razao_social'/>
                <ErrorMessage component='span' name='razao_social'/>
                <br></br>

                <p className='center_D'>Email</p>
                <Field name='email'/>
                <ErrorMessage component='span' name='email'/>
                <br></br>
                
                <p>Senha</p>
                <Field type='password' name='senha'/>
                <ErrorMessage component='span' name='senha'/>
                <br></br>
                
                <p>Repita a Senha</p>
                <Field type='password' name='confirmaSenha'/>
                <ErrorMessage component='span' name='confirmaSenha'/>
                <br></br>
                
                {/* <Link to='/login_d' className='links'> */}
                <button type='submit'>fazer cadastro</button>
                {/* </Link> */}
                </div>
            </Form>
        </Formik>
        </div>
        </center>
    </>
)
}

export default cadastroH;