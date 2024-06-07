import AboutSection from './components/AboutSection/AboutSection';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import Message from './components/Message/Message';
import Modal from './components/Modal/Modal';
import Profile from './components/Profile/Profile';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';

import profileData from './assets/user.json'; //+
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

  const a = 'Alex';
  const isOnline = false;
  const age = 21;
  const selectedTab = 'films';
  const loading = false;

  // console.log(`hello,${a}`);
  console.log(`hello, ${a}`);
  return (
    <div>
      <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quidem soluta labore laborum consequatur illo
        officia optio incidunt hic dignissimos sit sapiente adipisci deleniti, molestias, odio unde dolore fugit
        quaerat?
      </section>
      {loading && <h1>LOADING...</h1>}
      <Header />
      <main>
        {isOnline && <h1>Welcome, friend!</h1>}
        {age > 18 ? (
          <h2 className='title green'>Ого який дорослий!</h2>
        ) : (
          <h2 className='title red'>Тобі ще треба підрости!</h2>
        )}

        <div>
          <Button>Hello</Button>
          <Button>Submit</Button>
        </div>
        <Profile {...profileData} />
        <Modal>
          <h3>Продам холодильник</h3>
          <img
            src='https://i5.walmartimages.com/seo/Galanz-4-6-Cu-ft-Two-Door-Mini-Refrigerator-with-Freezer-Stainless-Steel-New-Width-19-13_66eb4769-f8a8-47b6-a29c-2be38d4ae0ad.6c130beaaf7d5adc0bda61b3ae6be2dd.jpeg'
            width={300}
          />
        </Modal>
        <Modal>
          <h3>Екстренні новини</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consequatur quaerat ab maiores labore,
            distinctio aliquid maxime suscipit quas sit quis. Quis sequi consequuntur nesciunt dolorem tempore at ipsa
            consequatur?
          </p>
        </Modal>

        <AboutSection />
        <WelcomeSection></WelcomeSection>

        {selectedTab === 'films' ? (
          <List items={filmsData} user='Alex' title='Films list' count={filmsData.length} />
        ) : (
          <List items={goodsData} title='Wishlist ' count={goodsData.length} />
        )}
      </main>
      <Message isOnline={true} author='Olena' text='How are you?' isImportant={true} />
      <Message isOnline={true} author='Petro' text='React is so cool lib' />
      <Message isOnline={true} author='Ihor' text='Whats up!' />

      <div>
        <h2>Hello</h2>
      </div>

      <Footer />
    </div>
  );
};

export default App;
