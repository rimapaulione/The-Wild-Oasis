import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginSupabase } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isLoading: isLogin,
    mutate: login,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginSupabase({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);

      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { isLogin, login, error };
}
