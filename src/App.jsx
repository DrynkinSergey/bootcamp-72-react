import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import Message from './components/Message/Message';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';

const App = () => {
  const filmsData = [
    { id: '1', title: 'Batman', completed: false },
    { id: '2', title: 'GoT', completed: true },
    { id: '3', title: 'Taxi', completed: false },

    { id: '5', title: 'Taxi3', completed: false },
    { id: '6', title: 'Taxi333', completed: true },
  ];

  const goodsData = [
    { id: '1', title: 'Laptop', completed: true },
    { id: '2', title: 'Iphone 18 PRO MAX SUPER', completed: false },
  ];

  const isOnline = false;
  const age = 2;
  const selectedTab = 'films';
  const loading = false;
  return (
    <div>
      {loading && <h1>LOADING...</h1>}
      <Header />
      <main>
        {isOnline && <h1>Welcome, friend!</h1>}
        {age > 18 ? <h2>Ого який дорослий!</h2> : <h2>Тобі ще треба підрости!</h2>}
        <AboutSection />
        <WelcomeSection />
        <Message author='Olena' text='Hello!' />
        <Message author='Petro' text='React is so cool lib' />
        <Message author='Ihor' text='Whats up!' />

        {selectedTab === 'films' ? (
          <List items={filmsData} user='Alex' title='Films list' count={filmsData.length} />
        ) : (
          <List items={goodsData} title='Wishlist ' count={goodsData.length} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
