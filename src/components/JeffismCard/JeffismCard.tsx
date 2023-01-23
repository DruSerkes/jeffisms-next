import { Jeffism } from "@/types/types";
import styles from '@/styles/Home.module.css'
import Link from "next/link";

interface Props {
  jeffism: Jeffism
}

export const JeffismCard: React.FC<Props> = ({ jeffism }) => {
  const href = `/${jeffism.id}`;
  return (
    <Link href={href} className={styles.card}>
      <h2>"{jeffism.saying}"</h2>
      <p> - {jeffism.source}</p>
      <span><b>Definition:</b> {jeffism.definition}</span>
      {jeffism.definition2 && <span><b>Alt Definition:</b> {jeffism.definition2}</span>}
    </Link>
  )
};