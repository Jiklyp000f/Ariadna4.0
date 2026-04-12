import { Footer } from "./componets/Footer/Footer"
import { Header } from "./componets/Header/Header"
import { ContentLayout } from "./componets/Layouts/ContentLayuot/ContentLayout"
import { MainLayout } from "./componets/Layouts/MainLayout/MainLayout"
import { CardSection } from "./componets/Sections/CardSection/CardSection"
import { MapSection } from "./componets/Sections/MapSection/MapSection"
import { QRSection } from "./componets/Sections/QRSection/QRSection"
import { ReadySection } from "./componets/Sections/ReadySection/ReadySection"
import { SliderSection } from "./componets/Sections/SliderSection/SliderSection"
import { TopSection } from "./componets/Sections/TopSection/TopSection"

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <ContentLayout>
          <TopSection />
          <CardSection />
          <SliderSection />
          <MapSection />
          <ReadySection />
          <QRSection />
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>

  )
}

export default App
