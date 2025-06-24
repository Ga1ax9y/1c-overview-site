import './App.css'
import Button from './components/ui/Button'
import Header from './components/layout/Header'
import Products from './pages/Products';
function App() {
  return  (
    <>
      <Header />
      <main className='content'>
      <section className='products'>
        <h1 className='products__title title-big'>Программные продукты 1С</h1>
        <Products />
      </section>
      </main>
    </>
  );
}

export default App
