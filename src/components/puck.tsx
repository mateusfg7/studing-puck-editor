"use client";

import { Puck, Render as PuckRender, Config, Data } from "@measured/puck";
import "@measured/puck/puck.css";

// Create Puck component config
export const config: Config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
    MainButton: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return (
          <button className="border border-blue-600 p-4">{children}</button>
        );
      },
    },
  },
};

// Describe the initial data
export const initialData: Partial<Data> = {
  root: {
    props: {},
  },
  content: [
    {
      type: "HeadingBlock",
      props: {
        id: "HeadingBlock-f3de2cfb-8fe4-44f0-8ed9-e0b855fbee14",
        children: "dasdasdadasd",
      },
    },
    {
      type: "MainButton",
      props: {
        id: "MainButton-7fe42e9c-151d-48a6-a46e-a491e96f197a",
        children: "dsdasdasdsada",
      },
    },
  ],
  zones: {},
};

// Save the data to your database
export const save = (data: Data) => {
  console.log(data);
};

// Render Puck editor
export function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}

// Render Puck view
export function Render() {
  return <PuckRender config={config} data={initialData} />;
}
