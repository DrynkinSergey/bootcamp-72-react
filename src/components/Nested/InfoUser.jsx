import Modal from '../Modal/Modal';
import { useToggle } from '../../hooks/useToggle';

export const InfoUser = () => {
  const { isOpen, close, open } = useToggle();

  return (
    <div>
      <h2>InfoUser</h2>
      <button onClick={open}>Show</button>
      {isOpen && (
        <Modal onClose={close}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero in provident sequi quam aliquid rem nostrum
          molestias hic, magnam, tempore, beatae velit itaque eos excepturi quidem. At harum consequatur labore. Maxime
          totam quidem amet sit labore quod quas saepe quasi sequi libero laboriosam, perspiciatis ipsam consequuntur,
          culpa hic reprehenderit et aspernatur odit vel nihil dicta cumque alias atque ducimus. Quia. Corporis non
          similique delectus tempore, dolores ut quisquam, fuga magni, laboriosam consequatur ullam aspernatur aliquam
          sapiente ea rerum perspiciatis? Quae iste nobis at voluptatibus mollitia dolorum molestiae repellendus
          consequatur deserunt?
        </Modal>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero laborum voluptatem ipsam dolores? Maxime
        laboriosam ab repellendus possimus fugiat error inventore sapiente debitis. Rem consectetur fugiat assumenda
        molestias magnam.
      </p>
    </div>
  );
};
export default InfoUser;
