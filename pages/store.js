import Image from "next/image";
import Wrapper from "../components/Wrapper";
import styles from "../styles/Store.module.css";

const Store = () => (
  <Wrapper>
    <div className={styles.text}>
      <span>Estos son algunos de los productos de nuestra Tienda</span>
      <span>¡No dudes en contactarnos!</span>
    </div>
    <div className={styles.storeImages}>
      <Image src="store/store01.jpg" alt="" />
      <Image src="store/store02.jpg" alt="" />
      <Image src="store/store03.jpg" alt="" />
      <Image src="store/store04.jpg" alt="" />
      <Image src="store/store05.jpg" alt="" />
      <Image src="store/store06.jpg" alt="" />
      <Image src="store/store07.jpg" alt="" />
      <Image src="store/store08.jpg" alt="" />
      <Image src="store/store09.jpg" alt="" />
      <Image src="store/store10.jpg" alt="" />
      <Image src="store/store11.jpg" alt="" />
    </div>
  </Wrapper>
);

export default Store;
