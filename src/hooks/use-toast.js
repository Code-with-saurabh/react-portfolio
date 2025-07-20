import { toast } from "sonner"; // or your toast library

export function useToast() {
  return {
    toast: ({ title, description }) => {
      toast(`${title} - ${description}`);
    },
  };
}
