import { Header } from "./componets/Header/Header"
import { MainLayout } from "./componets/Layouts/MainLayout"
import { TopSection } from "./componets/Sections/TopSection"

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <TopSection />
      </MainLayout>
    </>
  )
}

export default App
