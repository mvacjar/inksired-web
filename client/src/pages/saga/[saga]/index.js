export { default } from './saga';
import { Saga } from '@/api';

export async function getServerSideProps(context) {
  const {
    params: { saga },
  } = context;

  const sagaCtrl = new Saga();
  const response = await sagaCtrl.getSagaBySlug(saga);
  console.log(response);

  return { props: { saga: response } };
}
