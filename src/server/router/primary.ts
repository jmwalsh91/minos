import { createRouter } from "./context";
import { z } from "zod";

export const primaryRouter = createRouter()
.query("sayThing", {
  async resolve({ ctx }) {
    const  response = await fetch("https://www.poemist.com/api/v1/randompoems").then((res) => res.json());
    console.log(response)
    return response[0]?.content
  }
})