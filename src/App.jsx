import './App.css'
import AppRouter from './routes/AppRouter';
import Header from './components/layout/Header'
import Products from './pages/Products';
function App() {
  return  (
    <>
      <Header />
      <main className='content'>
        <AppRouter />
      </main>
    </>
  );
}

export default App
