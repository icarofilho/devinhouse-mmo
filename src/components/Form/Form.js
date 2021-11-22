import { Post } from "../Post";
import { Formik } from "formik";
import React from "react";
import * as C from "./styles";
import { setStorage, getStorage } from "../../Services/getStorage";
import * as Yup from "yup";
import { useState } from "react";

export const Form = ({ id }) => {
    const [count, setCount] = useState(0);
    const gameId = id;
    const handleSubmit = (id, values) => {};

    return (
        <>
            <Formik
                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Name is required"),
                    email: Yup.string().email().required("Email is required"),
                    message: Yup.string().required("Message is required"),
                })}
                initialValues={{}}
                onSubmit={handleSubmit}
            >
                {(formProps) => {
                    const { setFieldValue, handleSubmit } = formProps;

                    return (
                        <>
                            <h3>Comentários</h3>
                            <C.Form>
                                <div className="header-form">
                                    <input
                                    id='inputName'
                                        type="text"
                                        placeholder="Nome"
                                        onChange={(event) => {
                                            setFieldValue(
                                                "name",
                                                event.target.value
                                            );
                                        }}
                                        name="name"
                                        
                                    />
                                    <input
                                    id='inputEmail'
                                        type="email"
                                        placeholder="E-mail"
                                        onChange={(event) => {
                                            setFieldValue(
                                                "email",
                                                event.target.value
                                            );
                                        }}
                                        name="email"
                                        
                                    />
                                </div>
                                <textarea
                                id='inputText'
                                    placeholder="Deixe sua mensagem"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "message",
                                            event.target.value
                                        );
                                    }}
                                    name="textarea"
                                    
                                ></textarea>
                                <div id="errorMsg"></div>
                                <button
                                    type="submit"
                                    onClick={() => {
                                        if (formProps.values.name === undefined || formProps.values.name === '') {
                                            document.getElementById("errorMsg").innerHTML ="Campo nome em branco";
                                        } else if (formProps.values.email === undefined || formProps.values.email === '') {
                                            document.getElementById("errorMsg").innerHTML ="Campo E-mail em branco";
                                        
                                        } else if (formProps.values.email.includes('@') === false || formProps.values.email.includes('.com') === false) {
                                            document.getElementById("errorMsg").innerHTML ="Campo E-mail inválido";
                                        
                                        } else if (formProps.values.message ===
                                            undefined
                                        ) {
                                            document.getElementById(
                                                "errorMsg"
                                            ).innerHTML =
                                                "Campo mensagem em branco";
                                        } else {
                                            const storage =
                                                getStorage(
                                                    gameId.toString()
                                                ) === null
                                                    ? []
                                                    : getStorage(
                                                          gameId.toString()
                                                      );
                                            storage.push({
                                                ...formProps.values,
                                                score: 0,
                                            });
                                            setStorage(gameId, storage);
                                            setCount(count + 1);
                                            document.getElementById('inputName').value = '';
                                            document.getElementById('inputEmail').value = '';
                                            document.getElementById('inputText').value = '';
                                            document.getElementById("errorMsg").innerHTML =''
                                        }
                                    }}
                                >
                                    Enviar
                                </button>
                            </C.Form>
                        </>
                    );
                }}
            </Formik>
            {getStorage(gameId.toString()) === null ? (
                <h3>Sem postagens</h3>
            ) : (
                <>
                    {getStorage(gameId.toString()).map((post, index) => {
                        return (
                            <Post
                                game={gameId.toString()}
                                key={index}
                                id={index}
                                name={post.name}
                                message={post.message}
                                score={post.score}
                            />
                        );
                    })}
                </>
            )}
        </>
    );
};
