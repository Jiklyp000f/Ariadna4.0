import { Header } from "./componets/Header/Header"
import { MainLayout } from "./componets/Layouts/MainLayout"
import { Title } from "./componets/Titles/Title"

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <Title variant="1">Text1</Title>
        <Title variant="2">Text2</Title>
        <Title variant="3" style={{ color: "red" }}>Text3</Title>
      </MainLayout>
    </>
  )
}

export default App
