import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    comment: '',
  })

  const { email, username, comment } = formState

  const onInputChange = ({ target }) => {
    const { value, name } = target
    setFormState({ ...formState, [name]: value })
  }
  const onHandleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="container-contact">
      <h1>Contacto</h1>

      <form action="" className="form-contact" onSubmit={onHandleSubmit}>
        <label htmlFor="username">Nombre</label>
        <input
          type="text"
          className="text"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <label htmlFor="username">Correo</label>
        <input
          type="email"
          className="text"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <label htmlFor="username">Comentario</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="tu comentario aqui"
          value={comment}
          onChange={onInputChange}></textarea>

        <button className="btn-contact" type="submit">
          Enviar
        </button>
      </form>
    </section>
  )
}
