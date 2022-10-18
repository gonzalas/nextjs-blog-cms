import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import styles from "../styles/Notes.module.css";
import { setNoteDescription } from "../utils/crop-description";

const Notes = ({ data }) => {
  const dataSortedByRecentDate = data.sort((a, b) => b.date - a.date);
  return (
    <Wrapper>
      <ul className={styles.list}>
        {dataSortedByRecentDate.map((note) => {
          const picture = note.picture || "imgdefault.jpg";
          return (
            <Link key={note.id} href={`/notes/${note.id}`}>
              <li className={styles.listItem}>
                <Image src={picture} alt="" className={styles.img} />
                <div className={styles.text}>
                  <h2>{note.title}</h2>
                  <p>{setNoteDescription(note.content)}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}/api/notes`);
  const data = await response.json();

  return {
    props: { ...data },
  };
}

export default Notes;
