import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Wrapper from "../../components/Wrapper";
import styles from "../../styles/Note.module.css";

const Note = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState({});
  const baseUrl = process.env.BASE_URL;

  useEffect(() => {
    const { id } = router.query;
    const getData = async () => {
      const response = await fetch(`api/notes/${id}`);
      const data = await response.json();
      setLoading(false);
      setNote(data);
    };

    getData();
  }, [router, setLoading, setNote]);

  if (loading)
    return (
      <Wrapper>
        <h2>Cargando... Espere por favor</h2>
      </Wrapper>
    );

  const picture = note.picture || "/imgdefault.jpg";

  return (
    <Wrapper>
      <div className={styles.note}>
        <Image src={picture} alt="" className={styles.noteImage} />
        <div className={styles.text}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Note;
