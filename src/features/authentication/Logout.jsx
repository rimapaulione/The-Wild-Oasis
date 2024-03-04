import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <ButtonIcon onClick={() => logout()}>
      {isLoading ? <SpinnerMini /> : <HiArrowLeftOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
