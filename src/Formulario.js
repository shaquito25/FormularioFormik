import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./estilos/form.css"
import "./estilos/background.css"

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<div className='contenedor'>
			<Formik
				initialValues={{
					correo: "", // Datos iniciales de los inputs correo y red social
					social: ""
				}}
				validate={(valores) => {
					let errores = {};

					//Validacion Red Social
					if(!valores.social){
						errores.social = "Por favor ingrese su red social de preferencia"
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( { errors } ) => (
					<Form className="formulario">
					   <div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="tucorreo@gmail.com" 
							/>
					<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

			{/*Rango de valores edades*/}
						<div> 
							<label htmlFor='edad'>Edad</label>
							<Field name="edad" as="select">
								<option value="18-25">18-25</option>
								<option value="26-33">26-33</option>
								<option value="34-40">34-40</option>
								<option value="40+">40+</option>
							</Field>
						</div>


						<div> 
							<label htmlFor='sexo'>Selecciona tu Sexo</label>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>

							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>

							<label>
								<Field type="radio" name="sexo" value="indefinido"/> Indefinido
							</label>
						</div>
					
						
						<div>
							<label htmlFor="social">Red Social Favorita</label>
							<Field
								type="text" 
								id="social" 
								name="social" 
								placeholder="Facebook" 
							/>
							<ErrorMessage name="social" component={() => (<div className="error">{errors.social}</div>)} />
						</div>

					<div className='redes1'>
						<div>
							<label htmlFor='fb'>Tiempo Promedio al dia en Facebook</label>
							<Field name="fb" as="select">
								<option value="1-5">1-5</option>
								<option value="8-10">8-10</option>
								<option value="+10">+10</option>
							</Field>
						</div>
						<div>
							<label htmlFor='ws'>Tiempo Promedio al dia en Whatsapp</label>
							<Field name="ws" as="select">
								<option value="1-5">1-5</option>
								<option value="8-10">8-10</option>
								<option value="+10">+10</option>
							</Field>
						</div>
					</div>

				<div className='redes2'>
						<div>
							<label htmlFor='tw'>Tiempo Promedio al dia en Twitter</label>
							<Field name="tw" as="select">
								<option value="1-5">1-5</option>
								<option value="8-10">8-10</option>
								<option value="+10">+10</option>
							</Field>
						</div>

						<div>
							<label htmlFor='ig'>Tiempo Promedio al dia en Instagram</label>
							<Field name="ig" as="select">
								<option value="1-5">1-5</option>
								<option value="8-10">8-10</option>
								<option value="+10">+10</option>
							</Field>
						</div>
				</div>

						<div>
							<label htmlFor='tk'>Tiempo Promedio al dia en Tiktok</label>
							<Field name= "tk" as="select">
								<option value="1-5">1-5</option>
								<option value="8-10">8-10</option>
								<option value="+10">+10</option>
							</Field>
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Encuesta enviada con exito!</p>}
					</Form>
				)}
			</Formik>
		</div>
	);
}
 
export default Formulario