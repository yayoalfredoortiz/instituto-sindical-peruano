const InstructorSettingPassword = () => {
   return (
      <div className="instructor__profile-form-wrap">
         <form onSubmit={(e) => e.preventDefault()} className="instructor__profile-form">
            <div className="form-grp">
               <label htmlFor="currentpassword">Contraseña actual</label>
               <input id="currentpassword" type="password" placeholder="Contraseña actual" />
            </div>
            <div className="form-grp">
               <label htmlFor="newpassword">Nueva contraseña</label>
               <input id="newpassword" type="password" placeholder="Nueva contraseña" />
            </div>
            <div className="form-grp">
               <label htmlFor="repassword">Repetir nueva contraseña</label>
               <input id="repassword" type="password" placeholder="Repetir nueva contraseña" />
            </div>
            <div className="submit-btn mt-25">
               <button type="submit" className="btn">Actualizar contraseña</button>
            </div>
         </form>
      </div>
   )
}

export default InstructorSettingPassword;
