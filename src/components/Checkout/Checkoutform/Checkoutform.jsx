import "./Checkoutform.css"

const Checkoutform = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
      <form onSubmit={handleSubmitForm} className="checkoutform">
          <div>
            <label>Nombre completo</label>
            <input type="text" value={dataForm.fullname} name='fullname' onChange={handleChangeInput} />
          </div>

          <div>
            <label>Email</label>
            <input type="email" value={dataForm.email} name='email' onChange={handleChangeInput} />
          </div>

          <div>
            <label>Confime el Email</label>
            <input type="email" value={dataForm.confirmEmail} name='confirmEmail' onChange={handleChangeInput} />
          </div>

          <div>
            <label>Número de teléfono</label>
            <input type="number" value={dataForm.phone} name='phone' onChange={handleChangeInput} />
          </div>
          
          <button type='submit' className="submit-btn">Realizar la comprar</button>
      </form>
  )
}

export default Checkoutform
