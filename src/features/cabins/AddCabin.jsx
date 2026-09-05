import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// Using Compound Component

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setisOpenModel] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setisOpenModel((show) => !show)}>
//         Add new Cabin
//       </Button>
//       {isOpenModel && (
//         <Modal onClose={() => setisOpenModel(false)}>
//           <CreateCabinForm onCloseModal={() => setisOpenModel(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
