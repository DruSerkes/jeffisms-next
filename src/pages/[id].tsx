import { useJeffismContext } from "@/context/jeffismContext";
import { useRouter } from "next/router";

/*
TODO:
1. Grab the image assets
2. Create a map of source: image to render
3. Render the appropriate image on the page
4. Style it
*/
export default function JeffismPage() {
  const router = useRouter();
  const { id } = router.query;
  const { jeffisms } = useJeffismContext();
  const jeffism = jeffisms[id as keyof typeof jeffisms];
  if (!jeffism) return "Loading...";

  return (
    <div>
      <h3>"{jeffism.saying}"</h3>
      <br />
      <p>{jeffism.definition}</p>
      <br />
      {jeffism.definition2 && <p>{jeffism.definition2}</p>}
      <br />
      <small>- {jeffism.source}</small>
    </div>
  )
};