import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  // Solo se ejecuta cuando el componente es renderizado la primera vez
  // se agrega la categoría  [category] para evitar el warning
  useEffect(() => {

    getGifs(category)
      .then(imgs => {
        // setTimeout(() => {
        setstate({
          data: imgs,
          loading: false
        });
        // }, 3000);
      })
  }, [category]);


  return state;

}