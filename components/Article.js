import styles from "../styles/CreateArticle.module.css";

const Article = () => {
  const createArticle = async (event) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      picture: event.target.picture.value,
      date: Date.now(),
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert("Nota creada");
    window.location.href = "/";
  };

  return (
    <div>
      <div>
        <h1>Acá se crean las notas</h1>
      </div>
      <div>
        <form onSubmit={createArticle} className={styles.form}>
          <label htmlFor="title">Título</label>
          <input name="title" />
          <label htmlFor="content">Contenido</label>
          <textarea name="content" rows="4" cols="50"></textarea>
          <label htmlFor="picture">Foto</label>
          <input type="file" name="picture" />
          <input type="submit" value="Crear" />
        </form>
      </div>
    </div>
  );
};

export default Article;
