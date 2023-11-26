import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <main>
            <h1 className='title'>Bienvenido</h1>

            <section className='menu_tasks'>
                <h2 className='title2'>Eventos proximos</h2>

                <section className='tasks'>

                </section>
                <section className='tasks'>
                        
                </section>
                <section className='tasks'>
                        
                </section>
                <section className='tasks'>
                        
                </section>  


            </section>

            


        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
