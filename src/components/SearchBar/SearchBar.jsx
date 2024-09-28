
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams, useLocation } from "react-router-dom";

import css from "./SearchBar.module.css"

export default function SearchBar() {

  const location = useLocation();
  
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = event.target.elements.text.value;
    if (res.trim()==='') {
      toast('Enter the correct value!');
      event.target.elements.text.value = '';
      return;
    }
    searchParams.set("search", res);
    setSearchParams(searchParams);
    //onSabmit(res);
    event.target.elements.text.value = '';
  };


  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name='text'
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
          //value={values}
          //onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </header>
  )
}

