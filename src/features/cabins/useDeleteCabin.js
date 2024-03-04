import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabins as deleteCabinsApi } from "../../services/apiCabins";

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (cabinId) => deleteCabinsApi(cabinId),
    onSuccess: () => {
      toast.success("Cabin successfylly deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}

export default useDeleteCabin;
