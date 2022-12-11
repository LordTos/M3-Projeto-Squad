import './Footer.css'

function Footer1() {
  return (
    <div className='wrapper'>
      
     
      <footer className='footer'>
        <div className="container-footer">
          <div className="row-footer">
            <div className="footer-col">
              <h4>Empresa</h4>
              <ul>
                <li><a href="">Quem somos</a></li>
                <li><a href="">Nossos serviços</a></li>
                <li><a href="">Politica de privacidade</a></li>
                <li><a href="">Programa de afiliados</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Obter ajuda</h4>
              <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">transporte</a></li>
                <li><a href="">Devoluçoes</a></li>
                <li><a href="">status do pedido</a></li>
                <li><a href="">opçoes de pagamento</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Loja Online</h4>
              <ul>
                <li><a href="">Relogios</a></li>
                <li><a href="">saco</a></li>
                <li><a href="">calçado</a></li>
                <li><a href="">endereço</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Loja Online</h4>
              <div className="form-sub">
                <form action=""><input type="email" placeholder='Digite seu e-mail' required/>
                <button>Enviar</button>
                </form>
              </div>
              <div className="medias-sociais">
                <a href=""><i className=""></i></a>
                <a href=""><i className=""></i></a>
                <a href=""><i className=""></i></a>
                <a href=""><i className=""></i></a>
              </div>
            </div>
      
      
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer1