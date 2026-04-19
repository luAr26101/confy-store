import { useNavigation } from "react-router";
import { cn } from "../lib/utils";

interface SubmitBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function SubmitBtn({ children, className, ...props }: SubmitBtnProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={cn("btn btn-primary btn-block", className)}
      disabled={isSubmitting}
      {...props}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>{" "}
          sending...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default SubmitBtn;
