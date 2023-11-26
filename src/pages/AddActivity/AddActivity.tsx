import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './AddActivity.css';

const AddActivity: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent fullscreen>
            <h1>Hola</h1>
      </IonContent>
    </IonPage>
  );
};

export default AddActivity;
