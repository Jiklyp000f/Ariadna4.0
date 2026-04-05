import { Footer } from "./componets/Footer/Footer"
import { Header } from "./componets/Header/Header"
import { ContentLayout } from "./componets/Layouts/ContentLayuot/ContentLayout"
import { MainLayout } from "./componets/Layouts/MainLayout/MainLayout"
import { CardSection } from "./componets/Sections/CardSection/CardSection"
import { SliderSection } from "./componets/Sections/SliderSection/SliderSection"
import { TopSection } from "./componets/Sections/TopSection/TopSection"

function App() {

  return (
    <MainLayout>
      <Header />
      <ContentLayout>
        <TopSection />
        <CardSection />
        <SliderSection />
      </ContentLayout>
      <Footer />
    </MainLayout>
  )
}

export default App
