import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingSupabase } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoadin: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingSupabase(id),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}