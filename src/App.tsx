import { Header } from "./componets/Header/Header"
import { MainLayout } from "./componets/Layouts/MainLayout"
import { CardSection } from "./componets/Sections/CardSection/CardSection"
import { SliderSection } from "./componets/Sections/SliderSection/SliderSection"
import { TopSection } from "./componets/Sections/TopSection/TopSection"

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <TopSection />
        <CardSection />
        <SliderSection />
      </MainLayout>
    </>
  )
}

export default App
