import React from "react";
import { useCart } from "../componentes/CartContext";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Produtos.css";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await axios.get(
        "https://ironshape.onrender.com/produtos"
      );
      const data = response.data;

      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const cart = useCart();

  const add = product => () => {
    cart.addToCart(product);
  };

  return (
    <>
      <div className="row">
        {produtos.map(produto => (
          <div
            className="card green"
            key={produto.id}
          >
            <img
              className="image"
              src={produto.imagem}
              alt={produto.name}
            />

            <h2>{produto.name}</h2>
            <h3>R${produto.valor}</h3>
            <button
              className="btnCarrinho"
              onClick={add(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Produtos;
