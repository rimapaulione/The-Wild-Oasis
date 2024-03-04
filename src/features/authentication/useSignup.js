import { useMutation } from "@tanstack/react-query";
import { signup as signupSupabase } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupSupabase,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new accoutn from user's email address. "
      );
    },
  });
  return { signup, isLoading };
}
