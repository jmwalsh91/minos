import { createRouter } from "./context";
import { z } from "zod";

interface ExampleProps {
  title: string;
  content: string;
  url: string;
  poet: string;
}
export const exampleRouter = createRouter()
.query("sayThing", {
  async resolve({ ctx }) {
    const  response: ExampleProps[] = await fetch("https://www.poemist.com/api/v1/randompoems").then((res) => res.json());
    console.log(response)
    return response[0]?.content
  }
})
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  
  });
