import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import { Button } from '../../components/Button/Button';

const Home: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const router = useIonRouter();

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
            <Button type='add' onClick={()=> router.push("/AddActivity", "forward", "push")}>
                Añadir tarea
            </Button>

            <Button type='remove' onClick={() => router.push("/DeleteActivity", "forward", "push")}>
                Borrar tarea
            </Button>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
