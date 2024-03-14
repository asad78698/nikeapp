
import { Hero, SuperQuality, Services, SpecialOffers, CustomerReview, Subscribers, PopularProducts, Footer} from './sections';
import Nav from './Components/Nav'

const App = () => {
  return (
    <main className=''>
      
      <Nav/>

      <section className='xl: padding-l wide: padding-r padding-b'>
        <Hero/>
      </section>

      <section className='padding'>
        <PopularProducts/>
      </section>

      <section className='padding'>
         <SuperQuality/>
      </section>

      <section className='padding'>
         <Services/>
      </section>

      <section className='padding'>
        <SpecialOffers/>
      </section>

      <section className='padding bg-pale-blue'>
        <CustomerReview/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribers/>
      </section>

      <section className='padding-x padding-t bg-black pb-8'>
        <Footer/>
      </section>

    </main>
   
  )
}

export default App