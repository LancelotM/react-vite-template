import { Theme, ThemePanel, } from "@radix-ui/themes";
import './App.css'
import { RouterProvider } from "react-router";
import { router } from "@/routes";

function App() {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <RouterProvider
          router={router}
        />
      <ThemePanel/>
    </Theme>
  )
}

export default App
